// ── CHICKENS MODULE DATA ──

const chickenTasks = [
  // SPRING
  {
    id: 'ck1',
    season: 'Spring',
    title: 'Deep clean coop -- spring refresh',
    priority: 'urgent',
    badge: 'Do this week',
    time: '~45 min',
    what: {
      beginner: 'Remove all old bedding from the coop, scrub every surface, and add fresh deep bedding.',
      intermediate: 'Full spring coop refresh -- strip bedding, scrub with diluted vinegar, inspect hardware, fresh pine shavings.',
      advanced: 'Post-winter sanitation: strip and compost all bedding, vinegar wash all surfaces, red mite inspection on roost bars, hardware check, fresh deep litter.'
    },
    how: {
      beginner: 'Move your flock to a safe outdoor run. Remove every bit of old bedding and put it in the compost -- it\'s great for the garden. Scrub the floor, walls, nesting boxes, and roost bars with a 50/50 mix of white vinegar and water. Let everything dry completely in the sun. Then add 4-6 inches of fresh pine shavings. Check that your waterer and feeder are clean before your flock comes back in.',
      intermediate: 'Clear all bedding to compost. Scrub all surfaces with diluted white vinegar. While the roost bars are bare, inspect them closely for red mite -- look for tiny red or grey dots and white dusty residue in cracks. Let dry fully. Add fresh deep litter (6+ inches). Inspect hardware cloth for gaps.',
      advanced: 'Full strip and sanitize. Vinegar wash all surfaces. Inspect roost bars and seams for Dermanyssus gallinae (red mite) -- use a torch in crevices. Dust with food-grade DE if evidence present. Check ventilation openings for winter damage. Re-establish deep litter system with fresh material.'
    },
    why: {
      beginner: 'Old wet bedding builds up ammonia gas that irritates your chickens\' lungs and weakens their immune system. Spring is the perfect reset -- your flock has been inside more over winter and things have built up. A clean dry coop in spring sets up a healthy flock for the whole year. Your chickens will thank you with more eggs.',
      intermediate: 'Winter accumulation of moisture, ammonia, and pathogens stresses the flock. Spring clean resets respiratory health and is the best opportunity to catch early red mite infestations before populations explode in warm weather.',
      advanced: 'Red mite populations surge rapidly in spring warmth -- catching them now is exponentially easier than treating an established infestation. Spring sanitation also breaks the disease cycle built up over winter and resets the coop environment for peak laying season.'
    },
    beginnerNote: 'White vinegar is safe, cheap, and effective. You don\'t need bleach or harsh chemicals. The most important thing is making sure everything is completely dry before adding new bedding -- wet shavings are worse than old dry ones.'
  },
  {
    id: 'ck2',
    season: 'Spring',
    title: 'Check and clean waterers',
    priority: 'urgent',
    badge: 'Weekly task',
    time: '~15 min',
    what: {
      beginner: 'Scrub out your waterers and refill with fresh clean water -- do this every week.',
      intermediate: 'Weekly waterer scrub -- remove biofilm, check for algae, refill fresh.',
      advanced: 'Weekly waterer sanitation. Check for biofilm, algae, and mineral buildup. Apple cider vinegar in water weekly supports gut health and prevents algae.'
    },
    how: {
      beginner: 'Empty the waterer completely. Use a scrub brush to clean the inside -- you\'ll likely see a slimy film called biofilm that builds up even when the water looks clean. Rinse well and refill with fresh water. In spring especially, check daily that it hasn\'t run dry -- your flock drinks a surprising amount when the weather warms up.',
      intermediate: 'Empty, scrub with brush to remove biofilm, rinse well, refill. Add 1 tablespoon of apple cider vinegar per gallon to discourage algae and support gut health. Check daily in warm weather -- consumption increases significantly in spring.',
      advanced: 'Weekly scrub essential -- biofilm harbors pathogens. ACV at 1 tbsp/gallon is a worthwhile addition. Monitor consumption trends -- sudden drop in water intake is often first sign of illness. In hot weather consider multiple stations to prevent competition.'
    },
    why: {
      beginner: 'Chickens need constant access to clean water to stay healthy and keep laying eggs. A chicken that\'s even slightly dehydrated lays fewer eggs and is more vulnerable to illness. That slimy film in the waterer harbors bacteria that can make your flock sick -- scrubbing it out weekly is one of the highest-value things you can do.',
      intermediate: 'Biofilm is a bacterial colony that establishes rapidly in standing water. Weekly cleaning prevents pathogen buildup. Water intake directly correlates with feed intake and egg production -- any disruption shows up in the daily count.',
      advanced: 'Water quality is foundational to flock health. Biofilm harbors Salmonella, E. coli, and other pathogens. Consistent water sanitation is basic biosecurity. Monitor consumption as an early health indicator -- changes precede visible symptoms by 24-48 hours.'
    },
    beginnerNote: 'If your waterer is turning green or smells bad between weekly cleanings, move it out of direct sunlight -- algae grows fast in warm, sunny water. A shaded waterer stays cleaner much longer.'
  },
  {
    id: 'ck3',
    season: 'Spring',
    title: 'Introduce new chicks or pullets',
    priority: 'soon',
    badge: 'If adding birds',
    time: '~1-2 hours',
    what: {
      beginner: 'If you\'re adding new birds to your flock this spring, introduce them slowly and safely to avoid fighting.',
      intermediate: 'Spring integration of new pullets -- quarantine protocol, then staged introduction.',
      advanced: 'Spring flock expansion -- quarantine new birds minimum 30 days, then systematic integration with visual barrier phase.'
    },
    how: {
      beginner: 'Never just drop new birds into the existing flock -- you\'ll have a fight on your hands. First keep new birds completely separate for 2-4 weeks to make sure they\'re healthy (this is called quarantine). Then let the flocks see each other through a fence or wire for a few days. Then do the integration at night -- put the new birds on the roost after dark when your existing flock is sleepy and calm. Check on them first thing in the morning. Some pecking is normal. Blood is not.',
      intermediate: 'Quarantine minimum 2 weeks in completely separate space. Then visual introduction through wire for 5-7 days. Night integration onto roost. Provide multiple feed and water stations during integration to reduce competition. Watch for bullying that prevents new birds from eating or drinking.',
      advanced: 'Strict 30-day quarantine -- new birds can carry Marek\'s, respiratory disease, and external parasites without showing symptoms. Visual introduction phase critical for hierarchy establishment without injury. Integration stress can trigger latent illness in new birds -- monitor closely for first 2 weeks post-integration.'
    },
    why: {
      beginner: 'Chickens are social animals with a real pecking order. New birds threaten that order and existing birds will try to drive them out. Slow introduction gives everyone time to adjust and keeps your new birds from getting seriously hurt. The quarantine step also protects your existing flock from any illness the new birds might be carrying without showing symptoms yet.',
      intermediate: 'Flock integration stress is a real disease trigger. Quarantine protects existing flock from pathogens new birds may carry silently. Visual introduction establishes social hierarchy before physical contact reduces injury risk significantly.',
      advanced: 'Biosecurity quarantine is non-negotiable -- new birds can introduce Marek\'s disease, infectious bronchitis, and mycoplasma to a naive flock. The hierarchy establishment through visual contact before physical contact is the most reliable way to minimize integration injuries.'
    },
    beginnerNote: 'The night integration trick works because chickens have very poor night vision and are docile in the dark. By morning they wake up as if the new birds were always there. It\'s genuinely that simple -- but the quarantine step first is not optional.'
  },
  {
    id: 'ck4',
    season: 'Spring',
    title: 'Check nesting boxes and egg production',
    priority: 'routine',
    badge: 'Weekly check',
    time: '~10 min',
    what: {
      beginner: 'Make sure your nesting boxes are clean, full of fresh bedding, and that your hens are laying where they should be.',
      intermediate: 'Weekly nest box inspection -- bedding quality, broodiness check, egg count baseline for season.',
      advanced: 'Nest box audit: bedding, parasite check under boxes, broodiness monitor, egg production tracking against spring baseline.'
    },
    how: {
      beginner: 'Check each nesting box daily when you collect eggs. Replace bedding if it\'s dirty or flat. Make sure you have one box for every 3-4 hens. In spring, watch for hens that refuse to leave the box and puff up when you reach in -- this is called going broody. A broody hen stops laying and can be a problem if you don\'t want chicks.',
      intermediate: 'Daily egg collection prevents broodiness and egg eating. Weekly: inspect under box bottoms for mites (look for grey dust and tiny moving dots). Track daily egg count to establish spring baseline. Address any broody hens promptly by moving them to a wire-bottomed cage for 3-4 days to break the cycle.',
      advanced: 'Nest box bottoms and corners are prime red mite harborage -- inspect weekly. Track individual hen production if leg bands are used. Spring laying ramp-up should track with day length -- production should increase 10-15% from winter baseline by April. Persistent broodiness in non-broody breeds warrants assessment.'
    },
    why: {
      beginner: 'Clean nesting boxes mean clean eggs and happy hens. Hens prefer to lay in clean, dark, private spots -- if the boxes aren\'t comfortable they\'ll start laying on the floor which means dirty eggs and sometimes broken ones. Catching a broody hen early gives you options before she\'s committed for 3 weeks.',
      intermediate: 'Egg production is your primary health indicator for laying hens. Spring production should be climbing -- a flat or declining count in spring is a red flag. Nest box cleanliness directly affects egg quality and shell contamination.',
      advanced: 'Egg production data is the most sensitive health monitor for laying flocks. Spring ramp-up rate tracks with photoperiod and flock health. Deviations from expected production curves often precede clinical illness by 5-10 days.'
    },
    beginnerNote: 'Collect eggs at least once a day -- twice if you can. Eggs left in boxes get dirty, sometimes broken, and occasionally eaten. Once a hen learns to eat eggs it\'s a very hard habit to break.'
  },

  // SPRING -- BROODING
  {
    id: 'ck_brood1',
    season: 'Spring',
    title: 'Set up brooder for new chicks',
    priority: 'urgent',
    badge: 'Before chicks arrive',
    time: '~1 hour',
    what: {
      beginner: 'Set up a warm, safe brooder box before your chicks arrive -- they need heat, food, water, and protection from day one.',
      intermediate: 'Brooder setup: heat source, thermometer, chick waterer, chick starter feed, appropriate bedding, draft-free enclosure.',
      advanced: 'Brooder setup with redundant heat source, calibrated thermometer, nipple waterers preferred, medicated or unmedicated chick starter based on vaccination status, pine shavings or paper towel over shavings for first 3 days.'
    },
    how: {
      beginner: 'You\'ll need: a box or tub (a large plastic storage tote works great), a heat lamp with a red bulb, a thermometer, a chick waterer, and chick starter crumble feed. Set the heat lamp so the temperature directly under it is 95°F for the first week. Put 2-3 inches of pine shavings on the bottom. Fill the waterer with room-temperature water and add a pinch of sugar to give chicks an energy boost on day one. Set it all up 24 hours before chicks arrive so you can get the temperature stable. Chicks that are too cold huddle under the lamp and peep loudly. Chicks that are too warm spread away from the lamp and pant. Comfortable chicks spread out and explore.',
      intermediate: 'Brooder temp: 95°F at chick level week 1, reduce 5°F per week until 70°F or fully feathered (~6 weeks). Use a thermometer, not guesswork. Heat plate brooders are safer than heat lamps and more energy efficient -- worth the investment. Pine shavings 2-3 inches deep. Paper towel over shavings for first 2-3 days helps chicks find feed without eating bedding. Change waterer daily minimum. Chick starter (18-20% protein) available at all times.',
      advanced: 'Pre-warm brooder 24 hours before arrival. Heat plate preferred over lamp -- lower fire risk, more natural behavior. Dual thermometers for redundancy. Nipple waterers reduce contamination vs open waterers. Medicated starter (amprolium) if chicks not vaccinated for coccidiosis; unmedicated if Marek\'s vaccinated chicks from hatchery. Paper towel substrate for days 1-3 prevents pasty butt and teaches feed recognition. Monitor for pasty butt daily first week -- can be fatal if untreated.'
    },
    why: {
      beginner: 'Day-old chicks can\'t regulate their own body temperature -- they depend entirely on external heat to survive. Too cold and they die within hours. Too hot and they dehydrate and die. Getting the brooder set up and stable before they arrive is the single most important thing you can do. Every year people lose chicks because the setup wasn\'t ready.',
      intermediate: 'Chick mortality in the first week is almost entirely preventable and almost entirely due to chilling, overheating, or dehydration. A properly set up brooder eliminates the three most common causes of early chick loss. Temperature management in week 1 is the most hands-on part of raising chicks.',
      advanced: 'Brooder environment quality in the first 2 weeks has lasting effects on immune development and growth rate. Chronic mild cold stress in the brooder suppresses immune function and increases coccidiosis susceptibility. Heat plate brooders produce calmer, better-developed birds than heat lamps due to more natural thermal gradient and reduced light stress.'
    },
    beginnerNote: 'The temperature guide (95°F week 1, drop 5° each week) is a starting point but watch the chicks, not just the thermometer. Chicks will tell you exactly what they need by where they hang out in the brooder.'
  },
  {
    id: 'ck_brood2',
    season: 'Spring',
    title: 'Transition chicks to the coop',
    priority: 'soon',
    badge: 'Weeks 6-8',
    time: '~1-2 hours',
    what: {
      beginner: 'Move your chicks from the brooder to the outdoor coop once they\'re fully feathered -- usually around 6-8 weeks old.',
      intermediate: 'Brooder-to-coop transition at 6-8 weeks: hardening off period, temperature check, integration plan if existing flock.',
      advanced: 'Transition protocol: full feathering confirmation, outdoor temps vs brooder temp gap assessment, 1-2 week hardening off, biosecurity if joining established flock.'
    },
    how: {
      beginner: 'Wait until your chicks are fully covered in feathers (not just fluffy down -- real feathers). This usually happens around 6-8 weeks. Before moving them, make sure nighttime temps are consistently above 50°F, or have a heat source in the coop for the first week. Start by letting them outside in a safe pen during warm days for a week before moving them full time -- this is called hardening off. If you have an existing flock, keep the chicks in a separate space where the older birds can see but not touch them for at least 2 weeks before mixing.',
      intermediate: 'Full feathering is the indicator, not age -- feathering varies by breed. Heavy breeds like Buff Orpingtons feather slower than light breeds. Hardening off: supervised outdoor time in warm weather for 7-10 days before full transition. Coop temp at night must be within 10-15°F of brooder temp at transition. If integrating with existing flock: minimum 2-week visual introduction, then physical introduction at night. Chicks should be at least 2/3 the size of adult birds before full integration.'
      ,
      advanced: 'Transition stress is a disease trigger -- monitor for respiratory symptoms and coccidiosis in the 2 weeks post-move. Hardening off is not optional for immune conditioning. If chicks were raised on medicated starter and are transitioning to a flock on layer feed, switch to unmedicated grower (18% protein) at transition and hold on layer feed until 18-20 weeks. Integration with established flocks always carries social stress -- extra feed and water stations reduce competition injuries. Night introduction onto roost remains the most reliable integration method.'
    },
    why: {
      beginner: 'Chicks that move to the coop before they\'re ready -- before they\'re fully feathered or when it\'s too cold -- can get sick or die. The transition is one of the higher-risk moments in raising chicks. Taking it slowly and watching the weather makes the difference between a smooth move and a stressful one.',
      intermediate: 'The brooder-to-coop transition is a significant immune stress event. Temperature shock, new pathogens in the outdoor environment, and social stress from integration all hit at once. Hardening off conditions the immune system and allows gradual microbial exposure. Rushing the transition is a common cause of post-transition illness.',
      advanced: 'Transition represents the highest disease risk window outside of hatch. Coccidiosis challenge increases dramatically with outdoor soil exposure -- immune competence at this stage determines outcome. Integration stress can trigger latent infections. The 2-week visual introduction protocol before physical contact allows hierarchy establishment that dramatically reduces injury during integration.'
    },
    beginnerNote: 'Moving chicks at night is the secret move. Pick them up after dark, put them on the roost in the coop, and they wake up in the morning like they\'ve always been there. Much less stressful for everyone -- including you.'
  },

  // SPRING -- FEED
  {
    id: 'ck_feed1',
    season: 'Spring',
    title: 'Spring feed review -- switch to layer feed',
    priority: 'routine',
    badge: 'Seasonal transition',
    time: '~10 min',
    what: {
      beginner: 'Make sure your laying hens are on the right feed for spring -- layer pellets with oyster shell on the side.',
      intermediate: 'Spring feed transition: confirm layer feed (16% protein), oyster shell available free-choice, scratch as treat only.',
      advanced: 'Spring feed audit: layer feed 16% protein, free-choice oyster shell, assess body condition after winter, consider flock raiser + calcium supplement if mixed-age flock.'
    },
    how: {
      beginner: 'Your laying hens need layer feed (16% protein) -- it has the calcium they need to make strong eggshells. Keep a small dish of oyster shell available at all times so hens can take what they need. Scratch grain (the mixed corn and grain blend) is a treat, not a meal -- think of it like candy. A small handful per day is fine but more than that fills them up with low-nutrition food and you\'ll get fewer eggs. Make sure they have feed available at all times.',
      intermediate: 'Layer feed (16% protein) is the correct base for laying hens. Free-choice oyster shell is more effective than calcium baked into the feed -- hens self-regulate intake based on need. Scratch: max 10% of diet. If you have a mixed flock (layers plus non-layers or young birds), consider flock raiser (18% protein) for everyone with oyster shell on the side -- layers take what they need, non-layers aren\'t over-calcified.',
      advanced: 'Spring body condition assessment after winter: hens that lost weight over winter may benefit from 2-3 weeks on 18% flock raiser before switching to layer. Excess weight (common in confined winter birds) warrants increased foraging opportunity. Free-choice calcium always preferred over calcium in feed for precision. Grit essential for birds on pasture -- insoluble granite grit for digestion, separate from oyster shell. Monitor shell quality as early production indicator -- thin or soft shells indicate calcium deficiency or absorption issue.'
    },
    why: {
      beginner: 'Feed is the foundation of egg production. A hen needs about 4 grams of calcium to make one eggshell -- that\'s a significant daily requirement. Without the right feed and calcium source, she\'ll pull calcium from her own bones to make eggs, which weakens her over time. Getting the feed right in spring sets up your whole laying season.',
      intermediate: 'Calcium metabolism in laying hens is highly regulated -- hens on free-choice oyster shell self-regulate intake much better than hens on feed with fixed calcium levels. This matters because calcium over-supplementation causes kidney damage over time. The feed foundation in spring determines production quality for the season.',
      advanced: 'Dietary calcium and protein interact directly with egg production and shell quality. Post-winter nutritional recovery affects the first laying cycle quality. Free-choice calcium supplementation is superior to feed-incorporated calcium because it allows individual regulation -- particularly important in mixed-age or mixed-breed flocks with different production rates.'
    },
    beginnerNote: 'If you\'re seeing soft or shell-less eggs, the first thing to check is your calcium supply. Put out a dish of oyster shell and give it a week -- most calcium deficiency issues resolve on their own once the supply is there.'
  },

  // SUMMER -- FEED
  {
    id: 'ck_feed2',
    season: 'Summer',
    title: 'Summer feed adjustments -- heat and production',
    priority: 'routine',
    badge: 'Hot weather',
    time: '~10 min',
    what: {
      beginner: 'Adjust feeding timing and add cold treats on hot days to keep your flock eating well and laying through summer heat.',
      intermediate: 'Summer feed management: early/late feeding, electrolyte supplementation on hot days, reduce scratch, cold treats.',
      advanced: 'Summer nutritional management: feed timing around heat peaks, electrolyte protocol above 90°F, possible protein reduction in extreme heat, cold/wet feed options.'
    },
    how: {
      beginner: 'In hot weather chickens eat less during the heat of the day -- move feeding to early morning and evening when it\'s cooler. They\'ll eat more and stay healthier. Cold treats are genuinely helpful and chickens love them: frozen watermelon chunks, frozen berries, a block of ice with corn frozen inside. Cut back on scratch grain in summer -- it generates body heat during digestion and makes hot birds hotter. Make sure fresh water is available at all times and change it more frequently.',
      intermediate: 'Heat reduces feed intake which reduces production. Counter by feeding in cool hours (before 8am and after 6pm). Reduce scratch to zero or near-zero in heat over 85°F -- scratch has a high heat increment (generates body heat during digestion). Add electrolytes to water on days over 90°F. Cold wet mash in the morning is often eagerly accepted when dry feed isn\'t. Watch for production drops as heat stress indicator.',
      advanced: 'Heat stress causes specific nutritional effects: reduced feed intake decreases protein and calcium intake at the same time laying demand continues. In extreme heat (90°F+), consider reducing dietary protein slightly (14% vs 16%) -- protein metabolism has high heat increment. Increase vitamin C supplementation during heat stress -- it\'s shown to reduce cortisol response. Electrolytes (sodium, potassium, chloride) are critical -- commercial poultry electrolytes or a carefully measured homemade solution. Wet mash feeding improves intake in heat because it reduces the energy cost of eating and provides additional hydration.'
    },
    why: {
      beginner: 'Chickens that don\'t eat enough stop laying eggs. In summer heat, they naturally reduce feed intake to avoid generating more body heat through digestion. Feeding at cooler times of day and making food more appealing gets them eating enough to keep producing without making their heat problem worse.',
      intermediate: 'Summer production losses are primarily nutritional -- heat-stressed hens eat less, which directly reduces protein and calcium intake. The scratch reduction in summer is counterintuitive to new keepers but important: grain digestion generates significant body heat (the heat increment of feeding), making hot birds hotter.',
      advanced: 'Thermal physiology of heat stress directly impacts nutrient partitioning. Reduced feed intake during heat stress creates a simultaneous protein and calcium deficit at a time when laying demand remains constant. The result is thin shells, reduced production, and potential muscle catabolism. Targeted nutritional support during heat events measurably reduces production losses.'
    },
    beginnerNote: 'Frozen watermelon is probably the best summer treat you can give chickens. It\'s mostly water (hydration), they go absolutely crazy for it, and it cools them down. Buy a cheap one and freeze chunks in an ice cube tray.'
  },

  // AUTUMN -- FEED
  {
    id: 'ck_feed3',
    season: 'Autumn',
    title: 'Autumn feed transition -- support molt and winter prep',
    priority: 'soon',
    badge: 'Molt season',
    time: '~10 min',
    what: {
      beginner: 'Switch your flock to higher-protein feed during the fall molt to help them grow new feathers faster.',
      intermediate: 'Autumn feed transition: switch to flock raiser (20% protein) during molt, reduce oyster shell, reintroduce scratch as weather cools.',
      advanced: 'Molt nutritional protocol: 20%+ protein feed, suspend oyster shell for non-layers, reintroduce scratch at 10% of diet for cold weather, assess and adjust body condition before winter.'
    },
    how: {
      beginner: 'When you start seeing feathers everywhere and your hens looking patchy, switch from layer feed to a higher-protein feed called "flock raiser" or "developer" (20% protein). This gives them the building blocks to grow new feathers faster. While they\'re molting and not laying, take the oyster shell away -- they don\'t need the extra calcium if they\'re not making eggs. You can start offering scratch grain as a small evening treat as temperatures drop -- it generates a little body heat overnight. Switch back to layer feed when they start laying again.',
      intermediate: 'At first sign of molt, transition to 20% protein flock raiser over 5-7 days (mix increasing proportions to avoid feed refusal). Remove free-choice oyster shell during heavy molt -- non-laying hens don\'t need it and excess calcium stresses kidneys. Reintroduce scratch at 5-10% of diet as temps drop below 50°F -- the heat increment of scratch digestion provides mild overnight warmth. Return to layer feed + oyster shell when production resumes.',
      advanced: 'Feather composition is ~85% protein -- inadequate dietary protein during molt directly extends molt duration and compromises feather quality. The amino acid profile matters: methionine is the first limiting amino acid in feather growth. Some premium flock raisers are formulated with this in mind. Calcium removal during molt prevents renal calcification in non-laying birds. Scratch reintroduction timing should track with temperature -- the heat increment benefit is real but overfat hens going into winter have reduced cold tolerance. Body condition score before winter determines supplemental feeding needs.'
    },
    why: {
      beginner: 'Feathers are made mostly of protein. If your hens are trying to grow a whole new set of feathers on low-protein layer feed, it takes much longer and the feathers don\'t come in as well. Better feathers going into winter means better insulation and a faster return to laying in spring.',
      intermediate: 'The protein requirement for molt is significantly higher than for maintenance or even laying. Layer feed at 16% protein is inadequate for rapid feather regrowth. The molt-to-laying transition speed and subsequent laying cycle quality are directly tied to nutritional support during molt.',
      advanced: 'Molt represents a complete feather follicle regeneration cycle. Nutritional adequacy during this window determines both the speed of return to lay and the quality of the subsequent laying cycle. Methionine limitation is common in standard feeds during molt -- it\'s the rate-limiting amino acid for keratin synthesis. Investing in proper molt nutrition pays off in a stronger spring laying season.'
    },
    beginnerNote: 'Your hens are going to look rough during molt -- patchy, naked in spots, sometimes grumpy. It\'s completely normal and temporary. Feed them well, handle them as little as possible (pin feathers hurt), and they\'ll come out the other side looking better than ever.'
  },

  // WINTER -- FEED
  {
    id: 'ck_feed4',
    season: 'Winter',
    title: 'Winter feed management -- keeping hens warm and laying',
    priority: 'routine',
    badge: 'Cold weather',
    time: '~10 min',
    what: {
      beginner: 'Adjust feeding in winter to help your hens stay warm and keep laying through the cold months.',
      intermediate: 'Winter feed protocol: layer feed base, scratch as evening supplement, vitamin D consideration, consistent feeding schedule.',
      advanced: 'Winter nutritional management: layer feed, scratch timing for heat increment benefit, vitamin D supplementation, body condition monitoring, lighting protocol for production.'
    },
    how: {
      beginner: 'Keep your hens on layer feed as their main food all winter. Add a small handful of scratch grain per bird in the late afternoon -- chickens digest grain overnight and it generates a small amount of body heat, which helps on cold nights. Make sure they always have oyster shell available. In very cold weather, a warm wet mash of layer feed mixed with warm water in the morning is a great treat that also helps with hydration when water can freeze. Keep a consistent feeding schedule -- chickens are creatures of habit and disrupted routines stress them.',
      intermediate: 'Layer feed remains the base. Evening scratch at 5-10% of diet timing is intentional -- grain digestion generates heat overnight when they need it. Vitamin D supplementation is worth considering in NE Ohio winters: hens get minimal UV exposure from November-February which affects calcium metabolism. If supplementing light for production, ensure 14-16 hours total light per day on a consistent timer -- disrupted light cycles reduce production more than no supplemental light. Warm mash 2-3x per week improves hydration and is eagerly accepted.',
      advanced: 'Winter production is a photoperiod management question as much as a nutrition question. Without supplemental light, expect 20-40% of peak production in mid-winter. Nutritionally, layer feed + evening scratch + free-choice calcium is adequate for NE Ohio winters. Vitamin D3 supplementation (or UV lamp exposure) is worth considering for flocks with no direct sun access November-February -- D3 deficiency impairs calcium absorption and shell quality. Body condition monitoring monthly: overweight hens (from reduced activity and constant feed access) have reduced laying efficiency and cold tolerance paradoxically.'
    },
    why: {
      beginner: 'Chickens burn more calories in cold weather just staying warm -- think of it like leaving the heat running all day. Making sure they eat enough good food gives them the energy to stay warm AND keep laying. The evening scratch trick is a simple way to give them a little extra warmth overnight without overfeeding.',
      intermediate: 'The heat increment of feeding is a real and useful tool in cold weather management. Scratch grain has a higher heat increment than layer feed -- timed in the evening, the digestive heat generation overlaps with the coldest overnight hours. Vitamin D deficiency is underrecognized in winter-kept flocks and directly affects both shell quality and laying consistency.',
      advanced: 'Cold weather increases maintenance energy requirements by 20-30% in laying hens, reducing the energy available for production. This, combined with reduced photoperiod, is why winter production drops even in well-managed flocks. Nutritional support can partially offset energy partitioning to maintenance but cannot fully compensate for photoperiod effects without supplemental lighting. The interaction between nutrition, light, and temperature in winter production is complex -- consistent management of all three is more effective than optimizing any single variable.'
    },
    beginnerNote: 'Warm mash on a cold morning makes you feel like a good chicken parent and your hens will come running when they see the bowl. Mix layer feed with just enough warm water to make a thick porridge consistency -- not soupy. It\'s a five-minute thing that they absolutely love.'
  },

  // SUMMER
  {
    id: 'ck5',
    season: 'Summer',
    title: 'Manage heat stress',
    priority: 'urgent',
    badge: 'Hot weather',
    time: '~20 min',
    what: {
      beginner: 'Keep your flock cool and hydrated on hot days -- chickens overheat more easily than you think.',
      intermediate: 'Active heat management when temps exceed 85F -- shade, ventilation, cold water, electrolytes.',
      advanced: 'Heat stress protocol for temps above 85F. Monitor for panting, wing-spreading, and reduced feed intake. Active cooling interventions.'
    },
    how: {
      beginner: 'On hot days: make sure your flock has shade they can get to at all times. Change their water twice a day and add ice cubes to keep it cool. You can put cold watermelon, frozen berries, or a shallow pan of cold water out for them to stand in. Open all coop vents and windows. Watch for chickens standing with their beaks open and wings held out from their body -- that means they\'re struggling.',
      intermediate: 'At 85F+ increase water stations and change water 2-3x daily. Add electrolytes to water (commercial poultry electrolytes or a pinch of salt and sugar). Maximize coop ventilation. Freeze water in containers and place in coop. Avoid handling birds during peak heat. Feed in early morning and evening when cooler.',
      advanced: 'Mortality risk begins at 95F+ especially with high humidity. Misters or fans in shaded areas are most effective. Electrolyte supplementation critical above 90F. Reduce protein in feed temporarily -- protein metabolism generates heat. Monitor older birds and heavy breeds most closely. Nighttime cooling is critical -- if night temps stay above 75F, heat stress is cumulative.'
    },
    why: {
      beginner: 'Chickens can\'t sweat -- they regulate temperature by panting and holding their wings out from their body. When it gets very hot they can die quickly, especially larger breeds. Egg production drops dramatically in heat stress and takes weeks to recover. Prevention is much easier than treatment.',
      intermediate: 'Heat stress above 85F reduces egg production, shell quality, and feed intake. Above 95F with humidity, mortality risk is real especially for heavy breeds. Cumulative heat stress from multiple hot days is more dangerous than a single hot day.',
      advanced: 'Acute heat stress triggers systemic inflammation and immune suppression. Chronic heat stress (multi-day events) causes intestinal permeability changes that increase disease susceptibility for weeks afterward. Electrolyte loss from panting must be replaced. Production losses from a bad heat event can persist 4-6 weeks.'
    },
    beginnerNote: 'The single best thing you can do before a hot stretch is make sure your coop has cross-ventilation -- air moving through the coop. A hot still coop is much more dangerous than a hot breezy one.'
  },
  {
    id: 'ck6',
    season: 'Summer',
    title: 'Parasite check -- mites and lice',
    priority: 'soon',
    badge: 'Monthly check',
    time: '~20 min',
    what: {
      beginner: 'Check your chickens for external parasites -- mites and lice are common in summer and can make your flock miserable.',
      intermediate: 'Monthly external parasite inspection -- vent feathers, under wings, skin at feather base.',
      advanced: 'Monthly external parasite screening. Check vent area, under wings, and neck feathers. Identify species -- treatment differs for mites vs lice vs scaly leg mite.'
    },
    how: {
      beginner: 'At night when your birds are roosted and calm, pick up one or two and check their feathers. Part the feathers around the vent (under the tail) and look at the skin -- this is where parasites hide first. You\'re looking for tiny moving dots (mites or lice) or clusters of white or grey eggs at the base of feathers. Also check the roost bars for red mites -- look for tiny red or grey dots in crevices, especially in the morning.',
      intermediate: 'Monthly inspection: check vent area, under wings, and neck feathers. Red mites (Dermanyssus) live on the bird at night and hide in crevices during the day -- check roost bars at dawn. Chicken lice (Menopon, Menacanthus) live on the bird full-time -- eggs clustered at feather base. Treatment differs: permethrin dust for lice, coop treatment critical for red mite.',
      advanced: 'Differentiate species for correct treatment. Red mite: coop-focused treatment is primary, bird treatment secondary. Northern fowl mite: lives on bird year-round, vent area concentration. Lice: feather base eggs, daytime visible on bird. Scaly leg mite: check leg scales for lifting/crusting. Treatment timing matters -- treat before populations explode.'
    },
    why: {
      beginner: 'Mites and lice don\'t just make your chickens uncomfortable -- a heavy infestation causes anemia (blood loss from mites), stress, and significant drops in egg production. Catching them early means a simple treatment. Catching them late means a major infestation that takes weeks to clear.',
      intermediate: 'External parasites cause direct production losses through stress and blood loss. Red mite infestations are particularly aggressive in summer -- populations can double every 7 days in warm conditions. Early detection and treatment is dramatically easier than managing an established population.',
      advanced: 'Parasite load is a direct function of management frequency. Red mite (Dermanyssus gallinae) reproduces rapidly at summer temperatures -- a small population becomes severe in 3-4 weeks without intervention. Correct species ID matters because coop environment treatment is critical for Dermanyssus but unnecessary for lice. Monitor consistently -- summer is peak season.'
    },
    beginnerNote: 'If you find mites on your birds, don\'t panic -- it\'s very common and very treatable. The most important thing is to treat both the birds AND the coop at the same time. Treating just the birds without cleaning the coop means they\'ll be re-infested within days.'
  },

  // AUTUMN
  {
    id: 'ck7',
    season: 'Autumn',
    title: 'Prepare coop for winter',
    priority: 'urgent',
    badge: 'Before first frost',
    time: '~1-2 hours',
    what: {
      beginner: 'Get your coop ready for winter -- insulate, check for drafts, and make sure your flock will stay warm and dry.',
      intermediate: 'Fall coop winterization -- ventilation balance, draft elimination, deep litter establishment, equipment check.',
      advanced: 'Full winterization: ventilation audit (airflow without drafts), deep litter establishment, water heating setup, light supplementation assessment, predator security check.'
    },
    how: {
      beginner: 'Walk around your coop and feel for drafts -- cold air blowing directly on roosting birds is the main thing you\'re trying to prevent. Block any drafts at bird level but leave ventilation up high -- chickens need fresh air even in winter. Add extra bedding (6-8 inches) to help insulate the floor. Make sure your roost bars are wide enough for birds to sit flat on their feet (2-4 inches wide) -- this lets them cover their toes with their belly feathers to prevent frostbite.',
      intermediate: 'The rule: ventilation above roosting height, no drafts at roost level. Close lower gaps, keep upper vents partially open. Establish deep litter now -- 6-8 inches of shavings, add layers as it compacts. Check roost bar width (2-4 inch minimum). Install heated waterer or plan for daily water changes. Assess whether supplemental lighting is desired for winter production.',
      advanced: 'Ventilation is the critical balance -- moisture buildup from breath causes frostbite and respiratory disease, but drafts cause direct frostbite. Upper vents should remain partially open year-round. Deep litter system generates heat through microbial activity if managed correctly -- requires adequate carbon (bedding) to nitrogen (manure) ratio. Install thermometer to monitor coop temp -- target above 20F at roost level. LED grow lights on timer for winter production if desired.'
    },
    why: {
      beginner: 'Chickens handle cold much better than most people think -- the main killers in winter are drafts, moisture, and frostbite, not cold itself. A dry coop with good airflow and no direct drafts will keep your flock comfortable to well below freezing. The setup you do now determines how your flock does all winter.',
      intermediate: 'Moisture is the primary winter enemy -- not cold. Respiration from even a small flock generates significant moisture. Without adequate ventilation this condenses on cold surfaces, creates ammonia buildup, and causes respiratory disease. The ventilation-without-draft balance is the key skill.',
      advanced: 'Cold stress in well-managed flocks is rarely the primary issue -- it\'s the secondary effects of poor environment management. Frostbite occurs from moisture on combs and wattles, not ambient cold alone. Respiratory disease incidence spikes in winter due to poor ventilation and immune suppression from short days. Deep litter done correctly is highly effective -- poorly managed deep litter is a disease reservoir.'
    },
    beginnerNote: 'Chickens are hardier than you think in cold weather. They\'ve been surviving Ohio winters without electricity for centuries. The things that actually kill them: direct drafts, wet bedding, and no water. Fix those three and your flock will be fine.'
  },
  {
    id: 'ck8',
    season: 'Autumn',
    title: 'Assess molting flock',
    priority: 'soon',
    badge: 'Fall transition',
    time: '~15 min',
    what: {
      beginner: 'Check on your flock during the fall molt -- they look rough but it\'s completely normal, and they need extra support.',
      intermediate: 'Fall molt assessment -- identify birds in heavy molt, boost protein intake, reduce stress during feather regrowth.',
      advanced: 'Molt management: identify molt timing and severity per bird, increase protein to 20%+ feed, minimize handling, assess which birds to cull vs carry through winter.'
    },
    how: {
      beginner: 'In autumn your chickens will lose their feathers and grow new ones -- this is called molting. It looks alarming (your coop will be full of feathers and your birds may look nearly bald in patches) but it\'s completely normal. During molt: switch to a higher-protein feed (20% protein "developer" or "flock raiser" instead of layer pellets), stop supplemental calcium temporarily, handle birds as little as possible (new pin feathers are very sensitive), and expect zero to minimal egg production for 4-8 weeks.',
      intermediate: 'Identify birds in active molt -- feather loss pattern starts at head and neck, progresses down body. During heavy molt: increase protein to 20%+ (switch to flock raiser or add protein supplement). Reduce layer feed and calcium supplementation -- hens not laying don\'t need the extra calcium and it can stress kidneys. Minimize handling -- pin feathers have blood supply and are painful. Expect 4-10 weeks of reduced/no production per bird.',
      advanced: 'Molt timing and duration varies by individual, age, and management. First-year hens often don\'t molt. Second-year and older hens molt annually. Fast molters (8-12 weeks) are generally better production birds than slow molters. Assess molt as culling opportunity -- heavy-molt birds eating through winter with no production return is an economic consideration at commercial scale. Protein optimization during molt directly affects subsequent laying cycle start.'
    },
    why: {
      beginner: 'Growing new feathers requires a huge amount of protein -- it\'s one of the most nutrient-demanding things a chicken does. If they don\'t get enough protein during molt their new feathers come in poorly and they take longer to start laying again. Supporting them now directly affects egg production all next year.',
      intermediate: 'Feather production requires approximately 70% protein composition. The protein demands of growing a full set of feathers compete directly with egg production -- this is why molt and laying are mutually exclusive. Feeding adequate protein during molt shortens molt duration and improves subsequent laying cycle quality.',
      advanced: 'Molt is a complete feather follicle reset driven by prolactin and thyroid hormone changes with photoperiod shortening. Nutritional support during this window directly determines follicle quality for the next laying cycle. Calcium restriction during molt prevents renal stress and calcification. Stress during pin feather development (handling, predator pressure, flock disruption) can cause permanent feather quality defects.'
    },
    beginnerNote: 'Your newly molted hen going from looking terrible to producing beautiful new feathers in 6-8 weeks is honestly one of the most satisfying things about keeping chickens. Feed them well through this and they\'ll reward you with a strong laying season.'
  },

  // WINTER
  {
    id: 'ck9',
    season: 'Winter',
    title: 'Maintain water in freezing temps',
    priority: 'urgent',
    badge: 'Daily in freeze',
    time: '~10 min daily',
    what: {
      beginner: 'Make sure your flock has liquid water every single day -- frozen water is the biggest winter management challenge.',
      intermediate: 'Daily water management in freezing temps -- heated waterer or twice-daily water changes.',
      advanced: 'Winter water system: heated base waterer is most reliable. Backup plan for power outages. Daily checks even with heated system.'
    },
    how: {
      beginner: 'A chicken without water for even one day stops laying and gets stressed. Your options: (1) a plug-in heated waterer base (most reliable, worth the $30), (2) bring out lukewarm water twice a day and bring the waterer in at night, or (3) have two waterers and rotate them. Whichever method you use, check it every single morning. A frozen waterer is easy to miss until you notice your chickens acting stressed.',
      intermediate: 'Heated base waterer is the most reliable solution -- look for the Farm Innovators brand, reliable to well below 0F. Check daily even with heated system -- heaters can fail. If using manual method, warm (not hot) water twice daily minimum. Metal waterers hold heat longer than plastic in extreme cold.',
      advanced: 'Heated waterer with GFCI-protected outlet. Daily visual check regardless -- heater failure in a polar vortex is a real risk. Have a backup plan. Monitor consumption -- reduced drinking in winter is normal but significant drop warrants investigation. Electrolyte supplementation less critical in winter but periodic addition supports flock through molt stress.'
    },
    why: {
      beginner: 'Water is more critical than feed. A chicken can go 2-3 days without food and mostly recover. A day without water, especially in cold weather when their bodies need water to stay warm, causes lasting stress and production losses. This is the one daily task that absolutely cannot slide in winter.',
      intermediate: 'Water deprivation of even 6 hours in cold weather causes measurable production decline and stress. Hens use water for thermoregulation as well as egg formation. Consistent water access is the single most important winter management task.',
      advanced: 'Cold stress increases water requirements as birds generate heat through metabolism. Water deprivation compounds cold stress effects exponentially. Production losses from a single day of water deprivation in winter can persist 5-7 days. Infrastructure investment in heated watering is the highest-ROI winter management decision.'
    },
    beginnerNote: 'The $30 heated waterer base is genuinely worth it. Not having to worry about frozen water every morning in January makes the whole experience of keeping chickens in winter much more manageable.'
  },
  {
    id: 'ck10',
    season: 'Winter',
    title: 'Monitor egg production and flock health',
    priority: 'routine',
    badge: 'Weekly check',
    time: '~10 min',
    what: {
      beginner: 'Count your eggs weekly and watch your flock\'s behavior to catch any health issues early.',
      intermediate: 'Weekly production tracking and health observation -- establish winter baseline, monitor for respiratory symptoms.',
      advanced: 'Weekly health assessment: production vs baseline, respiratory observation, weight estimation, behavioral changes. Winter is high stress for immune system.'
    },
    how: {
      beginner: 'Count your eggs every day and just be aware of the trend. In winter production naturally drops because of shorter days -- that\'s normal. But a sudden drop (especially with sneezing, rattling breathing, swollen faces, or lethargic birds) is a warning sign. Spend a few minutes watching your flock each day -- healthy chickens are curious, active, and have bright eyes. Hunched, fluffed, closed-eye birds are sick.',
      intermediate: 'Track daily egg count -- winter baseline should be 40-60% of summer production depending on age and whether you supplement light. Watch for: rattling/gurgling breathing (Mycoplasma, IB), swollen sinuses (CRD), green/yellow droppings (multiple causes), significant production drops. Weigh one or two birds monthly as condition monitor.',
      advanced: 'Winter production baseline depends on photoperiod management. Without supplemental lighting expect 20-40% of summer peak in mid-winter. With 14-16 hours of light, 70-85% of peak. Respiratory disease surveillance critical -- winter housing concentrates birds and stresses respiratory immunity. Marek\'s reactivation can occur under winter stress. Any bird showing neurological signs warrants isolation and assessment.'
    },
    why: {
      beginner: 'Chickens hide illness well -- by the time a chicken looks obviously sick it\'s often been sick for days. Watching their daily behavior and egg count catches problems early when they\'re much easier to treat. Ten minutes of observation is worth hours of treatment later.',
      intermediate: 'Production tracking is your primary health monitor. Respiratory disease incidence peaks in winter due to concentration, cold stress, and reduced vitamin D from shorter days. Early detection of flock-level respiratory symptoms allows treatment before spread.',
      advanced: 'Immune function declines in winter due to melatonin changes with photoperiod, cold stress, and potentially lower vitamin D. Subclinical respiratory pathogens (Mycoplasma, IB) that were suppressed in summer may become clinical. Flock-level observation is more sensitive than individual bird monitoring for detecting early disease spread.'
    },
    beginnerNote: 'Get in the habit of just standing quietly in your coop for 2-3 minutes when you collect eggs. You\'ll learn what normal looks like for your flock, which makes it obvious when something\'s off. This is the single most valuable thing an experienced chicken keeper does.'
  },

  // YEAR-ROUND
  {
    id: 'ck11',
    season: 'All',
    title: 'Log flock health observation',
    priority: 'routine',
    badge: 'After each check',
    time: '~5 min',
    what: {
      beginner: 'Write down what you noticed about your flock after each visit so you can track patterns over time.',
      intermediate: 'Post-observation log: egg count, flock behavior, any health observations, feed/water consumption.',
      advanced: 'Daily production log and periodic health record: egg count, behavioral notes, any treatments given, feed consumption trends, individual bird observations.'
    },
    how: {
      beginner: 'After each visit write down the date, how many eggs you got, and anything you noticed -- even if it\'s just "everyone looks fine." Over time you\'ll start to see patterns: when production peaks and drops, which hens lay most reliably, and whether problems were building up before they became obvious.',
      intermediate: 'Daily: egg count, quick behavioral note. Weekly: full observation record including any health symptoms, water and feed consumption estimate, any treatments given. This data is invaluable when something goes wrong and you\'re trying to remember when symptoms first appeared.',
      advanced: 'Production data enables trend analysis and early disease detection. Record egg count, behavioral observations, any aberrant droppings, individual bird health notes, treatments administered with dates and dosages. This record is essential for any veterinary consultation and for making informed culling or management decisions.'
    },
    why: {
      beginner: 'Memory is unreliable, especially when you\'re trying to figure out when your chicken first started acting differently. A simple log turns "she\'s been off for a while" into "she stopped eating normally 5 days ago" -- which makes all the difference in figuring out what\'s wrong.',
      intermediate: 'Flock health records enable pattern recognition that\'s impossible from memory alone. Production data identifies seasonal trends, health issues, and individual problem birds. Good records make the difference between proactive management and constant reactive firefighting.',
      advanced: 'Data-driven flock management is the foundation of commercial efficiency. Records enable year-over-year comparison, culling decisions based on production data, and early disease detection. Any veterinary consultation is significantly more productive with a detailed health history.'
    },
    beginnerNote: 'Even a note on your phone works. The best record system is the one you actually use consistently. Start simple -- date, egg count, one sentence observation. You\'ll be glad you did it six months from now.'
  }
];

