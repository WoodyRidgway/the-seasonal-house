// ── BEEKEEPING MODULE DATA ──

const beekeepingTasks = [
  // SPRING TASKS
  {
    id: 'bk1',
    season: 'Spring',
    title: 'First full inspection of the season',
    priority: 'urgent',
    badge: 'Do this week',
    time: '~45 min',
    requiresInspection: true,
    what: {
      beginner: 'Open your hive and do a full check of every frame to see how your colony survived winter and what condition they\'re in right now.',
      intermediate: 'Full spring inspection -- assess winter survival, check queen status, brood pattern, stores, and population strength.',
      advanced: 'Spring assessment -- queen presence/laying pattern, brood viability, varroa baseline, stores, population trajectory for nectar flow prep.'
    },
    how: {
      beginner: 'Wait for a calm sunny day above 55F. Light your smoker with dry wood chips or pine needles. Give 2-3 puffs at the entrance, wait 30 seconds, then open the top. Work slowly and deliberately. Look at every frame -- you\'re looking for eggs (tiny white grains standing upright in cells), young larvae (white C-shaped grubs), capped brood (tan wax caps), honey stores (capped or open), and ideally the queen herself. Take notes on what you see.',
      intermediate: 'Smoke entrance and under cover. Work frame by frame outer to inner. Look for: laying queen or eggs, solid brood pattern, adequate spring stores (at least 2 frames), healthy bees with no obvious disease signs. Note population size.',
      advanced: 'Systematic inspection: brood nest center out. Assess queen quality by laying pattern (solid = good, scattered = failing queen). Count varroa on 100 bees or do alcohol wash. Evaluate population against seasonal curve -- should be building rapidly now.'
    },
    why: {
      beginner: 'This is the most important inspection of the year. You need to know if your queen is alive and laying, if your colony has enough bees to build up for the spring nectar flow, and if there are any problems you need to address before they become serious. Problems caught in early spring are much easier to fix than problems found in summer.',
      intermediate: 'Spring assessment establishes your baseline for the season. A queenright colony with adequate stores and growing population is on track. Any deviation needs immediate attention -- time is critical before nectar flow.',
      advanced: 'First spring inspection sets the trajectory. Colonies that are queenright, well-stored, and building population in March/April will be at peak strength for main nectar flow. Intervention now has maximum ROI.'
    },
    beginnerNote: 'Don\'t panic if you can\'t find the queen. If you see eggs the queen was there within the last 3 days. Fresh eggs are harder to see -- hold the frame up so sunlight shines into the cells at an angle.'
  },
  {
    id: 'bk2',
    season: 'Spring',
    title: 'Add pollen patty to Hive 2',
    priority: 'urgent',
    badge: 'Do this week',
    time: '~15 min',
    requiresInspection: true,
    what: {
      beginner: 'Place a pollen patty on top of the frames directly above the brood cluster in Hive 2.',
      intermediate: 'Place a pollen patty above the cluster in Hive 2 before this week\'s cold snap.',
      advanced: 'Apply pollen substitute patty above cluster -- Hive 2 showing low protein stores, critical before cold front.'
    },
    how: {
      beginner: 'Open the hive on a calm day when temps are above 50F. Remove the inner cover. Lay the pollen patty directly on top of the frames, centered above where you can see the cluster of bees. Replace the cover gently. You don\'t need to remove any frames for this task.',
      intermediate: 'Open on a 50F+ day. Place patty directly on frames above cluster. No need to inspect frames -- close up quickly to retain heat.',
      advanced: 'Quick open -- patty on frames above cluster. Minimize heat loss. Check cluster size while you\'re in there.'
    },
    why: {
      beginner: 'Your bees need protein to raise baby bees. In early spring, natural pollen isn\'t reliably available yet in NE Ohio. Without protein the queen slows down or stops laying eggs. A well-fed colony right now means a strong workforce of forager bees in 6 weeks when the nectar flow begins.',
      intermediate: 'Early spring protein is critical for brood rearing before natural pollen is consistently available. Colony strength in May depends on what you do now.',
      advanced: 'Protein patty now drives brood rearing for peak nectar flow population. Delayed protein = reduced forager population at flow start.'
    },
    beginnerNote: 'Don\'t open the hive if temps are below 50F -- chilling the brood can kill it. Check the weather before heading out.'
  },
  {
    id: 'bk3',
    season: 'Spring',
    title: 'Check for swarm cells',
    priority: 'soon',
    badge: 'Weekly check',
    time: '~20 min',
    requiresInspection: true,
    what: {
      beginner: 'Look for swarm cells -- special queen cells your bees build when they\'re planning to swarm. Check every 7-10 days through spring.',
      intermediate: 'Weekly swarm cell inspection -- check bottom of frames and between boxes for queen cells.',
      advanced: 'Weekly swarm prevention inspection. Check all frame bottoms and edges. Assess congestion, drone population, and general swarm pressure.'
    },
    how: {
      beginner: 'Open the hive and look at the bottom edges of every frame and between the boxes. Swarm cells look like peanut shells hanging downward -- they\'re bigger than regular cells and usually found on the bottom or edges of frames. If you find capped swarm cells your bees are serious about swarming and you need to act quickly.',
      intermediate: 'Check bottom bar and frame edges for queen cells. Also assess: is the brood nest congested? Are bees bearding heavily? Both are swarm pressure indicators. Consider adding space if needed.',
      advanced: 'Systematic swarm assessment: queen cell locations and stage, population density, honey bound brood nest, drone percentage. Intervention options: split, add space, remove/manage cells.'
    },
    why: {
      beginner: 'Swarming is natural but means you lose half your bees. A strong colony that swarms in spring goes from potentially making 50 pounds of honey to making almost none -- and your remaining colony is weakened for weeks. Catching swarm signs early gives you options.',
      intermediate: 'Swarm prevention is the single biggest lever on spring honey production. A colony that swarms loses population at exactly the wrong time -- right before main flow.',
      advanced: 'Swarm impulse peaks in late spring. Once queen cells are capped your window for prevention is closed. Weekly inspection is the only reliable prevention strategy.'
    },
    beginnerNote: 'Finding swarm cells doesn\'t mean you\'ve failed. It means your bees are healthy and strong. Now you have choices -- split the hive, remove the cells, or let them swarm. Ask a mentor or your local beekeeping club what makes most sense for your situation.'
  },
  {
    id: 'bk4',
    season: 'Spring',
    title: 'Add a honey super',
    priority: 'soon',
    badge: 'Nectar flow approaching',
    time: '~20 min',
    requiresInspection: false,
    what: {
      beginner: 'Add an empty box (called a super) on top of your hive to give your bees space to store the honey they\'re about to start making.',
      intermediate: 'Add honey super when 80% of frames in the brood box are drawn and population is strong.',
      advanced: 'Add supers before flow -- NE Ohio dandelion flow starting now. Stack ahead of population to prevent swarming and maximize storage.'
    },
    how: {
      beginner: 'When you look in your hive and almost every frame is covered with bees and drawn comb, it\'s time to add a super. Place the new box directly on top of your brood box. If using a queen excluder place it between the brood box and the super. Your bees will move up and start filling the new frames with honey.',
      intermediate: 'Place super on top of brood box. Queen excluder optional -- excluder keeps honey cleaner but some colonies are slow to accept it. Monitor acceptance over 1 week.',
      advanced: 'Pre-position supers before flow hits. NE Ohio dandelion flow is early indicator -- add first super now. Second super ready to stack when first is 70% full. Never let supers get honey-bound.'
    },
    why: {
      beginner: 'If you don\'t give your bees enough space to store honey they\'ll run out of room. When that happens they either swarm (leaving with half the colony) or stop collecting entirely. Adding a super at the right time is one of the most important things you can do for a good honey harvest.',
      intermediate: 'Space management is directly tied to swarm prevention and honey production. Congested colonies swarm. Colonies with room produce honey.',
      advanced: 'Super timing is critical. Too early wastes heat maintaining empty comb. Too late triggers swarm impulse or causes bees to back-fill brood nest with nectar (honey bound). The window is narrow -- know your local flow dates.'
    },
    beginnerNote: 'Not sure if it\'s time? A good rule of thumb: if you can\'t see any empty cells when you look down at the top of your frames from above, it\'s time for a super.'
  },

  // SUMMER TASKS
  {
    id: 'bk5',
    season: 'Summer',
    title: 'Monitor varroa mite levels',
    priority: 'urgent',
    badge: 'Monthly check',
    time: '~30 min',
    requiresInspection: false,
    what: {
      beginner: 'Count the varroa mites in your hive using a sugar roll or alcohol wash to make sure your mite levels are safe.',
      intermediate: 'Monthly varroa monitoring -- alcohol wash or sugar roll. Action threshold: 2% in summer.',
      advanced: 'Monthly varroa wash. Summer threshold 2% (2 mites per 100 bees). Treat immediately if exceeded -- summer mite bomb kills winter bees.'
    },
    how: {
      beginner: 'The easiest method is a sugar roll. Collect about 300 bees (roughly half a cup) from a brood frame into a jar with 2 tablespoons of powdered sugar. Close the jar and roll it gently for 2 minutes. Shake the sugar through a mesh lid onto a white surface. Count the mites that fall out. Divide by 3 to get your percentage. Above 2% means you need to treat.',
      intermediate: 'Alcohol wash is more accurate than sugar roll. 300 bees in isopropyl alcohol, shake 60 seconds, strain and count mites. Divide by 3 for percentage. Record results and date.',
      advanced: 'Alcohol wash only -- sugar roll undercounts by 30-40%. Target sample from brood nest frame with nurse bees. Record trend over season. Treatment decision based on threshold AND trajectory.'
    },
    why: {
      beginner: 'Varroa mites are the number one killer of honey bee colonies. They feed on bees and spread viruses that shorten bees\' lives and eventually collapse the colony. Monitoring monthly tells you if your mite levels are safe or if you need to treat. Catching a mite problem early is the difference between saving your colony and losing it.',
      intermediate: 'Summer varroa management protects the winter bees being raised in August-September. High mite loads during this window produce short-lived, unhealthy winter bees -- the colony dies in February not because of winter but because of what happened in summer.',
      advanced: 'August is the critical window. Winter bees raised with high viral loads from varroa cannot form a viable winter cluster. Treatment must happen before winter bee rearing begins -- typically treat by August 1 in Zone 6a.'
    },
    beginnerNote: 'This sounds complicated but it\'s not once you\'ve done it once. Most local beekeeping clubs hold mite monitoring workshops -- highly recommend attending one before your first test.'
  },
  {
    id: 'bk6',
    season: 'Summer',
    title: 'Harvest honey',
    priority: 'soon',
    badge: 'Flow ending',
    time: '~3-4 hours',
    requiresInspection: true,
    what: {
      beginner: 'Remove your honey supers and extract the honey once the frames are capped and the nectar flow has ended.',
      intermediate: 'Harvest supers when 80%+ capped. NE Ohio main flow typically ends mid-July.',
      advanced: 'Pull supers post-flow. Check moisture content before extraction -- above 18.6% risks fermentation. Extract, filter, bottle.'
    },
    how: {
      beginner: 'Wait until most of the honey cells are capped with wax (white or tan wax caps covering the cells). Do the shake test -- hold the frame horizontally and shake it. If nectar drips out the honey is not ready. If nothing drips it\'s ready. Remove the bees from the super using a bee brush or bee escape board. Bring the frames inside to extract.',
      intermediate: 'Clear bees with escape board 24 hours before harvest. Extract within 24 hours of removal -- cold honey extracts poorly. Uncap with hot knife, spin in extractor, filter through 400 micron filter, let settle 24 hours before bottling.',
      advanced: 'Refractometer check before extraction -- target under 18.6% moisture. Warm room extraction (80F+) improves yield. Double filter, settle minimum 48 hours for best clarity. Label with harvest date and location.'
    },
    why: {
      beginner: 'Harvesting at the right time means better honey that won\'t ferment in the jar. Honey that isn\'t fully capped has too much water content and can go bad. The nectar flow in NE Ohio typically ends in mid-July -- after that your bees stop bringing in much new nectar and it\'s time to harvest what they\'ve stored.',
      intermediate: 'Post-flow harvest timing maximizes yield and quality. Leaving supers on after flow ends invites robbing and makes fall mite treatment more complex.',
      advanced: 'Harvest timing affects both quality and fall management. Supers off by late July allows complete fall mite treatment window before winter bee rearing.'
    },
    beginnerNote: 'You don\'t need a fancy extractor for your first harvest. Many local beekeeping clubs have extractors you can borrow. Ask yours before buying equipment.'
  },

  // AUTUMN TASKS
  {
    id: 'bk7',
    season: 'Autumn',
    title: 'Treat for varroa mites',
    priority: 'urgent',
    badge: 'Critical window',
    time: '~1 hour',
    requiresInspection: false,
    what: {
      beginner: 'Apply varroa mite treatment to protect the bees that will keep your colony alive through winter.',
      intermediate: 'Fall varroa treatment -- oxalic acid or Apivar. Complete by September 1 in Zone 6a.',
      advanced: 'Fall treatment window: August 15 - September 1 for Zone 6a. OA dribble or vaporization most effective when broodless or low brood. Apivar requires 6-8 week treatment window.'
    },
    how: {
      beginner: 'The most beginner-friendly treatment is oxalic acid dribble. Mix the solution according to package directions. On a cool evening (bees are clustered) remove the inner cover and slowly dribble 5ml of solution per seam of bees directly onto the bees between frames. Replace cover. One treatment is usually enough in fall when brood is low. Always wear gloves and eye protection.',
      intermediate: 'Treatment choice depends on brood levels. OA vaporization most effective when brood is low (late Sept/Oct). Apivar strips should go in by August 15 to complete treatment before first cold. Follow label directions exactly.',
      advanced: 'Timing is everything. OA vapor is 95%+ effective when broodless -- consider inducing broodlessness or treating during natural broodless period. Apivar needs 42 days minimum -- calculate backwards from first hard frost.'
    },
    why: {
      beginner: 'The bees your colony raises in August and September are the ones that will keep the colony warm and alive all winter. If those bees are infected with high varroa levels they live shorter lives and can\'t form a strong enough cluster to survive. Treating now protects those winter bees while they\'re still being raised.',
      intermediate: 'Fall treatment is the most important intervention of the year. Colonies that go into winter with high mite loads almost always die by February. The treatment window is narrow -- don\'t miss it.',
      advanced: 'Winter colony failure is almost always a fall management failure. Mite-damaged winter bees cannot thermoregulate effectively. Treatment before winter bee rearing (August) is non-negotiable for Zone 6a survival.'
    },
    beginnerNote: 'Oxalic acid sounds scary but it\'s actually one of the safest treatments available -- it\'s a naturally occurring acid found in spinach. Just follow the directions, wear gloves, and don\'t treat in temperatures above 50F.'
  },
  {
    id: 'bk8',
    season: 'Autumn',
    title: 'Assess winter stores',
    priority: 'urgent',
    badge: 'Before first frost',
    time: '~30 min',
    requiresInspection: true,
    what: {
      beginner: 'Check how much honey your bees have stored and make sure they have enough to survive winter.',
      intermediate: 'Fall stores assessment -- target 60-80lbs for Zone 6a winter. Heft test and frame count.',
      advanced: 'Stores audit: target 8-10 full frames of capped honey in Zone 6a. Heft test monthly through winter. Feed if below threshold before clustering.'
    },
    how: {
      beginner: 'Lift the back of your hive slightly. It should feel very heavy -- like lifting a bag of concrete. If it feels light your bees don\'t have enough food. You can also do a quick peek: you want to see at least 6-8 frames that are mostly capped with honey. If stores look low you need to feed sugar syrup now before temperatures drop below 50F (bees can\'t process syrup when it\'s cold).',
      intermediate: 'Heft test gives quick read -- target 80+ lbs total hive weight. Open and count honey frames. Feed 2:1 sugar syrup if below 6 full frames. Stop feeding when temps consistently below 50F.',
      advanced: 'Quantify stores precisely. 8-10 frames fully capped honey = adequate. Feed heavy syrup (2:1) immediately if short -- bees need time to dehydrate and cap before cold. Consider candy boards as insurance for marginal stores.'
    },
    why: {
      beginner: 'Starvation is one of the most common ways colonies die in winter -- even when there\'s plenty of honey in the hive. Bees form a tight cluster and can\'t move far to reach stores. Making sure food is close to the cluster right now prevents starvation in January and February when you can\'t easily intervene.',
      intermediate: 'Adequate stores assessment in October prevents the heartbreak of finding a starved colony in February. Zone 6a winters are long -- 60-80 lbs is the real target, not the minimum.',
      advanced: 'Winter starvation is almost always preventable. The failure point is usually stores that were adequate in October but the cluster couldn\'t reach by February. Stores placement matters as much as quantity.'
    },
    beginnerNote: 'When in doubt, feed. It\'s much better to have a little extra stores going into winter than to run short in February when it\'s too cold to feed syrup.'
  },
  {
    id: 'bk9',
    season: 'Autumn',
    title: 'Reduce entrance and install mouse guard',
    priority: 'soon',
    badge: 'Before October',
    time: '~15 min',
    requiresInspection: false,
    what: {
      beginner: 'Make the hive entrance smaller and add a mouse guard to protect your colony over winter.',
      intermediate: 'Reduce entrance to 4 inches or less. Install metal mouse guard before October 1.',
      advanced: 'Entrance reduction and mouse guard installation. Consider upper entrance for winter moisture management.'
    },
    how: {
      beginner: 'Use your entrance reducer (usually comes with your hive) to close the entrance down to the smallest opening -- about the size of 2-3 bees side by side. Then attach a metal mouse guard over the entrance. This is just a metal strip with holes big enough for bees but too small for mice. Staple or tack it in place.',
      intermediate: 'Install entrance reducer to smallest opening. Metal mouse guard essential -- mice will destroy comb and stress colony if they get in. Check that ventilation is adequate -- some upper entrance or moisture quilt recommended for Zone 6a.',
      advanced: 'Entrance reduction reduces cold air intrusion and makes the entrance defendable. Mouse guard non-negotiable. Upper entrance (3/8 inch hole) improves winter ventilation and allows flight on warm winter days without removing the bottom reducer.'
    },
    why: {
      beginner: 'Mice love moving into beehives in fall -- it\'s warm, dry, and full of wax and honey. A mouse living in your hive over winter will destroy comb, stress your bees, and can kill the colony. The metal mouse guard is a simple cheap fix. Reducing the entrance also makes it easier for your smaller winter cluster to defend against robbers.',
      intermediate: 'Entrance management in fall affects both defense and moisture control. Reducing entrance makes the cluster\'s defensive burden manageable. Mouse guard is essential -- a single mouse can destroy a hive in one winter.',
      advanced: 'Integrated winter prep: entrance reduction for defense, mouse guard for pest exclusion, upper entrance for CO2 escape and moisture management. Zone 6a winters generate significant condensation -- moisture management matters as much as insulation.'
    },
    beginnerNote: 'Don\'t forget this one -- it takes 15 minutes and a mouse guard costs about $3. Losing a colony to mice in February when you could have prevented it is genuinely heartbreaking.'
  },

  // WINTER TASKS
  {
    id: 'bk10',
    season: 'Winter',
    title: 'Monthly heft test',
    priority: 'routine',
    badge: 'Monthly',
    time: '~5 min',
    requiresInspection: false,
    what: {
      beginner: 'Lift the back of your hive to check if your bees still have enough food without opening the hive.',
      intermediate: 'Monthly heft test -- assess stores without disturbing cluster.',
      advanced: 'Monthly heft and ear-to-hive listening. Note weight trend. Emergency feed if significantly lighter than previous month.'
    },
    how: {
      beginner: 'On a cold day stand behind your hive and lift the back edge just a few inches. It should still feel heavy -- like lifting a full bag of dog food. If it feels noticeably lighter than last month your bees may be running low on food. You can\'t feed syrup in winter but you can place a candy board or dry sugar on top of the frames as emergency food.',
      intermediate: 'Heft monthly on a consistent day. Track relative weight change. If noticeably lighter, install candy board through top entrance without opening hive. Listen at entrance -- buzzing is good, silence is concerning.',
      advanced: 'Systematic monitoring: heft test, entrance observation (dead bees normal -- piles of dead bees concerning), temperature probe if equipped. Candy board is insurance -- cheap and low-intervention.'
    },
    why: {
      beginner: 'You can\'t open your hive in winter without chilling the cluster and potentially killing bees. The heft test lets you check food levels without disturbing them. Catching a starvation risk early gives you time to add emergency food before it\'s too late.',
      intermediate: 'January and February are the highest starvation risk months -- colony has been consuming stores for months and spring is still weeks away. Monthly monitoring catches problems while intervention is still possible.',
      advanced: 'Winter colony loss is most commonly starvation or moisture -- both are detectable and preventable with monthly monitoring. The heft test takes 30 seconds and can save a colony.'
    },
    beginnerNote: 'On a warm winter day above 50F you might see bees flying -- this is normal and called a cleansing flight. They\'ve been holding it in all winter. Don\'t worry.'
  },
  {
    id: 'bk11',
    season: 'Winter',
    title: 'Order packages or nucs for spring',
    priority: 'urgent',
    badge: 'Order now',
    time: '~20 min',
    requiresInspection: false,
    what: {
      beginner: 'Order your replacement bees or new colony for spring before they sell out -- which happens earlier than you think.',
      intermediate: 'January: order spring nucs from local suppliers. Local nucs sell out by February.',
      advanced: 'Source local overwintered nucs -- superior to packages for Zone 6a. Order by January 15. Identify 2-3 backup suppliers.'
    },
    how: {
      beginner: 'Search for local beekeeping suppliers in your area or ask your beekeeping club for recommendations. Local nucs (established small colonies) are better than packages (shipped bees) if you can find them. Call or email to reserve -- many suppliers take deposits. Pick up is usually April-May.',
      intermediate: 'Local nucs from overwintered colonies are worth the premium over packages. Contact suppliers now -- waitlists fill fast. Ohio State Beekeepers Association website lists Ohio suppliers.',
      advanced: 'Overwintered local nucs have proven cold hardiness and are already established. Avoid packages if possible -- higher establishment failure rate in Zone 6a. Confirm pickup timeline aligns with your spring inspection schedule.'
    },
    why: {
      beginner: 'Good local beekeepers sell out of nucs by February every year. If you wait until spring to order you\'ll either pay a premium for packages or wait months for availability. Ordering now in winter guarantees you have bees for spring at the best price.',
      intermediate: 'Spring nuc availability is genuinely limited. Local overwintered nucs are in highest demand. Order in January or risk missing the season entirely.',
      advanced: 'Supply chain for quality local nucs is constrained. Local genetics adapted to Zone 6a winters outperform packages significantly. Early ordering is basic operational planning.'
    },
    beginnerNote: 'Even if you\'re not sure you\'ll need new bees, it doesn\'t hurt to get on a waitlist. You can always cancel. You can\'t always get bees last minute in April.'
  },

  // YEAR-ROUND
  {
    id: 'bk12',
    season: 'All',
    title: 'Log hive inspection',
    priority: 'routine',
    badge: 'After each visit',
    time: '~5 min',
    requiresInspection: false,
    what: {
      beginner: 'Write down what you saw in your hive after every inspection so you can track changes over time.',
      intermediate: 'Post-inspection log: queen status, brood pattern, stores, population, notes.',
      advanced: 'Systematic inspection record: queen seen/eggs/cells, brood pattern rating, varroa count if tested, stores level, population estimate, actions taken, next visit notes.'
    },
    how: {
      beginner: 'Right after closing up the hive write down: the date, the weather, whether you saw the queen or eggs, how much brood and honey you saw, and anything unusual. It takes 5 minutes and will be incredibly valuable when you\'re trying to remember what was happening 6 weeks ago.',
      intermediate: 'Standard inspection record: date, temp, queen status (seen/eggs/neither), brood pattern (1-5 scale), frames of bees, frames of brood, frames of honey, actions taken, next inspection date.',
      advanced: 'Full data record enables trend analysis. Track queen quality degradation, seasonal population curves, mite load trends, and productivity patterns year over year. This data drives all management decisions.'
    },
    why: {
      beginner: 'Memory is unreliable especially when you\'re managing multiple hives or dealing with a problem. Written records let you track patterns, compare hives, and remember exactly what was happening when things started going wrong -- or right. Experienced beekeepers all say the same thing: they wish they\'d kept better records from the start.',
      intermediate: 'Inspection records transform reactive management into proactive management. Patterns in your data predict problems weeks before they become crises.',
      advanced: 'Data-driven beekeeping. Records enable year-over-year comparison, genetic selection decisions, and predictive management. Colony performance data is operationally valuable at any scale.'
    },
    beginnerNote: 'Keep it simple -- even a photo of each frame with a quick voice memo is better than nothing. The Seasonal House log feature is built for exactly this.'
  }
];

