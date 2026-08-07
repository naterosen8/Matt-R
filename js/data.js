// California growing-region data. Figures are general planning estimates
// (typical ranges), not forecasts — always cross-check with your local
// UC Cooperative Extension / Master Gardener program for your exact spot,
// since California's terrain creates microclimates even within a region.

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const REGIONS = [
  {
    id: "north-coast",
    name: "North Coast & Redwood Belt",
    counties: "Del Norte, Humboldt, Mendocino, coastal Sonoma",
    tagline: "Cool, foggy, and wet — a rainforest climate in disguise.",
    sunsetZones: "4–7, 17",
    usdaZones: "8b – 9b",
    summerHigh: "65–72°F",
    winterLow: "38–42°F",
    rainfall: "40–100+ in/yr",
    growingSeason: "200–280 frost-free days, but often too cool for true heat lovers",
    description: [
      "The North Coast rarely gets hot and rarely gets truly cold — the Pacific keeps temperatures in a narrow band year-round, with a marine fog layer that can sit over the coast most summer mornings. Rainfall is the heaviest in the state, falling almost entirely between November and April; summers are essentially dry.",
      "This is redwood and fern country, so native soils skew acidic under a deep layer of conifer duff. It's outstanding for anything that likes cool roots and steady moisture, and frustrating for sun-and-heat crops like tomatoes and melons unless you find a warm inland pocket (Willits, Ukiah) away from the immediate coast."
    ],
    soilMix: {
      summary: "Native soil is acidic conifer-duff loam on slopes, heavier alluvial clay in river valleys. Leave it unamended for acid lovers; buffer it for vegetables.",
      recipe: "Vegetable beds: 50% native soil, 30% compost, 10% aged manure, 10% coarse sand or pumice for drainage in clay valley bottoms.",
      amendments: [
        "Garden lime at ~5 lb/100 sq ft every 2–3 years on vegetable beds — brassicas and favas want pH 6.5–7, well above the native forest-floor pH",
        "Leave blueberries, rhododendrons, and azaleas in unamended native soil — they want pH 4.5–5.5",
        "Yearly compost top-dress; heavy rainfall leaches nutrients out of beds fast",
        "Fir bark or pine-needle mulch around acid-loving shrubs"
      ]
    },
    fertilizing: {
      summary: "Heavy Oct–Apr rainfall leaches nutrients quickly, so feed lighter and more often rather than one big spring dose.",
      schedule: [
        { period: "Feb – Mar", note: "Balanced organic fertilizer (4-4-4) or fish emulsion/kelp worked in at bed prep, ahead of spring peas and brassicas" },
        { period: "Apr – Sep", note: "Side-dress heavy feeders (brassicas, potatoes) with compost tea or fish emulsion every 3–4 weeks; blood meal for a nitrogen boost" },
        { period: "Blueberries", note: "Acid-forming fertilizer (ammonium sulfate or cottonseed meal) in early spring and again right after harvest — avoid nitrate-based feeds, which acid-soil bacteria process poorly" },
        { period: "Apple / pear trees", note: "Balanced fertilizer at bud break in early spring only; nothing after July, so new wood hardens off before winter rain and frost" }
      ]
    },
    watering: {
      summary: "Rain carries the garden October–April. The dry-fog summer (roughly June–September) is when irrigation matters, especially away from the immediate coastal fog belt.",
      schedule: [
        { period: "Oct – Apr", note: "Rainfall alone is usually sufficient — supplement only during unusually dry stretches" },
        { period: "Jun – Sep (inland pockets)", note: "1–1.5 in/week via drip, split across 2 sessions" },
        { period: "Jun – Sep (immediate coast)", note: "Fog drip often covers a third or more of that need — check soil moisture before assuming you need to water" },
        { period: "New plantings", note: "Water 2–3x/week for the first month regardless of season" }
      ]
    },
    challenges: [
      "Slugs and snails thrive in the damp — expect to manage them all season",
      "Powdery mildew and other fungal issues from persistent humidity",
      "Not enough heat-unit accumulation for tomatoes, peppers, or melons right on the coast",
      "Deer pressure is heavy in rural/forest-edge gardens"
    ],
    plants: {
      vegetables: ["Kale, chard & other brassicas", "Lettuce & salad greens", "Peas", "Potatoes", "Fava beans", "Artichokes", "Rhubarb"],
      fruits: ["Apples", "Pears", "Blueberries", "Currants & gooseberries", "Hardy kiwi"],
      natives: ["Redwood sorrel", "Sword fern", "Salal", "Evergreen huckleberry", "Red-flowering currant"]
    },
    calendar: [
      { crop: "Peas", plant: [1, 2, 3], harvest: [4, 5] },
      { crop: "Potatoes", plant: [2, 3, 4], harvest: [6, 7, 8] },
      { crop: "Kale / brassicas", plant: [1, 2, 3, 7, 8], harvest: [4, 5, 9, 10, 11] },
      { crop: "Blueberries", plant: [], harvest: [5, 6, 7] },
      { crop: "Apples", plant: [], harvest: [8, 9] }
    ]
  },
  {
    id: "bay-central-coast",
    name: "SF Bay Area & Central Coast",
    counties: "SF, East Bay, Peninsula, Santa Cruz, Monterey",
    tagline: "Textbook Mediterranean — mild, dry-summer, nearly frost-free.",
    sunsetZones: "15–17, 24",
    usdaZones: "9b – 10a",
    summerHigh: "70–75°F coastal, up to 85°F+ a few miles inland",
    winterLow: "42–46°F",
    rainfall: "18–25 in/yr",
    growingSeason: "300–330 days, nearly frost-free near the water",
    description: [
      "This is the region California's Mediterranean reputation is built on: cool, dry summers moderated by the marine layer, mild wet winters, and remarkably even temperatures. Fog is the defining variable — the closer to the water, the cooler and foggier the summer, which is why the same day can be 62°F in the Sunset District and 88°F in Walnut Creek 20 miles east.",
      "Because frost is rare and summers are mild, this is one of the few U.S. climates where you can keep a vegetable garden productive nearly twelve months a year, cool-season crops especially."
    ],
    soilMix: {
      summary: "Highly variable in short distances — sandy loam near the coast, heavy adobe clay in valley floors (Livermore, Napa, Sonoma).",
      recipe: "Clay valley beds: equal thirds native soil, compost, and coarse pumice or 1/4-inch-minus gravel. Sandy coastal beds: 60–70% native soil to 30–40% compost, plus a water-retentive amendment like coco coir since sand drains too fast on its own.",
      amendments: [
        "Gypsum on clay soils — apply per a soil test, typically around 40 lb/1,000 sq ft, to break up compaction over a season without raising pH",
        "Compost worked in every season; adobe clay especially benefits from repeated additions rather than one large one",
        "Worm castings for an extra fertility boost in raised beds"
      ]
    },
    fertilizing: {
      summary: "With near-year-round growing, feed on a rolling basis through the season rather than a single spring application.",
      schedule: [
        { period: "Feb – Nov, cool-season beds", note: "Balanced organic fertilizer (5-5-5) every 4–6 weeks during active growth of lettuce, chard, and brassicas" },
        { period: "Tomatoes / peppers (warm pockets)", note: "Bone meal + kelp meal at transplant for phosphorus and potassium, then a balanced feed every 3–4 weeks; taper nitrogen once flowering starts to avoid all-leaf growth" },
        { period: "Citrus (inland)", note: "Citrus-specific fertilizer (roughly 2-1-1 N-P-K) in February, May, and July; stop by August so trees harden off before winter chill" },
        { period: "Artichokes / perennials", note: "Top-dress with compost plus a balanced fertilizer in early spring" }
      ]
    },
    watering: {
      summary: "Classic summer-dry pattern — essentially no rain June through September, so irrigation carries the whole dry season.",
      schedule: [
        { period: "Jun – Oct, vegetable beds", note: "1–1.5 in/week via drip, split into 2–3 sessions; direct-seeded beds need near-daily light watering until germination" },
        { period: "Jun – Oct, fruit trees & citrus", note: "Deep soak weekly — 15–20 gallons per mature tree — tapering off into fall" },
        { period: "Coastal fog belt", note: "Often 30% less than inland valley numbers above, since fog drip supplements what drip lines deliver" },
        { period: "Nov – Mar", note: "Rainfall usually handles it; supplement only after dry spells longer than 3 weeks" }
      ]
    },
    challenges: [
      "Immediate coastal fog can be too cool for tomatoes, peppers, and melons — plant those in a warmer inland-facing spot",
      "Powdery mildew from cool, humid mornings",
      "Gophers and moles in garden beds",
      "Occasional light frost in inland valley pockets (Livermore, Napa) on clear winter nights"
    ],
    plants: {
      vegetables: ["Lettuce & greens (nearly year-round)", "Chard", "Favas", "Artichokes", "Brassicas", "Tomatoes & peppers (warmer pockets)"],
      fruits: ["Citrus (best inland, marginal on immediate coast)", "Apples", "Olives", "Figs", "Strawberries"],
      natives: ["California poppy", "Ceanothus (California lilac)", "Manzanita", "Coyote brush"]
    },
    calendar: [
      { crop: "Lettuce & greens", plant: [1, 2, 3, 4, 7, 8, 9], harvest: [2, 3, 4, 5, 9, 10, 11] },
      { crop: "Fava beans", plant: [9, 10], harvest: [3, 4] },
      { crop: "Tomatoes (inland)", plant: [3, 4], harvest: [6, 7, 8, 9] },
      { crop: "Artichokes", plant: [], harvest: [2, 3, 4, 5, 8, 9] },
      { crop: "Citrus (inland)", plant: [], harvest: [10, 11, 0, 1, 2, 3] }
    ]
  },
  {
    id: "socal-coast",
    name: "Southern California Coastal",
    counties: "LA, Orange County, San Diego coastal belt",
    tagline: "Subtropical and mild — avocado and citrus heartland.",
    sunsetZones: "22–24",
    usdaZones: "10a – 11a",
    summerHigh: "75–80°F",
    winterLow: "48–52°F",
    rainfall: "10–15 in/yr",
    growingSeason: "330–365 days, essentially frost-free",
    description: [
      "Mild year-round temperatures, a marine layer that tempers summer heat, and almost no risk of frost make this the most forgiving climate in the state — and the reason it's the commercial home of California avocados and much of its citrus. Rain is light and confined mostly to December–March; the other eight months are dry.",
      "The trade-off is water: with virtually no summer rain and rising costs, drought-tolerant and native landscaping has gone from a nice-to-have to standard practice for anything outside the vegetable beds."
    ],
    soilMix: {
      summary: "Sandy loam to alkaline clay. Sharp drainage matters more than richness — especially for avocado, where root rot is the top killer of home trees.",
      recipe: "Avocado / citrus: do NOT fill the planting hole with rich organic matter alone, which creates a water-holding 'bathtub' around the roots. Mound-plant 18–24 in above grade, blending native soil with no more than 20% compost. Vegetable beds: 40% native soil, 40% compost, 20% coarse sand or perlite.",
      amendments: [
        "Soil sulfur to lower pH for avocado and citrus, which prefer 6–6.5 against native soil that often runs 7.5–8+",
        "Chelated iron for the yellowing-between-veins chlorosis common in alkaline soil",
        "Wood-chip mulch, kept clear of trunks, to buffer soil temperature and moisture"
      ]
    },
    fertilizing: {
      summary: "Near-year-round growing means most edibles get fed on a rolling schedule; natives want the opposite — little to none.",
      schedule: [
        { period: "Avocado", note: "High-nitrogen avocado-specific fertilizer 3–4x per year (roughly Jan/Feb, Apr, Jun, Sep); zinc supplementation is common in Southern California avocado soils" },
        { period: "Citrus", note: "Citrus food (~2-1-1 N-P-K) in February, May, and August; add a chelated iron/manganese/zinc micronutrient spray if leaves yellow between the veins" },
        { period: "Vegetables", note: "Balanced organic feed every 4 weeks; heavy feeders like tomatoes and squash benefit from compost tea every 2 weeks during fruiting" },
        { period: "Natives", note: "Little to none — most California natives evolved in low-nutrient soil and sulk or die back with rich feeding" }
      ]
    },
    watering: {
      summary: "No meaningful rain roughly May through October. Overwatering, not underwatering, is the more common killer here — especially for avocado.",
      schedule: [
        { period: "Avocado", note: "Deep water 2x/week in summer (15–20 gal for a mature tree), letting the top few inches dry between waterings — consistent but never soggy" },
        { period: "Citrus", note: "Deep soak weekly; water stress right before bloom can trigger fruit drop" },
        { period: "Vegetables", note: "1–1.5 in/week via drip, rising to ~2 in/week during summer heat spikes or Santa Ana wind events" },
        { period: "Established natives (1–2+ yrs)", note: "Little to no supplemental water needed — overwatering kills natives about as readily as drought" }
      ]
    },
    challenges: [
      "Water cost and drought restrictions",
      "Avocado root rot from poor drainage",
      "Santa Ana wind events cause rapid desiccation",
      "Invasive shot hole borer in landscape/avocado trees",
      "Rare hard-frost years can damage tropicals planted too confidently"
    ],
    plants: {
      vegetables: ["Tomatoes, peppers & squash (nearly year-round)", "Winter brassicas", "Beans"],
      fruits: ["Avocado", "Citrus (all types)", "Mango (protected microclimates)", "Guava", "Macadamia"],
      natives: ["California sagebrush", "Toyon", "Matilija poppy", "California lilac"]
    },
    calendar: [
      { crop: "Tomatoes", plant: [1, 2, 3, 7], harvest: [5, 6, 7, 8, 9, 10] },
      { crop: "Peppers", plant: [2, 3, 4], harvest: [6, 7, 8, 9, 10] },
      { crop: "Avocado", plant: [], harvest: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { crop: "Citrus", plant: [], harvest: [10, 11, 0, 1, 2, 3, 4, 5] },
      { crop: "Winter brassicas", plant: [8, 9], harvest: [11, 0, 1] }
    ]
  },
  {
    id: "central-valley",
    name: "Central Valley",
    counties: "Sacramento & San Joaquin Valleys — Redding to Bakersfield",
    tagline: "Hot, dry, and fertile — the nation's fruit and nut basket.",
    sunsetZones: "7–9, 14",
    usdaZones: "8b – 9b (9b–10a in the south)",
    summerHigh: "94–102°F",
    winterLow: "36–40°F, frequent tule fog",
    rainfall: "10–20 in/yr",
    growingSeason: "250–300 days",
    description: [
      "Enclosed by mountains on all sides, the Central Valley runs hot and dry in summer and cool, damp, and often fog-bound in winter. The daily temperature swing is large, and summer heat is intense and prolonged — this is what makes it ideal for stone fruit, almonds, walnuts, and grapes, which need both heat and a real winter chill.",
      "Deep alluvial soil washed down from the surrounding mountains over millennia makes this some of the most productive farmland on Earth, which is exactly why it grows the majority of the country's almonds, peaches, and table grapes."
    ],
    soilMix: {
      summary: "Generally deep, fertile alluvial loam — a gardener's dream in most spots. Low-lying pockets can run heavy adobe clay.",
      recipe: "Raised beds in clay pockets: 40% native soil, 40% compost, 20% coarse sand pre-treated with gypsum.",
      amendments: [
        "Gypsum for clay pockets to improve drainage without raising pH",
        "Compost annually — high heat burns through organic matter faster than milder climates",
        "3–4 in of mulch is close to mandatory; bare soil in Valley summer heat can lose an inch of water a week to evaporation alone"
      ]
    },
    fertilizing: {
      summary: "Time nitrogen and potassium around fruit set and the worst heat, and skip feeding altogether during the hottest weeks.",
      schedule: [
        { period: "Tomatoes / peppers / melons", note: "Balanced fertilizer at transplant (April); side-dress nitrogen (blood meal or ammonium sulfate) at first fruit set, then shift to a potassium-heavy feed (kelp meal) through peak summer to support fruiting and heat tolerance" },
        { period: "Stone fruit & nut trees", note: "Balanced fertilizer plus zinc and boron (common Valley-soil deficiencies) in the dormant season (Jan–Feb) before bud break; a lighter feed after harvest (Jun–Jul) supports next year's bud set" },
        { period: "Corn", note: "Heavy nitrogen feeder — side-dress at knee-high stage and again at tasseling" },
        { period: "Above ~100°F", note: "Hold off fertilizing — heat-stressed plants can't use nutrients efficiently, and salt buildup risk rises" }
      ]
    },
    watering: {
      summary: "Irrigation is essential May through September; without it, almost nothing survives the summer heat.",
      schedule: [
        { period: "Jun – Aug, vegetables", note: "2–3 in/week via drip, split into 3–4 sessions to avoid runoff on heat-baked soil" },
        { period: "Fruit & nut trees", note: "Deep, infrequent watering — 20–30 gal, 1–2x/week for mature trees, to encourage deep root growth rather than shallow surface roots" },
        { period: "Nov – Feb", note: "Irrigation drops to near zero; rain and tule fog carry the season" }
      ]
    },
    challenges: [
      "Extreme heat above ~95°F causes blossom drop and sunscald on tomatoes and peppers",
      "Winter tule fog can suppress daytime temperatures for days at a time",
      "Spider mites explode in the dry heat",
      "Codling moth and other orchard pests need active management",
      "Water allocation and irrigation cost, especially in drought years"
    ],
    plants: {
      vegetables: ["Tomatoes", "Peppers", "Melons", "Corn", "Squash", "Eggplant"],
      fruits: ["Peaches, plums & apricots", "Almonds & walnuts", "Table grapes", "Citrus (southern valley)"],
      natives: ["Valley oak", "California buckeye", "Deergrass"]
    },
    calendar: [
      { crop: "Tomatoes", plant: [3, 4], harvest: [6, 7, 8] },
      { crop: "Melons", plant: [4], harvest: [7, 8] },
      { crop: "Corn", plant: [3, 4, 5], harvest: [6, 7, 8] },
      { crop: "Stone fruit", plant: [], harvest: [5, 6, 7] },
      { crop: "Almonds", plant: [], harvest: [7, 8] },
      { crop: "Garlic", plant: [9, 10], harvest: [5, 6] }
    ]
  },
  {
    id: "sierra",
    name: "Sierra Nevada Foothills & Mountains",
    counties: "Placer, El Dorado, Nevada, Mariposa, Tuolumne (elevation-dependent)",
    tagline: "A short, intense season shaped entirely by elevation.",
    sunsetZones: "1–3, 7",
    usdaZones: "5b – 8a, depending on elevation",
    summerHigh: "80–90°F foothills, 70–75°F above 5,000 ft",
    winterLow: "20–30°F, heavy snow above ~4,000 ft",
    rainfall: "20–50+ in/yr (much as snow at elevation)",
    growingSeason: "100–180 days — short, and shrinks fast with elevation",
    description: [
      "Elevation dominates everything here. A garden at 2,000 feet in the foothills behaves almost like a mild inland-valley climate; the same plant list at 6,000 feet has a frost-free window that might only be 90 days long. Winters are cold and snowy at higher elevations; summers are warm and dry.",
      "Late spring frosts and early fall frosts are the defining constraint — most planning here is built around squeezing a full harvest into a narrow, unpredictable window."
    ],
    soilMix: {
      summary: "Rocky, granitic, fast-draining, and typically acidic with low native fertility — raised beds are close to standard practice.",
      recipe: "50% compost, 30% native soil, 20% coarse sand or pumice for drainage against heavy snowmelt.",
      amendments: [
        "Garden lime if a soil test shows very acidic native soil (often pH 5.5–6) where you're growing brassicas or other vegetables",
        "Heavy yearly compost — native fertility is low to begin with",
        "Keep mulch light in spring (it delays soil warming and shortens an already-short season further) but heavy through summer"
      ]
    },
    fertilizing: {
      summary: "The short season rewards efficient timing — feed at planting rather than waiting, and watch nitrogen on fast-cycling crops.",
      schedule: [
        { period: "At planting (May – Jun, once soil has warmed)", note: "Balanced organic fertilizer worked into beds before setting out transplants or direct-seeding" },
        { period: "Fast crops (peas, lettuce, bush beans)", note: "One feeding at planting is often enough given the short, compressed growth cycle" },
        { period: "Fruit trees (apple, pear, cherry)", note: "Balanced fertilizer right at bud break (Apr–May); skip late-season feeding so wood hardens before the first early fall frost" },
        { period: "Short-season tomatoes", note: "Go easy on nitrogen — excess N in a short season pushes leafy growth at the expense of fruit set before frost" }
      ]
    },
    watering: {
      summary: "Snowmelt typically carries the garden into early summer; irrigation becomes necessary once it dries out.",
      schedule: [
        { period: "May – Jun", note: "Soil is often still moist from snowmelt — minimal supplemental water needed" },
        { period: "Jul – Sep, vegetables", note: "1.5–2 in/week, more at higher elevation where drier air speeds evaporation; water early morning to cut evaporative loss in thin mountain air" },
        { period: "Fruit trees", note: "Deep soak weekly through summer, tapering off by September as trees head into dormancy" }
      ]
    },
    challenges: [
      "Short, unpredictable frost-free window",
      "Deer and black bear pressure",
      "Wildfire smoke can reduce photosynthesis and pollinator activity for weeks at a time",
      "Heavy snow load on greenhouses and structures"
    ],
    plants: {
      vegetables: ["Peas", "Potatoes", "Brassicas", "Quick-maturing bush beans", "Short-season tomato varieties"],
      fruits: ["Apples", "Pears", "Cherries (excellent winter chill)", "Currants", "Raspberries"],
      natives: ["Ponderosa pine", "Manzanita", "Mountain lilac", "Penstemon"]
    },
    calendar: [
      { crop: "Peas", plant: [4, 5], harvest: [6, 7] },
      { crop: "Potatoes", plant: [4], harvest: [8] },
      { crop: "Short-season tomatoes", plant: [5], harvest: [7, 8] },
      { crop: "Apples", plant: [], harvest: [8, 9] },
      { crop: "Garlic", plant: [9], harvest: [6] }
    ]
  },
  {
    id: "high-desert",
    name: "High Desert (Mojave)",
    counties: "Antelope Valley, Victorville, Lancaster, Ridgecrest",
    tagline: "Big swings both daily and seasonally — hot days, cold nights, cold winters.",
    sunsetZones: "11",
    usdaZones: "8a – 9a",
    summerHigh: "95–102°F",
    winterLow: "28–32°F, hard freezes are routine",
    rainfall: "5–10 in/yr",
    growingSeason: "180–220 days, squeezed between hard frost and extreme heat",
    description: [
      "Sitting at 2,000–4,000 feet, the high desert combines real winter cold with brutal summer heat and huge day-to-night temperature swings year-round. It's arid and windy, with very low humidity that accelerates both evaporation and plant stress.",
      "Successful gardens here plan around two shoulder seasons — spring and fall — rather than one long summer, since both hard frost and extreme heat rule out large chunks of the calendar."
    ],
    soilMix: {
      summary: "Sandy, alkaline, and low in organic matter, with drainage that's already fast — the real fight here is retaining moisture, not shedding it.",
      recipe: "Raised beds: 40% compost, 30% native soil, 30% coarse sand, with extra compost or coco coir worked in for water retention.",
      amendments: [
        "Soil sulfur to gradually lower alkaline pH",
        "Gypsum if the soil is also compacted or sodic",
        "3–4 in of mulch is critical — bare desert soil surface can hit 140°F+ and cook shallow roots"
      ]
    },
    fertilizing: {
      summary: "Feed around the two growing windows and pull back hard during peak heat, when plants can't process nutrients well anyway.",
      schedule: [
        { period: "Feb – May, spring crops", note: "Balanced fertilizer at planting, then a light feed every 3–4 weeks until heat shuts growth down in June" },
        { period: "Jun – Aug, shade-clothed survivors", note: "Reduce feeding significantly during peak heat" },
        { period: "Aug – Oct, fall crops", note: "Balanced feed at planting, one side-dress mid-season" },
        { period: "Pistachio / pomegranate", note: "Fertilize early spring before bud break — these are relatively low-feeding, drought-adapted trees, and over-fertilizing pushes vulnerable new growth into frost risk" }
      ]
    },
    watering: {
      summary: "Low humidity pulls moisture out of soil fast; wind loss is often a bigger factor than heat loss.",
      schedule: [
        { period: "Spring / fall vegetables", note: "1–1.5 in/week via drip, deep and infrequent to encourage roots to grow down and away from wind desiccation" },
        { period: "Summer survivors (shade cloth)", note: "Up to 2–2.5 in/week, split into more frequent shorter sessions to reduce evaporative loss between waterings" },
        { period: "Winter", note: "Minimal — most plantings are dormant; water only during extended dry warm spells" },
        { period: "Windbreaks", note: "Cut water need substantially — worth installing before investing in irrigation upgrades" }
      ]
    },
    challenges: [
      "Both hard frost and extreme heat bracket the growing season",
      "Wind desiccation",
      "Jackrabbits",
      "Alkaline soil limits nutrient uptake without amendment"
    ],
    plants: {
      vegetables: ["Lettuce & peas (spring/fall)", "Brassicas (spring/fall)", "Tomatoes & peppers with summer shade cloth"],
      fruits: ["Pistachios", "Pomegranates", "Hardy grapes", "Jujube"],
      natives: ["Joshua tree", "Creosote bush", "Desert marigold", "California juniper"]
    },
    calendar: [
      { crop: "Lettuce & peas", plant: [1, 2], harvest: [3, 4] },
      { crop: "Tomatoes", plant: [3], harvest: [5, 6, 8, 9] },
      { crop: "Fall brassicas", plant: [7, 8], harvest: [9, 10, 11] },
      { crop: "Pomegranates", plant: [], harvest: [8, 9] }
    ]
  },
  {
    id: "low-desert",
    name: "Low Desert (Colorado Desert)",
    counties: "Coachella Valley, Imperial Valley, Palm Springs, El Centro",
    tagline: "The growing season flips — winter is prime time, summer is survival mode.",
    sunsetZones: "13",
    usdaZones: "9b – 10b",
    summerHigh: "108–115°F",
    winterLow: "42–46°F, frost is rare",
    rainfall: "3–6 in/yr",
    growingSeason: "365 days on paper, but the real season is fall through spring",
    description: [
      "This is California's most extreme climate: barely any rainfall, mild frost-free winters, and summer heat that goes well past what most vegetables can survive. As a result, the growing calendar is essentially inverted from the rest of the country — fall through spring is the productive season, and much of the garden goes dormant or gets abandoned through the peak of summer.",
      "It's also why the Imperial and Coachella Valleys supply a huge share of the nation's winter vegetables: while the rest of the U.S. is frozen, this region is harvesting lettuce, broccoli, and carrots outdoors."
    ],
    soilMix: {
      summary: "Sandy and alkaline with low organic matter. Because irrigation is constant year-round, salinity buildup is a real long-term problem, not just a fertility one.",
      recipe: "40% compost, 40% native soil, 20% sand, refreshed with organic matter each season since high heat burns through it fast.",
      amendments: [
        "Gypsum to displace sodium in salt-affected soil",
        "Soil sulfur for pH management",
        "Periodic deep leaching irrigation — flood the bed until water drains well past the root zone — ideally before fall planting, to flush accumulated salts"
      ]
    },
    fertilizing: {
      summary: "Feed for the fall–spring growing season; treat summer as maintenance-only since most plants are simply surviving, not growing.",
      schedule: [
        { period: "Sep – Oct, at planting", note: "Balanced fertilizer worked into beds ahead of the main growing season" },
        { period: "Through winter", note: "Side-dress leafy greens and brassicas every 3 weeks" },
        { period: "Citrus / dates", note: "Fertilize in February and again in May, before summer dormancy; skip feeding entirely through summer" },
        { period: "Salt-sensitive crops (beans, carrots)", note: "Follow fertilizing with extra leaching irrigation to prevent salt burn at the root zone" }
      ]
    },
    watering: {
      summary: "Virtually no natural rainfall — the garden is 100% dependent on irrigation, historically Colorado River water.",
      schedule: [
        { period: "Winter growing season, leafy greens/brassicas", note: "1–1.5 in/week via drip — cooler temps mean lower water need despite the desert setting" },
        { period: "Citrus / dates (year-round)", note: "Deep soak 2x/week even in summer dormancy, 20–30 gal per mature tree, to keep the root zone alive" },
        { period: "Every 4–6 weeks", note: "A heavy leaching flood, well beyond normal watering, to push accumulated salts below the root zone — specific to this region's irrigation-dependent soils" }
      ]
    },
    challenges: [
      "Summer heat above 115°F is lethal to most vegetable crops",
      "Soil salinity from constant irrigation",
      "Some fruit varieties don't get enough winter chill hours",
      "Water rights and cost",
      "Whiteflies, especially in fall"
    ],
    plants: {
      vegetables: ["Lettuce & leafy greens (fall–winter)", "Broccoli & carrots (fall–winter)", "Peppers (fall plant)"],
      fruits: ["Dates (Coachella Valley is the U.S. date capital)", "Citrus", "Table grapes"],
      natives: ["Desert ironwood", "Ocotillo", "Brittlebush", "Desert lavender"]
    },
    calendar: [
      { crop: "Lettuce & greens", plant: [8, 9, 10], harvest: [10, 11, 0, 1] },
      { crop: "Carrots", plant: [8, 9], harvest: [11, 0, 1] },
      { crop: "Dates", plant: [], harvest: [8, 9, 10] },
      { crop: "Citrus", plant: [], harvest: [11, 0, 1, 2, 3] },
      { crop: "Melons", plant: [1, 2], harvest: [4, 5] }
    ]
  },
  {
    id: "inland-valleys",
    name: "Inland Valleys & Wine Country",
    counties: "Inland Empire, Temecula, Napa/Sonoma valley floors",
    tagline: "Coast-to-desert transition, with frost pockets on the valley floor.",
    sunsetZones: "18–21",
    usdaZones: "9a – 10a",
    summerHigh: "90–98°F",
    winterLow: "36–40°F, frost pockets on clear nights",
    rainfall: "12–18 in/yr",
    growingSeason: "260–300 days",
    description: [
      "These valleys sit in the transition zone between the mild coast and the harsher desert and mountain climates — hotter summers than the coast, but without the coast's fog relief. On clear winter nights, cold air drains downhill and pools in the valley floor, creating frost pockets that can be several degrees colder than the surrounding slopes.",
      "That same cold-air drainage and big day-night temperature swing is exactly what makes places like Temecula and Napa excellent for wine grapes and stone fruit — the diurnal range builds flavor and color that a flatter, more humid climate can't."
    ],
    soilMix: {
      summary: "Often decomposed granite or sandy loam with good natural drainage and moderate native fertility.",
      recipe: "Vegetable beds: work 30% compost into the top 6–8 in. Grapevines and olives want the opposite — go light on amendment, since overly rich soil produces excess leaf growth at the expense of fruit concentration.",
      amendments: [
        "Compost for vegetable beds",
        "Minimal amendment for grapevines — established vines generally do better in lean, well-drained soil",
        "Mulch on the valley floor to moderate soil temperature swings and soften frost-pocket effects"
      ]
    },
    fertilizing: {
      summary: "Vegetables get fed on a normal schedule; grapevines specifically want less, not more.",
      schedule: [
        { period: "Vegetables", note: "Balanced fertilizer at transplant (Mar–Apr), side-dressed every 3–4 weeks through summer" },
        { period: "Wine grapes", note: "Light spring feeding only if vines show visible deficiency (yellowing); most established vines need little to none — excess nitrogen produces vegetative growth at the expense of fruit quality" },
        { period: "Stone fruit", note: "Dormant-season feed (Jan–Feb) with balanced fertilizer, plus zinc if buds are sparse" },
        { period: "Citrus (frost-safe slopes)", note: "Standard citrus schedule: February, May, August" }
      ]
    },
    watering: {
      summary: "Dry summers require full irrigation, though lower humidity than the coast means less fungal disease pressure for grapes and stone fruit.",
      schedule: [
        { period: "Vegetables", note: "1–1.5 in/week via drip through summer" },
        { period: "Grapes, Jul – Aug", note: "Deliberately reduced or cut irrigation in the weeks before harvest to concentrate flavor — an intentional technique here, unlike almost every other crop on this page" },
        { period: "Frost nights", note: "Irrigating right before a frost event can help protect plantings — wet soil holds more heat than dry soil, a useful trick for valley-floor frost pockets specifically" }
      ]
    },
    challenges: [
      "Valley-floor frost pockets on winter nights, even when nearby slopes stay frost-free",
      "Santa Ana wind events",
      "Asian citrus psyllid quarantine areas limit some citrus planting/movement",
      "Rapid heat spikes in summer"
    ],
    plants: {
      vegetables: ["Tomatoes", "Peppers", "Melons", "Squash"],
      fruits: ["Wine grapes", "Stone fruit", "Citrus (frost-safe slopes)", "Pomegranates", "Olives"],
      natives: ["California sagebrush", "Black sage", "Western redbud"]
    },
    calendar: [
      { crop: "Wine grapes", plant: [], harvest: [7, 8, 9] },
      { crop: "Tomatoes", plant: [2, 3], harvest: [5, 6, 7, 8] },
      { crop: "Stone fruit", plant: [], harvest: [5, 6, 7] },
      { crop: "Citrus (slopes)", plant: [], harvest: [10, 11, 0, 1, 2] }
    ]
  }
];
