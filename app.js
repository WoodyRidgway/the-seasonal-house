// ── THE SEASONAL HOUSE APP ──

// ── STATE ──
const state = {
  currentScreen: 'dashboard',
  experienceLevel: 'beginner',
  currentTask: null,
  chatMessages: [],
  logs: [
    { date: 'Jun 1', title: 'Hive 1 Inspection', detail: 'Queen spotted, good brood pattern, no signs of mites', tag: 'Beekeeping' },
    { date: 'May 28', title: 'Added pollen patty', detail: 'Hive 2 — placed above cluster, colony looks strong', tag: 'Beekeeping' },
    { date: 'May 25', title: 'Coop deep clean', detail: 'Spring refresh complete, fresh bedding added', tag: 'Chickens' },
    { date: 'May 20', title: 'Tomatoes started indoors', detail: '24 seeds planted — Celebrity and Roma varieties', tag: 'Garden' },
  ]
};

// ── TASK DATA ──
const tasks = [
  {
    id: 1,
    title: 'Add pollen patty to Hive 2',
    module: 'Beekeeping',
    moduleIcon: '🐝',
    moduleBg: '#E1F5EE',
    time: '~15 min',
    urgency: 'urgent',
    badge: 'Do this week',
    what: {
      beginner: 'Place a pollen patty on top of the frames directly above the brood cluster in Hive 2.',
      intermediate: 'Place a pollen patty above the cluster in Hive 2 before this week\'s cold snap.',
      advanced: 'Apply pollen substitute patty above cluster — Hive 2 showing low protein stores, critical before cold front.'
    },
    how: {
      beginner: 'Open the hive on a calm day when temps are above 50°F. Remove the inner cover. Lay the pollen patty directly on top of the frames, centered above where you can see the cluster of bees. Replace the cover gently. You don\'t need to remove any frames for this task.',
      intermediate: 'Open on a 50°F+ day. Place patty directly on frames above cluster. No need to inspect frames — close up quickly to retain heat.',
      advanced: 'Quick open — patty on frames above cluster. Minimize heat loss. Check cluster size while you\'re in there.'
    },
    why: {
      beginner: 'Your bees need protein to raise baby bees (called brood). In early spring, natural pollen isn\'t reliably available yet in your area. Without protein the queen slows down or stops laying eggs. A well-fed colony right now means a strong workforce of forager bees in 6 weeks when the nectar flow begins — and that\'s what makes honey.',
      intermediate: 'Early spring protein is critical for brood rearing before natural pollen is consistently available. Colony strength in May depends on what you do in March.',
      advanced: 'Protein patty now drives brood rearing for peak nectar flow population. Delayed protein = reduced forager population at flow start.'
    },
    beginnerNote: 'Don\'t open the hive if temps are below 50°F — chilling the brood can kill it. Check your weather before heading out. When in doubt, wait for a warmer day.'
  },
  {
    id: 2,
    title: 'Deep clean coop — spring refresh',
    module: 'Chickens',
    moduleIcon: '🐔',
    moduleBg: '#FEF3E8',
    time: '~45 min',
    urgency: 'soon',
    badge: 'This week',
    what: {
      beginner: 'Remove all old bedding from the coop, scrub the surfaces, and add fresh bedding.',
      intermediate: 'Full spring coop refresh — remove bedding, scrub with diluted vinegar, add fresh pine shavings.',
      advanced: 'Spring deep clean — remove all bedding, sanitize surfaces, check for mites, refresh bedding, inspect hardware.'
    },
    how: {
      beginner: 'Move your flock to a safe outdoor area. Remove all the old bedding and put it in your compost — it\'s great for the garden. Scrub the floor, walls, and roosts with a mix of white vinegar and water (50/50). Let everything dry completely — this is important. Add 4-6 inches of fresh pine shavings. Check that the waterer and feeder are clean before putting your flock back.',
      intermediate: 'Clear all bedding to compost. Scrub with diluted white vinegar, let dry fully. Add fresh shavings. Inspect roosts for mites while surfaces are bare.',
      advanced: 'Full removal, sanitize with vinegar solution, inspect roost bars for red mite (check during daylight, mites hide in cracks). Dust with food grade DE if evidence present. Fresh deep bedding.'
    },
    why: {
      beginner: 'Old wet bedding builds up ammonia which irritates your chickens\' lungs and makes them more likely to get sick. Spring is the perfect time to reset because your flock has been inside more during winter and the coop has had months to accumulate bacteria and moisture. A clean dry coop in spring sets up a healthy flock for the whole year.',
      intermediate: 'Winter accumulation of moisture and ammonia stresses the flock. Spring clean resets the environment and is the best time to catch early mite infestations before they establish.',
      advanced: 'Post-winter sanitation critical. Red mite populations surge in spring warmth. Early intervention is significantly easier than treating an established infestation.'
    },
    beginnerNote: 'White vinegar is safe, cheap, and effective. You don\'t need harsh chemicals. Make sure the coop is completely dry before adding new bedding — damp bedding creates the exact problems you\'re trying to fix.'
  },
  {
    id: 3,
    title: 'Start tomato seeds indoors',
    module: 'Garden',
    moduleIcon: '🌱',
    moduleBg: '#EAF4DE',
    time: '~30 min',
    urgency: 'routine',
    badge: 'On track',
    what: {
      beginner: 'Plant tomato seeds in small containers indoors so they\'re ready to transplant outside after your last frost date.',
      intermediate: 'Start tomato seeds indoors — 6-8 weeks before last frost for your zone.',
      advanced: 'Sow tomato seeds indoors — target transplant date 2 weeks after last frost for Zone 6a.'
    },
    how: {
      beginner: 'Fill small containers or a seed tray with seed starting mix (not regular potting soil). Plant 2 seeds per cell about 1/4 inch deep. Water gently so the soil is damp but not soaking. Cover with plastic wrap or a humidity dome to keep moisture in. Put them somewhere warm — on top of the fridge works great. Once you see sprouts (usually 5-10 days) move them to your sunniest window or under a grow light.',
      intermediate: 'Seed starting mix in trays, 2 seeds per cell, 1/4 inch deep. Bottom heat speeds germination. Move to bright light immediately on germination to prevent legginess.',
      advanced: 'Sow in 72-cell trays under 16hr light cycle. Bottom heat to 75-80°F for germination. Thin to strongest seedling. Harden off starting week 8.'
    },
    why: {
      beginner: 'Tomatoes need a long growing season — more than most places have if you wait to plant outside. Starting them indoors gives them 6-8 weeks of growth before they go in the ground, which means you\'ll get tomatoes weeks earlier and the plants will be strong enough to handle whatever spring throws at them.',
      intermediate: 'Tomatoes need 60-80 days to fruit from transplant. Indoor start ensures transplant-ready seedlings hit the ground as soon as soil temps allow.',
      advanced: 'Indeterminate varieties need maximum season length for yield. Indoor start optimizes days-to-harvest against Zone 6a growing window.'
    },
    beginnerNote: 'The most common beginner mistake is starting seeds too early. In NE Ohio, count back 6-8 weeks from your last frost date (around May 15). That puts your start date around late March to early April. Starting too early gives you leggy, weak plants.'
  }
];

