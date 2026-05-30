export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const PUBLICATION_ID = 'pub_7b5f6f8e-e405-4050-9356-5319ba0a7cc1';
  const API_KEY = 'WLRdsgHg7bQMDZMgJKmW9g8eWruzu5UlLnbMVfnDPM7DmGcqGtOnF9LA16AEZVHp';

  try {
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'landing_page',
        utm_medium: 'organic',
        utm_campaign: 'waitlist'
      })
    });

    const data = await response.json();

    if (response.ok || response.status === 201) {
      return res.status(200).json({ success: true });
    } else {
      console.error('Beehiiv error:', data);
      return res.status(400).json({ error: data.message || 'Subscription failed' });
    }
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