// ── FLOCK DATA ──
const flock = {
  id: 'f1',
  name: 'Backyard Flock',
  location: 'Back yard',
  count: 6,
  breeds: 'Buff Orpington (3), Rhode Island Red (2), Easter Egger (1)',
  lastObservation: 'Jun 3',
  health: 'strong',
  healthLabel: 'Healthy',
  avgEggsPerDay: 4.5,
  notes: 'All birds active and eating well. EE started laying blue eggs last week.'
};

// ── FLOCK HEALTH LOG STORAGE ──
const flockLogs = JSON.parse(localStorage.getItem('flockLogs') || '[]');

function saveFlockLogs() {
  localStorage.setItem('flockLogs', JSON.stringify(flockLogs));
}

function addFlockLog(entry) {
  flockLogs.unshift(entry);
  saveFlockLogs();
}

// ── GET SEASON TASKS ──
function getChickenSeasonTasks(season) {
  return chickenTasks.filter(t => t.season === season || t.season === 'All');
}

function getAllChickenTasksGrouped() {
  return ['Spring', 'Summer', 'Autumn', 'Winter'].map(s => ({
    season: s,
    tasks: chickenTasks.filter(t => t.season === s)
  }));
}

// ── RENDER CHICKENS MODULE ──
function renderChickensModule() {
  const season = window.appState?.weather?.season || 'Spring';
  const showAll = window._ckShowAllSeasons || false;
  const screen = document.getElementById('screen-chickens');
  if (!screen) return;

  const taskHTML = showAll
    ? getAllChickenTasksGrouped().map(group => `
        <div class="section-label" style="margin-top:16px;">${group.season} · ${group.tasks.length} tasks</div>
        ${group.tasks.map(t => renderChickenTaskCard(t)).join('')}
      `).join('')
    : getChickenSeasonTasks(season).map(t => renderChickenTaskCard(t)).join('');

  screen.innerHTML = `
    <div class="detail-header" style="margin-bottom:16px;">
      <button class="back-btn" onclick="navigate('modules')">← Modules</button>
      <div class="detail-module">🐔 Chickens</div>
      <div class="detail-title">Your Flock</div>
    </div>

    <!-- Flock summary card -->
    <div class="card-lg" style="margin-bottom:10px; cursor:pointer;" onclick="openFlockDetail()">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size:16px; font-weight:600; color:var(--text); margin-bottom:2px;">${flock.name}</div>
          <div style="font-size:12px; color:var(--text-light);">${flock.location} · Last observed ${flock.lastObservation}</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="task-badge badge-routine">${flock.healthLabel}</span>
          <span style="color:var(--text-light); font-size:18px;">›</span>
        </div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-top:12px;">
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px; text-align:center;">
          <div style="font-size:20px; font-weight:600; color:var(--text);">${flock.count}</div>
          <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Birds</div>
        </div>
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px; text-align:center;">
          <div style="font-size:20px; font-weight:600; color:var(--text);">${flock.avgEggsPerDay}</div>
          <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Eggs/day</div>
        </div>
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px; text-align:center;">
          <div style="font-size:20px; font-weight:600; color:var(--text);">${Math.round((flock.avgEggsPerDay / flock.count) * 100)}%</div>
          <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Rate</div>
        </div>
      </div>
      ${flock.notes ? `<div style="margin-top:10px; font-size:12px; color:var(--text-mid); line-height:1.5; padding-top:10px; border-top:1px solid var(--tan-light);">${flock.notes}</div>` : ''}
    </div>

    <!-- Season toggle -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
      <div class="section-label" style="margin:0;">${showAll ? 'All seasons' : season + ' tasks'}</div>
      <button onclick="toggleCkSeasons()" style="background:${showAll ? 'var(--green)' : 'var(--cream-dark)'}; color:${showAll ? 'var(--white)' : 'var(--text-mid)'}; border:none; border-radius:20px; padding:4px 12px; font-size:11px; font-weight:500; cursor:pointer; font-family:inherit; transition:all 0.15s;">
        ${showAll ? '✓ All seasons' : 'View all seasons'}
      </button>
    </div>

    ${taskHTML}
  `;
}

