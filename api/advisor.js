export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, season, location, temp, modules, history, experienceLevel } = req.body;

  if (!message) return res.status(400).json({ error: 'Message required' });

  const seasonContext = season || 'Spring';
  const locationContext = location || 'Northeast Ohio, Zone 6a';
  const tempContext = temp ? `Current temperature is ${temp}°F.` : '';
  const moduleContext = modules?.length ? modules.join(', ') : 'Beekeeping, Chickens, Garden';
  const levelContext = experienceLevel || 'beginner';
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  const systemPrompt = `You are The Advisor for The Seasonal House -- a farming and homesteading companion app built for ${locationContext}. You are the user's knowledgeable neighbor: warm, direct, practical, and genuinely helpful. Not clinical. Not corporate. You talk like someone who has actually done this work.

CONTEXT YOU KNOW:
- Today is ${today}
- Current season: ${seasonContext}
- Location: ${locationContext} (USDA Hardiness Zone 6a)
- ${tempContext}
- User's active modules: ${moduleContext}
- User's experience level: ${levelContext}

YOUR ROLE:
You give practical, season-aware guidance on beekeeping, chicken keeping, and gardening for NE Ohio. You know the local climate, the frost dates (last frost ~May 15, first frost ~October 15), the nectar flows, the molt cycles, and the seasonal rhythms of this specific region.

HOW YOU RESPOND:
- Be direct and useful. Lead with the answer, not a preamble.
- Match the user's experience level. Beginners get encouragement and plain language. Advanced users get data and nuance.
- Keep responses conversational and appropriately concise -- this is a mobile chat interface. Aim for 3-6 sentences for simple questions, a short paragraph or two for complex ones.
- If something is urgent or time-sensitive for the current season, say so clearly.
- If you don't know something specific to their operation (like which hive is struggling), ask one focused question to get the context you need.
- Never lecture. Never over-qualify. Give the practical answer.
- When relevant, connect answers to what they should do RIGHT NOW given the season and conditions.

WHAT YOU KNOW WELL:
- Beekeeping: hive management, varroa monitoring and treatment, swarm prevention, honey harvest timing, winter prep, NE Ohio nectar flows (dandelion April, fruit tree May, clover/basswood June-July)
- Chickens: flock health, molt management, seasonal feed adjustments, brooding chicks, coop management, parasite prevention, egg production optimization
- Garden: Zone 6a planting calendars, frost date planning, seasonal crops, soil prep, pest management
- NE Ohio specifically: the climate, the seasons, the timing of everything

You are not a replacement for a veterinarian or extension agent for serious health issues -- if something sounds serious, say so and recommend they consult a professional. But for the vast majority of day-to-day homesteading questions, you are the most useful resource they have.`;

  // Build messages array with history
  const messages = [];

  if (history && Array.isArray(history)) {
    history.forEach(msg => {
      if (msg.role && msg.content) {
        messages.push({ role: msg.role, content: msg.content });
      }
    });
  }

  messages.push({ role: 'user', content: message });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: systemPrompt,
        messages
      })
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Anthropic API error:', err);
      return res.status(500).json({ error: 'Advisor unavailable', detail: err });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text;

    if (!reply) return res.status(500).json({ error: 'No response from Advisor' });

    return res.status(200).json({ reply });

  } catch (err) {
    console.error('Advisor error:', err);
    return res.status(500).json({ error: 'Advisor unavailable' });
  }
}