// ── NAVIGATION ──
function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const targetScreen = document.getElementById(`screen-${screen}`);
  if (targetScreen) targetScreen.classList.add('active');

  const targetNav = document.querySelector(`[data-nav="${screen}"]`);
  if (targetNav) targetNav.classList.add('active');

  state.currentScreen = screen;

  // Update top nav title
  const titles = {
    dashboard: 'The Seasonal House',
    modules: 'My Modules',
    advisor: 'The Advisor',
    logs: 'Logs & Records',
    settings: 'Settings'
  };
  document.getElementById('nav-title').textContent = titles[screen] || 'The Seasonal House';
}

// ── TASK DETAIL ──
function openTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  state.currentTask = task;
  renderTaskDetail(task, state.experienceLevel);
  navigate('task-detail');
}

function renderTaskDetail(task, level) {
  document.getElementById('detail-module').textContent = `${task.moduleIcon} ${task.module} · Spring`;
  document.getElementById('detail-title').textContent = task.title;
  document.getElementById('layer-what').textContent = task.what[level];
  document.getElementById('layer-how').textContent = task.how[level];
  document.getElementById('layer-why').textContent = task.why[level];
  document.getElementById('beginner-note').textContent = task.beginnerNote;

  document.querySelectorAll('.exp-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
}

function setExperience(level) {
  state.experienceLevel = level;
  if (state.currentTask) renderTaskDetail(state.currentTask, level);
}

function backToDashboard() {
  navigate('dashboard');
}

function completeTask() {
  if (!state.currentTask) return;
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  state.logs.unshift({
    date: today,
    title: state.currentTask.title + ' — completed',
    detail: `Marked complete from ${state.currentTask.module} module`,
    tag: state.currentTask.module
  });
  renderLogs();
  alert('✅ Task logged! Great work.');
  navigate('dashboard');
}

// ── RENDER DASHBOARD ──
function renderDashboard() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = tasks.map(task => `
    <div class="card task-card" onclick="openTask(${task.id})">
      <div class="task-icon" style="background:${task.moduleBg}">${task.moduleIcon}</div>
      <div class="task-info">
        <div class="task-title">${task.title}</div>
        <div class="task-meta">${task.module} · ${task.time}</div>
        <span class="task-badge badge-${task.urgency}">${task.badge}</span>
      </div>
      <div class="task-chevron">›</div>
    </div>
  `).join('');
}

// ── RENDER LOGS ──
function renderLogs() {
  const logList = document.getElementById('log-list');
  logList.innerHTML = state.logs.map(log => `
    <div class="card log-entry">
      <div class="log-date">${log.date}</div>
      <div class="log-content">
        <div class="log-title">${log.title}</div>
        <div class="log-detail">${log.detail}</div>
        <span class="log-tag">${log.tag}</span>
      </div>
    </div>
  `).join('');
}

// ── ADVISOR (CLAUDE API) ──
async function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  input.value = '';
  addMessage(message, 'user');

  const sendBtn = document.getElementById('chat-send');
  sendBtn.disabled = true;
  addMessage('Thinking...', 'thinking', 'thinking-msg');

  try {
    const response = await fetch('/api/advisor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        season: 'Spring',
        location: 'Northeast Ohio',
        modules: ['Beekeeping', 'Chickens', 'Garden'],
        history: state.chatMessages.slice(-6)
      })
    });

    const data = await response.json();
    document.getElementById('thinking-msg')?.remove();

    if (data.reply) {
      addMessage(data.reply, 'assistant');
      state.chatMessages.push({ role: 'user', content: message });
      state.chatMessages.push({ role: 'assistant', content: data.reply });
    } else {
      addMessage('Sorry, something went wrong. Try again.', 'assistant');
    }
  } catch (err) {
    document.getElementById('thinking-msg')?.remove();
    addMessage('Sorry, I couldn\'t connect right now. Try again in a moment.', 'assistant');
  }

  sendBtn.disabled = false;
}

function addMessage(text, type, id = null) {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `message ${type}`;
  if (id) div.id = id;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function askSuggested(question) {
  document.getElementById('chat-input').value = question;
  sendMessage();
}

// ── TOGGLE ──
function toggleSetting(el) {
  el.classList.toggle('on');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderLogs();
  navigate('dashboard');

  document.getElementById('chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
});