function renderChickenTaskCard(task) {
  return `
    <div class="card task-card" onclick="openChickenTask('${task.id}')">
      <div class="task-icon" style="background:#FEF3E8;">🐔</div>
      <div class="task-info">
        <div class="task-title">${task.title}</div>
        <div class="task-meta">Chickens · ${task.time}</div>
        <span class="task-badge badge-${task.priority}">${task.badge}</span>
      </div>
      <div class="task-chevron">›</div>
    </div>
  `;
}

function toggleCkSeasons() {
  window._ckShowAllSeasons = !window._ckShowAllSeasons;
  renderChickensModule();
}

// ── FLOCK DETAIL ──
function openFlockDetail() {
  const screen = document.getElementById('screen-chickens');

  screen.innerHTML = `
    <div class="detail-header" style="margin-bottom:16px;">
      <button class="back-btn" onclick="renderChickensModule()">← Chickens</button>
      <div class="detail-module">🐔 Chickens · ${flock.location}</div>
      <div class="detail-title">${flock.name}</div>
    </div>

    <!-- Flock stats -->
    <div class="card-lg" style="margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div style="font-size:13px; font-weight:500; color:var(--text);">Flock status</div>
        <span class="task-badge badge-routine">${flock.healthLabel}</span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:14px;">
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px; text-align:center;">
          <div style="font-size:20px; font-weight:600; color:var(--text);">${flock.count}</div>
          <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Birds</div>
        </div>
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px; text-align:center;">
          <div style="font-size:20px; font-weight:600; color:var(--text);">${flock.avgEggsPerDay}</div>
          <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Eggs/day</div>
        </div>
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px; text-align:center;">
          <div style="font-size:20px; font-weight:600; color:var(--text);">${Math.round((flock.avgEggsPerDay / flock.count) * 100)}%</div>
          <div style="font-size:10px; color:var(--text-light); text-transform:uppercase; letter-spacing:0.06em; margin-top:2px;">Rate</div>
        </div>
      </div>
      <div style="border-top:1px solid var(--tan-light); padding-top:12px; display:flex; flex-direction:column; gap:6px;">
        <div style="display:flex; justify-content:space-between;">
          <span style="font-size:12px; color:var(--text-light);">Breeds</span>
          <span style="font-size:12px; color:var(--text); font-weight:500; text-align:right; max-width:60%;">${flock.breeds}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="font-size:12px; color:var(--text-light);">Last observed</span>
          <span style="font-size:12px; color:var(--text); font-weight:500;">${flock.lastObservation}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="font-size:12px; color:var(--text-light);">Location</span>
          <span style="font-size:12px; color:var(--text); font-weight:500;">${flock.location}</span>
        </div>
      </div>
      ${flock.notes ? `<div style="margin-top:10px; padding:10px; background:var(--cream-dark); border-radius:8px; font-size:12px; color:var(--text-mid); line-height:1.5;">${flock.notes}</div>` : ''}
    </div>

    <!-- Log observation button -->
    <button onclick="showFlockLogForm()" style="width:100%; background:var(--green); color:var(--white); border:none; border-radius:var(--radius); padding:14px; font-size:15px; font-weight:500; cursor:pointer; font-family:inherit; display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:16px;">
      📋 Log an observation
    </button>

    <!-- Health log history -->
    <div class="section-label">Observation history · ${flockLogs.length} ${flockLogs.length === 1 ? 'entry' : 'entries'}</div>
    ${flockLogs.length === 0
      ? `<div class="card" style="text-align:center; padding:24px; border-style:dashed; opacity:0.6;">
          <div style="font-size:24px; margin-bottom:8px;">📋</div>
          <div style="font-size:13px; color:var(--text-mid);">No observations logged yet</div>
        </div>`
      : flockLogs.map(log => renderFlockLogEntry(log)).join('')
    }
  `;
}