// ── HIVE DATA ──
const hives = [
  {
    id: 'h1',
    name: 'Hive 1',
    location: 'Back yard',
    queenStatus: 'Confirmed',
    queenYear: 2025,
    lastInspection: 'Jun 1',
    health: 'strong',
    healthLabel: 'Strong',
    frames: { brood: 6, honey: 4, pollen: 2 },
    notes: 'Queen spotted, excellent brood pattern. Ready to add super.'
  },
  {
    id: 'h2',
    name: 'Hive 2',
    location: 'Back yard',
    queenStatus: 'Eggs seen',
    queenYear: 2024,
    lastInspection: 'May 28',
    health: 'moderate',
    healthLabel: 'Watch',
    frames: { brood: 4, honey: 3, pollen: 1 },
    notes: 'Needs pollen patty. Population building but slower than Hive 1.'
  }
];

// ── GET CURRENT SEASON TASKS ──
function getSeasonTasks(season) {
  return beekeepingTasks.filter(t => t.season === season || t.season === 'All');
}

// ── RENDER BEEKEEPING MODULE ──
function renderBeekeepingModule() {
  const season = window.appState?.weather?.season || 'Spring';
  const seasonTasks = getSeasonTasks(season);

  const screen = document.getElementById('screen-beekeeping');
  if (!screen) return;

  screen.innerHTML = `
    <div class="detail-header" style="margin-bottom:16px;">
      <button class="back-btn" onclick="navigate('modules')">← Modules</button>
      <div class="detail-module">🐝 Beekeeping · ${season}</div>
      <div class="detail-title">Your Hives</div>
    </div>

    <!-- Hives -->
    <div style="margin-bottom:20px;">
      ${hives.map(hive => `
        <div class="card-lg" style="margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-size:16px; font-weight:600; color:var(--text); margin-bottom:2px;">${hive.name}</div>
              <div style="font-size:12px; color:var(--text-light);">${hive.location} · Last inspected ${hive.lastInspection}</div>
            </div>
            <span class="task-badge badge-${hive.health === 'strong' ? 'routine' : 'soon'}">${hive.healthLabel}</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin:12px 0;">
            <div style="background:var(--cream-dark); border-radius:8px; padding:8px; text-align:center;">
              <div style="font-size:18px; font-weight:600; color:var(--text);">${hive.frames.brood}</div>
              <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em;">Brood</div>
            </div>
            <div style="background:var(--cream-dark); border-radius:8px; padding:8px; text-align:center;">
              <div style="font-size:18px; font-weight:600; color:var(--text);">${hive.frames.honey}</div>
              <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em;">Honey</div>
            </div>
            <div style="background:var(--cream-dark); border-radius:8px; padding:8px; text-align:center;">
              <div style="font-size:18px; font-weight:600; color:var(--text);">${hive.frames.pollen}</div>
              <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em;">Pollen</div>
            </div>
          </div>
          <div style="font-size:12px; color:var(--text-mid); line-height:1.5; padding-top:8px; border-top:1px solid var(--tan-light);">
            <span style="font-weight:500; color:var(--green);">Queen:</span> ${hive.queenStatus} · ${hive.queenYear} queen
          </div>
          <div style="font-size:12px; color:var(--text-mid); margin-top:4px;">${hive.notes}</div>
        </div>
      `).join('')}
    </div>

    <!-- Season Tasks -->
    <div class="section-label">${season} tasks · ${seasonTasks.length} total</div>
    ${seasonTasks.map(task => `
      <div class="card task-card" onclick="openBeekeepingTask('${task.id}')">
        <div class="task-icon" style="background:#E1F5EE;">🐝</div>
        <div class="task-info">
          <div class="task-title">${task.title}</div>
          <div class="task-meta">Beekeeping · ${task.time}</div>
          <span class="task-badge badge-${task.priority}">${task.badge}</span>
        </div>
        <div class="task-chevron">›</div>
      </div>
    `).join('')}
  `;
}

// ── OPEN BEEKEEPING TASK ──
function openBeekeepingTask(taskId) {
  const task = beekeepingTasks.find(t => t.id === taskId);
  if (!task) return;

  window.appState = window.appState || {};
  window.appState.currentTask = task;
  window.appState.currentTaskType = 'beekeeping';

  const level = window.appState.experienceLevel || 'beginner';

  document.getElementById('detail-module').textContent = `🐝 Beekeeping · ${window.appState?.weather?.season || 'Spring'}`;
  document.getElementById('detail-title').textContent = task.title;
  document.getElementById('layer-what').textContent = task.what[level];
  document.getElementById('layer-how').textContent = task.how[level];
  document.getElementById('layer-why').textContent = task.why[level];
  document.getElementById('beginner-note').textContent = task.beginnerNote;

  document.querySelectorAll('.exp-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });

  if (task.requiresInspection && window.appState?.weather?.temp < 50) {
    document.getElementById('inspection-warning').style.display = 'block';
    document.getElementById('inspection-temp').textContent = window.appState.weather.temp;
  } else {
    document.getElementById('inspection-warning').style.display = 'none';
  }

  document.querySelector('.back-btn').onclick = () => navigate('beekeeping');
  navigate('task-detail');
}
