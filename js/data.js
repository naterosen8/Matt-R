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
    soil: "Acidic forest loam on slopes (great for blueberries, rhododendrons, azaleas without amendment); heavier alluvial clay in river valleys. Vegetable beds benefit from an occasional lime application to nudge pH up, plus yearly compost — the acidity that conifers love is a bit much for brassicas.",
    water: "Rain supplies nearly all water October–May. The dry-fog summer still needs supplemental drip irrigation, especially away from the immediate coastal fog belt.",
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
    soil: "Highly variable in short distances — sandy loam near the coast, heavy adobe clay in valley floors (Livermore, Napa). Clay areas need gypsum and organic matter to break up compaction and improve drainage before planting.",
    water: "Classic summer-dry Mediterranean pattern: essentially no rain June–September. Drip irrigation and mulch are standard practice through the dry months.",
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
    soil: "Sandy loam to clay, often alkaline. Citrus and especially avocado need sharp drainage — avocado root rot (Phytophthora) is the single biggest killer of home avocado trees here, almost always from poor drainage or overwatering.",
    water: "No meaningful rain roughly May–October. Drip or microspray irrigation is essentially mandatory; hydrozoning (grouping plants by water need) saves real money here.",
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
    soil: "Generally deep, fertile alluvial loam — a gardener's dream in most spots. Low-lying areas can have heavy clay ('adobe') that benefits from gypsum and raised beds for drainage.",
    water: "Irrigation is essential May–September; without it almost nothing survives the summer heat. Drip is highly efficient given how fast water evaporates in the heat.",
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
    soil: "Rocky, granitic, fast-draining, and typically acidic with low native fertility. Raised beds with heavy compost amendment are close to standard practice.",
    water: "Historically snowmelt-fed; summers are dry and need regular irrigation. Mulch heavily — thin mountain air and low humidity dry soil out fast.",
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
    soil: "Sandy, alkaline, and low in organic matter. Heavy compost and mulch are essential, and acid-loving plants typically need soil amendment to counter the native pH.",
    water: "Rainfall is minimal and low humidity pulls moisture out of soil fast. Drip irrigation with a thick mulch layer and windbreaks to cut evaporative wind loss are standard.",
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
    soil: "Sandy and alkaline with low organic matter. Because irrigation is constant, salinity buildup in the soil is a real long-term issue and needs periodic deep leaching.",
    water: "Virtually no natural rainfall — the garden is 100% dependent on irrigation, historically Colorado River water. Efficient drip systems and mulch aren't optional here.",
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
    soil: "Often decomposed granite or sandy loam with good natural drainage; moderate native fertility that responds well to compost.",
    water: "Dry summers require full irrigation, but lower humidity than the coast means less fungal disease pressure — good news for grapes and stone fruit.",
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