function renderFlockLogEntry(log) {
  const healthBadge = log.overallHealth === 'healthy' ? 'routine' : log.overallHealth === 'concern' ? 'urgent' : 'soon';
  const healthLabel = log.overallHealth === 'healthy' ? 'Healthy' : log.overallHealth === 'concern' ? 'Concern' : 'Watch';
  return `
    <div class="card" style="margin-bottom:8px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <div>
          <div style="font-size:14px; font-weight:500; color:var(--text);">${log.date}</div>
          <div style="font-size:11px; color:var(--text-light); margin-top:1px;">${log.temp ? log.temp + '°F · ' : ''}${log.weather || ''}</div>
        </div>
        <span class="task-badge badge-${healthBadge}">${healthLabel}</span>
      </div>
      <div style="display:flex; gap:16px; flex-wrap:wrap; margin-bottom:${log.notes ? '8px' : '0'};">
        ${log.eggsToday !== '' && log.eggsToday !== undefined ? `<div style="font-size:12px; color:var(--text-mid);">🥚 ${log.eggsToday} eggs</div>` : ''}
        ${log.behavior ? `<div style="font-size:12px; color:var(--text-mid);">👀 ${log.behavior}</div>` : ''}
        ${log.anySymptoms === 'yes' ? `<div style="font-size:12px; color:var(--urgent);">⚠ Symptoms noted</div>` : ''}
      </div>
      ${log.notes ? `<div style="font-size:12px; color:var(--text-mid); line-height:1.5; padding-top:8px; border-top:1px solid var(--tan-light);">${log.notes}</div>` : ''}
    </div>
  `;
}

// ── FLOCK LOG FORM ──
function showFlockLogForm() {
  const screen = document.getElementById('screen-chickens');
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const currentTemp = window.appState?.weather?.temp || '';

  screen.innerHTML = `
    <div class="detail-header" style="margin-bottom:16px;">
      <button class="back-btn" onclick="openFlockDetail()">← ${flock.name}</button>
      <div class="detail-module">🐔 Chickens · Observation</div>
      <div class="detail-title">Log Observation</div>
    </div>

    <div class="card-lg" style="margin-bottom:12px;">
      <!-- Date -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">Date</div>
        <div style="background:var(--cream-dark); border-radius:8px; padding:10px 14px; font-size:14px; color:var(--text);">${today}</div>
      </div>

      <!-- Temp & Weather -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
        <div>
          <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">Temp (°F)</div>
          <input id="flock-temp" type="number" value="${currentTemp}" placeholder="e.g. 72"
            style="width:100%; background:var(--cream-dark); border:1px solid var(--tan-light); border-radius:8px; padding:10px 14px; font-size:14px; color:var(--text); font-family:inherit; outline:none;">
        </div>
        <div>
          <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">Weather</div>
          <input id="flock-weather" type="text" placeholder="e.g. sunny, warm"
            style="width:100%; background:var(--cream-dark); border:1px solid var(--tan-light); border-radius:8px; padding:10px 14px; font-size:14px; color:var(--text); font-family:inherit; outline:none;">
        </div>
      </div>

      <!-- Eggs today -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">Eggs collected today</div>
        <input id="flock-eggs" type="number" min="0" placeholder="e.g. 5"
          style="width:100%; background:var(--cream-dark); border:1px solid var(--tan-light); border-radius:8px; padding:10px 14px; font-size:14px; color:var(--text); font-family:inherit; outline:none;">
      </div>

      <!-- Behavior -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">Flock behavior</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          ${[['active','Active & normal'],['quiet','Quieter than usual'],['lethargic','Lethargic']].map(([v,label]) => `
            <button onclick="selectOption('flock-behavior', '${v}', this)"
              data-group="flock-behavior" data-value="${v}"
              style="padding:8px 12px; font-size:12px; font-weight:500; border-radius:8px; cursor:pointer; font-family:inherit; transition:all 0.15s; border:1px solid var(--tan-light); background:var(--cream-dark); color:var(--text-mid);">
              ${label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Any symptoms -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">Any symptoms noticed?</div>
        <div style="display:flex; gap:8px;">
          ${[['no','No issues'],['yes','Yes -- noted below']].map(([v,label]) => `
            <button onclick="selectOption('flock-symptoms', '${v}', this)"
              data-group="flock-symptoms" data-value="${v}"
              style="flex:1; padding:8px 4px; font-size:12px; font-weight:500; border-radius:8px; cursor:pointer; font-family:inherit; transition:all 0.15s; border:1px solid var(--tan-light); background:var(--cream-dark); color:var(--text-mid);">
              ${label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Overall health -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">Overall assessment</div>
        <div style="display:flex; gap:8px;">
          ${[['healthy','routine','Healthy'],['watch','soon','Watch'],['concern','urgent','Concern']].map(([v,badge,label]) => `
            <button onclick="selectOption('flock-health', '${v}', this)"
              data-group="flock-health" data-value="${v}"
              style="flex:1; padding:8px 4px; font-size:12px; font-weight:500; border-radius:8px; cursor:pointer; font-family:inherit; transition:all 0.15s; border:1px solid var(--tan-light); background:var(--cream-dark); color:var(--text-mid);">
              ${label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Notes -->
      <div>
        <div style="font-size:11px; font-weight:500; color:var(--text-light); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">Notes</div>
        <textarea id="flock-notes" placeholder="What did you observe? Any individual birds to note?"
          style="width:100%; background:var(--cream-dark); border:1px solid var(--tan-light); border-radius:8px; padding:10px 14px; font-size:14px; color:var(--text); font-family:inherit; outline:none; min-height:80px; resize:none; line-height:1.5;"></textarea>
      </div>
    </div>

    <button onclick="saveFlockLogForm()"
      style="width:100%; background:var(--green); color:var(--white); border:none; border-radius:var(--radius); padding:14px; font-size:15px; font-weight:500; cursor:pointer; font-family:inherit; margin-bottom:12px;">
      ✓ Save observation
    </button>
    <button onclick="openFlockDetail()"
      style="width:100%; background:transparent; color:var(--text-mid); border:1px solid var(--tan-light); border-radius:var(--radius); padding:12px; font-size:14px; cursor:pointer; font-family:inherit;">
      Cancel
    </button>
  `;
}

function saveFlockLogForm() {
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const eggsVal = document.getElementById('flock-eggs')?.value;
  const entry = {
    date: today,
    temp: document.getElementById('flock-temp')?.value || '',
    weather: document.getElementById('flock-weather')?.value || '',
    eggsToday: eggsVal !== '' ? eggsVal : '',
    behavior: getSelectedOption('flock-behavior') || '',
    anySymptoms: getSelectedOption('flock-symptoms') || 'no',
    overallHealth: getSelectedOption('flock-health') || 'healthy',
    notes: document.getElementById('flock-notes')?.value || ''
  };

  addFlockLog(entry);
  flock.lastObservation = today;

  // Update avg eggs if provided
  if (eggsVal && !isNaN(parseFloat(eggsVal))) {
    flock.avgEggsPerDay = parseFloat(eggsVal);
  }

  // Push to main log
  if (window._addToMainLog) {
    window._addToMainLog({
      date: today,
      title: `${flock.name} observation logged`,
      detail: `${eggsVal ? eggsVal + ' eggs · ' : ''}${entry.behavior || 'Observed'} · ${entry.notes ? entry.notes.slice(0, 60) + (entry.notes.length > 60 ? '...' : '') : 'No notes'}`,
      tag: 'Chickens'
    });
  }

  openFlockDetail();
}

// ── OPEN CHICKEN TASK ──
function openChickenTask(taskId) {
  const task = chickenTasks.find(t => t.id === taskId);
  if (!task) return;

  window.appState = window.appState || {};
  window.appState.currentTask = task;
  window.appState.currentTaskType = 'chickens';

  const level = window.appState.experienceLevel || state?.experienceLevel || 'beginner';

  document.getElementById('detail-module').textContent = `🐔 Chickens · ${window.appState?.weather?.season || 'Spring'}`;
  document.getElementById('detail-title').textContent = task.title;
  document.getElementById('layer-what').textContent = task.what[level];
  document.getElementById('layer-how').textContent = task.how[level];
  document.getElementById('layer-why').textContent = task.why[level];
  document.getElementById('beginner-note').textContent = task.beginnerNote;
  document.getElementById('inspection-warning').style.display = 'none';

  document.querySelectorAll('.exp-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });

  document.querySelector('.back-btn').onclick = () => navigate('chickens');
  navigate('task-detail');
}
