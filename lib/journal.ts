export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string; // ISO date string
  readingTime: number; // minutes
  body: JournalSection[];
}

export type JournalSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'tip'; label: string; text: string };

export const articles: JournalArticle[] = [
  // ── JANUARY ────────────────────────────────────────────────────────────────

  {
    slug: 'guide-to-umhlanga-beach',
    title: "The Complete Guide to Umhlanga's Beaches",
    category: 'Local Guide',
    excerpt: "From the iconic lighthouse strand to the wild dunes of Bronze Beach, Umhlanga's coastline is as varied as it is beautiful. Here's everything you need to know before you go.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2023/08/1-3.jpg',
    publishedAt: '2026-01-08',
    readingTime: 6,
    body: [
      {
        type: 'p',
        text: "Umhlanga Rocks sits on the KwaZulu-Natal north coast, where the warm Indian Ocean meets a shoreline of golden sand, rocky outcrops, and coastal forest. In a stretch of just a few kilometres you can find the busy, well-patrolled main beach, the quieter bronze sands to the north, and the wild, undeveloped dunes beyond - each with a distinct character.",
      },
      {
        type: 'h2',
        text: 'Umhlanga Main Beach',
      },
      {
        type: 'p',
        text: "The most visited, and for good reason. Flanked by the iconic red-and-white lighthouse to the north and the Umhlanga promenade to the south, Main Beach is patrolled by lifeguards, netted against sharks, and backed by a wide lawn where families spread out under umbrellas. The ocean here is reliably warm from October through April, and the waves are gentle enough for young swimmers.",
      },
      {
        type: 'tip',
        label: 'Parking tip',
        text: "Arrive before 9 am in peak season to secure parking on Lagoon Drive. The multi-storey Chartwell Centre car park is a short walk and usually has space.",
      },
      {
        type: 'h2',
        text: 'Bronze Beach',
      },
      {
        type: 'p',
        text: "A kilometre north of the lighthouse, Bronze Beach feels like a different world. The sand is broader, the crowd thinner, and the coastal dune forest presses right up to the shore. The lagoon mouth - where the Ohlanga River meets the sea - creates a natural tidal pool popular with children. The surrounding nature reserve is the last patch of indigenous coastal forest on this stretch of coast.",
      },
      {
        type: 'p',
        text: "Several of our most popular apartments - Bronze Beach units 6, 11, 12, 19 and 26 - sit directly across from this beach, many with balcony views over the lagoon. It is a rare thing to wake up, open the sliding door, and see the sea before you have even made coffee.",
      },
      {
        type: 'h2',
        text: 'The Promenade',
      },
      {
        type: 'p',
        text: "Linking Umhlanga Main Beach to Lagoon Beach in the south is the 2.5 km promenade - flat, wide, and shaded in places by dune vegetation. Joggers use it at dawn; families stroll it at dusk; and in between, it is the social artery of Umhlanga. Stop for coffee at one of the kiosks and watch the tankers sitting on the horizon while dolphins cruise by.",
      },
      {
        type: 'h2',
        text: 'Swimming Safety',
      },
      {
        type: 'ul',
        items: [
          'Always swim between the flags on patrolled beaches.',
          'Main Beach and Lagoon Beach are shark-netted; Bronze Beach is not - check conditions with lifeguards before swimming.',
          'Rip currents can develop quickly after heavy rain - if in doubt, stay out.',
          'Jellyfish are occasional visitors; the red-flag system will warn you.',
        ],
      },
      {
        type: 'blockquote',
        text: '"The beach is the reason people come to Umhlanga once. The village is the reason they keep coming back."',
      },
      {
        type: 'h2',
        text: 'Best Time to Visit',
      },
      {
        type: 'p',
        text: "Water temperatures peak between January and March at around 25–27 °C - warm enough to stay in all afternoon. December and January are the busiest months; if you prefer the beach to yourself, consider visiting in late October or early November, when the weather is perfect and the school-holiday crowds have not yet arrived. Winter (June–August) brings clear skies, mild temperatures, and exceptional whale-watching - humpback and southern right whales pass close to shore on their annual migration.",
      },
    ],
  },

  {
    slug: 'umhlanga-family-holiday',
    title: "Why Umhlanga Is South Africa's Best Family Holiday Destination",
    category: 'Travel',
    excerpt: "Safe beaches, world-class shopping, the uShaka Marine World day-trip, and enough restaurants to keep everyone happy - Umhlanga has the complete family holiday formula.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2025/01/1-3.jpg',
    publishedAt: '2026-01-22',
    readingTime: 7,
    body: [
      {
        type: 'p',
        text: "South Africa is a big country with a lot of competing claims on your holiday time. So why do so many families return to Umhlanga, year after year, when they could be anywhere else? The answer is the same one it has always been: Umhlanga simply works.",
      },
      {
        type: 'h2',
        text: 'The Beach Factor',
      },
      {
        type: 'p',
        text: "Umhlanga Main Beach is one of the few beaches in South Africa that is both netted against sharks and patrolled by lifeguards every day of the week. That combination means parents can sit back and breathe while the children swim. The waves are manageable - big enough to be exciting, gentle enough to be safe for a six-year-old. The sand is clean. The walk from most of our properties is under ten minutes.",
      },
      {
        type: 'h2',
        text: 'Everything Is Within Reach',
      },
      {
        type: 'p',
        text: "Part of what makes Umhlanga so easy for families is the density of its offer. The Village - a few blocks of boutique shops, delis, and restaurants - is walkable from the beach. Gateway Theatre of Shopping, one of the largest malls in the southern hemisphere, is a five-minute drive. Durban itself, with uShaka Marine World and the Moses Mabhida Stadium, is 15 minutes along the N2.",
      },
      {
        type: 'tip',
        label: 'Day trip idea',
        text: "uShaka Marine World in Durban is a full day out - combine the aquarium in the morning with the water park after lunch. Book tickets online to skip the queues.",
      },
      {
        type: 'h2',
        text: 'Eating Well With Kids',
      },
      {
        type: 'p',
        text: "Umhlanga Village has an unusually high concentration of good restaurants for its size - and most of them are genuinely child-friendly rather than grudgingly so. La Bella, Ile Maurice, and Chez Nous line the main drag. For something more casual, the beachfront kiosks do toasted sandwiches and ice cream that are the stuff of childhood holiday memories.",
      },
      {
        type: 'h2',
        text: 'Choosing the Right Apartment',
      },
      {
        type: 'p',
        text: "For families, the choice of apartment matters as much as the destination. We recommend looking for units with at least two bathrooms, a washing machine (sand happens), a braai for those evenings when you do not want to go out, and - ideally - undercover parking. Our Sea Lodge apartments are perennial family favourites for their generous floor plans and direct beach access. The Shades offers a larger complex with a pool, which younger children particularly love.",
      },
      {
        type: 'ul',
        items: [
          'Beacon Rock 416 - 3 bedrooms, 3.5 bathrooms, sleeps 6, pool, secure parking.',
          'Stanley Grace - 4 bedrooms, 3 bathrooms, sleeps 8, private pool, braai, double garage.',
          'Sea Lodge - multiple units, steps from the beach, pool, great for extended families.',
          'The Shades - 8 different units available, complex pool, quiet side streets.',
        ],
      },
      {
        type: 'blockquote',
        text: "\"We've been coming to Umhlanga every December for twelve years. It is the place our children will bring their children.\"",
      },
      {
        type: 'h2',
        text: 'A Word on Timing',
      },
      {
        type: 'p',
        text: "School holidays in KwaZulu-Natal are peak season - prices reflect that and availability is limited. If you have flexibility, early December (before the 10th) or late January offers the same weather at lower rates and with fewer crowds on the beach. Book as far in advance as possible; our most popular apartments are reserved by August for the following Christmas.",
      },
    ],
  },

  // ── FEBRUARY ───────────────────────────────────────────────────────────────

  {
    slug: 'whale-watching-umhlanga',
    title: 'Whale Season in Umhlanga: What to Expect and Where to Watch',
    category: 'Wildlife',
    excerpt: "Between June and November, humpback and southern right whales pass within metres of the Umhlanga coast on their annual migration. No boat required.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2024/12/1-3.jpg',
    publishedAt: '2026-02-05',
    readingTime: 5,
    body: [
      {
        type: 'p',
        text: "There are very few coastal towns in the world where you can watch whales from the pavement, but Umhlanga is one of them. Every year from approximately June to November, the humpback and southern right whale populations pass along the KwaZulu-Natal coastline in one of nature's great migrations - and the Umhlanga headland and promenade are among the best shore-based viewing spots on the entire coast.",
      },
      {
        type: 'h2',
        text: 'The Migration',
      },
      {
        type: 'p',
        text: "Humpback whales travel north from Antarctica in late May and June, hugging the South African coastline as they head to warmer breeding waters off Mozambique. By August and September they begin moving south again - and this southward leg is when sightings are most frequent and most spectacular, as mothers travel with calves born during the winter breeding season. Southern right whales use different waters but are increasingly spotted off Umhlanga between August and October.",
      },
      {
        type: 'h2',
        text: 'Best Viewing Spots',
      },
      {
        type: 'ul',
        items: [
          'The Umhlanga lighthouse headland - elevated and exposed, with a wide view north and south.',
          'The upper terrace of the Breakers Resort - good elevation with an unobstructed horizon.',
          'The promenade itself - walk south from the lighthouse and scan the horizon.',
          'Any elevated apartment balcony facing the sea - our Bronze Beach and Sea Lodge units are ideal.',
        ],
      },
      {
        type: 'tip',
        label: 'Best viewing time',
        text: "Early morning, before the sea haze builds, gives the clearest sightlines. Bring binoculars - even when whales breach close to shore, the detail is far better with magnification.",
      },
      {
        type: 'h2',
        text: 'What You Might See',
      },
      {
        type: 'p',
        text: "Humpbacks are spectacular performers - breaching fully clear of the water, spy-hopping (raising their heads vertically), and fin-slapping. The sound of a humpback breach reaching the shore before the visual is a remarkable experience. Mothers with calves are more sedate, the calf often rolling and experimenting at the surface while the mother rests.",
      },
      {
        type: 'h2',
        text: 'Boat-Based Whale Watching',
      },
      {
        type: 'p',
        text: "For those who want to get closer, several operators run whale-watching charters from the Durban harbour, around 15 minutes south of Umhlanga. Trips run for approximately two hours and are operated in accordance with South Africa's whale-watching regulations, which specify minimum approach distances to avoid disturbing the animals. Booking in advance is essential in peak season (August–October).",
      },
      {
        type: 'blockquote',
        text: '"Watching a humpback breach from a balcony in the morning, coffee in hand - it is one of those moments where you remember why you came."',
      },
    ],
  },

  {
    slug: 'best-day-trips-from-umhlanga',
    title: 'The Best Day Trips from Umhlanga',
    category: 'Travel',
    excerpt: "Umhlanga makes an outstanding base for exploring the broader KwaZulu-Natal region. From Valley of a Thousand Hills to the Drakensberg foothills, here are the day trips worth planning.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2023/08/1-3.jpg',
    publishedAt: '2026-02-19',
    readingTime: 6,
    body: [
      {
        type: 'p',
        text: "One of the quiet pleasures of basing yourself in Umhlanga is how much of KwaZulu-Natal becomes accessible without the need to move accommodation. The N2 motorway connects you south to Durban in 15 minutes, the N3 inland opens up a different country entirely, and to the north the Dolphin Coast stretches through sugarcane and sea to the Zulu heartland. Here are the day trips our guests return to most.",
      },
      {
        type: 'h2',
        text: 'Durban City & uShaka Marine World',
      },
      {
        type: 'p',
        text: "The obvious first port of call. Durban's beachfront has been extensively redeveloped and is worth revisiting even if you know it from years past. uShaka Marine World on the Point is a world-class facility - the aquarium tunnels alone are worth the entrance fee, and the attached water park, Wet 'n Wild, is excellent for children. The Florida Road precinct handles lunch. Allow a full day.",
      },
      {
        type: 'tip',
        label: 'Practical note',
        text: "Parking on the Durban beachfront is managed and paid - arrive before 10 am on weekends. Alternatively, take an Uber from Umhlanga and avoid the problem entirely.",
      },
      {
        type: 'h2',
        text: "Valley of a Thousand Hills",
      },
      {
        type: 'p',
        text: "Forty minutes inland, the Valley of a Thousand Hills is one of the most dramatic landscapes in KwaZulu-Natal - a corrugated series of green valleys running down to the Mngeni River, dotted with traditional Zulu homesteads and craft markets. The Rob Roy Hotel sits on a ridge with views that make lunch feel like an event. The Phezulu Safari Park offers a structured introduction to Zulu culture and a small reptile park that children find compelling.",
      },
      {
        type: 'h2',
        text: 'Ballito & The Dolphin Coast',
      },
      {
        type: 'p',
        text: "Head north on the N2 and within 40 minutes you are in Ballito - a smaller, quieter coastal town that feels a generation removed from Umhlanga's pace. The Shelly Beach tidal pools are exceptional for snorkelling. The Salt Rock Hotel has a beachfront bar that is worth the drive. Continue north to Blythedale for long, empty beach and a fish-and-chips lunch at the caravan park stall that has been there since the 1980s.",
      },
      {
        type: 'h2',
        text: 'Midlands Meander',
      },
      {
        type: 'p',
        text: "At around 90 minutes each way, the Midlands Meander is the full-day option. The route winds through the KwaZulu-Natal midlands between Pietermaritzburg and Mooi River, passing farmstalls, craft galleries, cheese producers, and trout fishing lodges. The air is noticeably cooler than the coast - bring a layer. Nottingham Road's cluster of pubs and restaurants make a natural midpoint. It is worth doing in the dry winter months when the landscape has a golden clarity.",
      },
      {
        type: 'h2',
        text: 'iSimangaliso Wetland Park',
      },
      {
        type: 'p',
        text: "Two and a half hours north, iSimangaliso is a UNESCO World Heritage Site and one of the most diverse ecosystems on the African continent - where hippos share the lake shore with crocodiles, whale sharks cruise the Indian Ocean, and leatherback turtles nest on the beaches at night. St Lucia is the gateway town and makes a worthwhile overnight if you want to do the park justice, but a day trip - leaving Umhlanga at 6 am and returning by 7 pm - is achievable and spectacular.",
      },
      {
        type: 'blockquote',
        text: '"We went to iSimangaliso for the day and couldn\'t believe what we\'d been missing an hour and a half up the road."',
      },
    ],
  },

  // ── MARCH ──────────────────────────────────────────────────────────────────

  {
    slug: 'umhlanga-dining-guide',
    title: "Where to Eat in Umhlanga: A Local's Dining Guide",
    category: 'Food & Drink',
    excerpt: "From sunset cocktails on the beachfront to long lunches in the village, Umhlanga punches well above its weight in the dining department.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2025/02/DSC_8980-Edit.jpg',
    publishedAt: '2026-03-05',
    readingTime: 6,
    body: [
      {
        type: 'p',
        text: "For a town of its size, Umhlanga has an extraordinary concentration of good restaurants. The village strip - McCausland Crescent and Chartwell Drive - is lined with options that would hold their own in any major city, and the beachfront adds a layer of atmosphere that no amount of interior design can replicate.",
      },
      {
        type: 'h2',
        text: 'The Village Strip',
      },
      {
        type: 'p',
        text: "Umhlanga Village is compact enough to walk end to end in ten minutes - which makes it easy to stroll and see what takes your fancy. The anchor restaurants here have been fixtures for decades: Ile Maurice does Mauritian seafood with an elegance that has made it one of the most consistently booked restaurants in KwaZulu-Natal. Chez Nous brings a European bistro sensibility to the South African coast. La Bella is the choice for long, convivial Italian dinners that stretch into the night.",
      },
      {
        type: 'h2',
        text: 'Beachfront and Sunset Drinks',
      },
      {
        type: 'p',
        text: "The Umhlanga beachfront is not as built up as some resort towns - which is a good thing. The Breakers Resort has a bar with an open deck facing the ocean, and the sunsets here in winter are extraordinary. For more casual drinks, the kiosks along the promenade do cold drinks and beer in an atmosphere that needs no embellishment.",
      },
      {
        type: 'h2',
        text: 'Breakfast',
      },
      {
        type: 'p',
        text: "Breakfast in Umhlanga is a ritual taken seriously. Remo's on Chartwell Drive is the long-standing favourite - arrive early on weekends or expect a wait. The more recently arrived Café de la Plage pitches slightly more formally but does excellent eggs. If you are self-catering, the Woolworths Food at the Chartwell Centre does a remarkable selection of prepared breakfast foods and fresh pastries.",
      },
      {
        type: 'tip',
        label: 'Local tip',
        text: "Make dinner reservations, particularly for Friday and Saturday evenings in peak season. Even mid-sized restaurants fill up quickly, and Umhlanga has limited walk-in capacity at the popular spots.",
      },
      {
        type: 'h2',
        text: 'Seafood',
      },
      {
        type: 'p',
        text: "You are on the Indian Ocean - eat seafood. The crayfish (spiny lobster) is caught locally when in season. Grilled linefish - kingklip, yellowtail, dorado - is ubiquitous and excellent. For the full seafood experience, Ile Maurice does a magnificent plateau de fruits de mer that is worth planning an evening around.",
      },
      {
        type: 'h2',
        text: 'Self-Catering',
      },
      {
        type: 'p',
        text: "One of the great advantages of staying in a self-catering apartment is being able to braai. Almost all our properties have braai facilities, and the combination of fresh seafood from the local fish shops with a coastal evening breeze and a good South African red is hard to beat. The Chartwell Centre Pick n Pay and the Village's deli options make provisioning easy.",
      },
    ],
  },

  {
    slug: 'umhlanga-in-autumn',
    title: "Umhlanga in Autumn: The Quiet Season That Surprises Everyone",
    category: 'Travel',
    excerpt: "March to May is Umhlanga's best-kept secret. The summer crowds have gone, the sea is still warm, the restaurants are easy to book, and the light is extraordinary.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2024/12/1-3.jpg',
    publishedAt: '2026-03-19',
    readingTime: 5,
    body: [
      {
        type: 'p',
        text: "Every year, the January school holiday crowd departs, and Umhlanga exhales. The beach stretches out again. The restaurant queues disappear. Parking on Lagoon Drive becomes a non-event. And the weather - warm, clear, and mercifully less humid than the peak summer months - settles into something close to perfect. This is the quiet season, and it is when many of us who live here most enjoy our town.",
      },
      {
        type: 'h2',
        text: 'The Weather',
      },
      {
        type: 'p',
        text: "KwaZulu-Natal's subtropical climate means autumn here bears no resemblance to the season further south. March temperatures average 26–28 °C during the day and drop to a comfortable 18–20 °C overnight. April and May follow similar patterns - warm enough for the beach, cool enough to sleep without air conditioning. The sea temperature, which lags slightly behind the air, stays above 24 °C through April. The heavy afternoon thunderstorms of summer become less frequent, giving way to long, clear evenings.",
      },
      {
        type: 'h2',
        text: 'The Beach Without the Crowds',
      },
      {
        type: 'p',
        text: "In January, Main Beach is shoulder-to-shoulder. In March, you can lay your towel anywhere you please and walk the promenade at 5 pm without negotiating pedestrian traffic. The water is calm - the swells that can make December and January challenging for young swimmers tend to moderate in autumn - and visibility for snorkelling around the rocky headlands improves as the seas settle.",
      },
      {
        type: 'tip',
        label: 'For photographers',
        text: "The autumn light in Umhlanga - particularly in the late afternoon - is soft, warm, and remarkable. The lighthouse at golden hour, the promenade at dusk: these are photographs worth making an effort for.",
      },
      {
        type: 'h2',
        text: 'Value for Money',
      },
      {
        type: 'p',
        text: "Off-peak rates across our properties are significantly lower than the December–January peak. The same beachfront apartment that commands a premium in summer can be remarkably affordable in April. There are no hidden trade-offs - the beaches are open, the restaurants are operating, the shops are all there. The only thing missing is the crowds.",
      },
      {
        type: 'h2',
        text: 'What to Do',
      },
      {
        type: 'ul',
        items: [
          'Long morning walks along the promenade before the day heats up.',
          'Snorkelling around the lighthouse point - visibility is best in settled autumn conditions.',
          'A day trip to the Valley of a Thousand Hills, which turns golden-green in autumn.',
          'Dinner reservations without a wait - book the restaurants you could not get into in January.',
          'The Midlands Meander, where farmstalls come into their own in the cooler inland air.',
        ],
      },
      {
        type: 'blockquote',
        text: '"We started coming in April three years ago after a friend recommended it. We have not booked a December week since."',
      },
      {
        type: 'p',
        text: "If you have the flexibility to choose when you visit, autumn in Umhlanga is our honest recommendation. It is the same place - just quieter, cheaper, and in many ways more itself.",
      },
    ],
  },

  // ── APRIL ──────────────────────────────────────────────────────────────────

  {
    slug: 'what-to-pack-for-umhlanga',
    title: 'What to Pack for an Umhlanga Holiday',
    category: 'Travel Tips',
    excerpt: "Packing for a coastal holiday should be simple - but a few overlooked items can make the difference between a good trip and a great one.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2024/09/1a-1.jpg',
    publishedAt: '2026-04-02',
    readingTime: 4,
    body: [
      {
        type: 'p',
        text: "Umhlanga's climate is subtropical - warm and humid in summer, mild in winter. Packing for a self-catering apartment holiday here requires less than you think for clothing and more than you think for the beach.",
      },
      {
        type: 'h2',
        text: 'Beach Essentials',
      },
      {
        type: 'ul',
        items: [
          'High-factor reef-safe sunscreen - the KwaZulu-Natal sun is intense year-round.',
          'Rash vest or long-sleeve swim top - particularly for children who spend long periods in the water.',
          'Beach umbrella - the sand can get hot and afternoon sun in summer is fierce.',
          'Microfibre towels - they dry faster than cotton and take up less space.',
          'Waterproof dry bag for phones, keys, and wallets.',
        ],
      },
      {
        type: 'h2',
        text: 'Clothing',
      },
      {
        type: 'p',
        text: "Summer (October–April): light cotton and linen, swimwear, sandals. One smart-casual outfit for nicer restaurants. A light waterproof layer - Umhlanga gets intense afternoon thunderstorms in summer that pass quickly but drench everything.",
      },
      {
        type: 'p',
        text: "Winter (May–September): the days are typically clear and warm (22–26 °C), but evenings drop. A fleece and a light down jacket are useful. One pair of closed shoes for cool evenings in the village.",
      },
      {
        type: 'h2',
        text: 'For the Apartment',
      },
      {
        type: 'p',
        text: "Our apartments are fully equipped with linen, towels, kitchen equipment, and basic pantry staples. You do not need to bring anything for the kitchen beyond personal preferences - good coffee, specific spices, your preferred wine. If you are planning to braai, most apartments have the equipment; you will just need to purchase charcoal or wood from the local supermarkets.",
      },
      {
        type: 'tip',
        label: 'Tip',
        text: "All our apartments have washing machines. Pack for a week even if you are staying for two - do laundry and repack. It keeps luggage manageable and leaves space for things you want to bring home.",
      },
      {
        type: 'h2',
        text: 'Things People Forget',
      },
      {
        type: 'ul',
        items: [
          'After-sun lotion - you will want it.',
          'Insect repellent for evenings on the balcony.',
          'A power bank - long beach days mean low phone batteries.',
          'Binoculars - for whale season (June–November) and dolphin spotting year-round.',
          'A good book - Umhlanga rewards those who are prepared to slow down.',
        ],
      },
    ],
  },

  {
    slug: 'gateway-shopping-guide',
    title: "Inside Gateway: Umhlanga's World-Class Shopping Mall",
    category: 'Local Guide',
    excerpt: "Over 300 stores, South Africa's largest IMAX screen, a wave pool, and a farmers' market on weekends - Gateway Theatre of Shopping is a destination in itself.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2023/03/20230315_104252-scaled.jpg',
    publishedAt: '2026-04-16',
    readingTime: 5,
    body: [
      {
        type: 'p',
        text: "Gateway Theatre of Shopping has been the anchor of Umhlanga's retail scene since it opened in 2001. With over 300 stores across 150,000 m² of retail space, it is consistently ranked as one of the top five malls in South Africa - and for visitors staying in Umhlanga, it is close enough to be a genuine convenience rather than a detour.",
      },
      {
        type: 'h2',
        text: 'Getting There',
      },
      {
        type: 'p',
        text: "Gateway is a five-minute drive from Umhlanga Village, and most of our apartments have undercover parking - so you can drive, park, and walk back without worry. There is also a regular shuttle service from the Village in peak season. The mall is open seven days a week, 09:00–21:00.",
      },
      {
        type: 'h2',
        text: 'Shopping',
      },
      {
        type: 'p',
        text: "The retail mix covers everything from high-street anchors (Woolworths, Edgars, Checkers) to local designers and international brands. The top-floor lifestyle section has a concentration of homeware and décor stores worth browsing even if you are not buying. For groceries and deli supplies, the Woolworths Food on the ground floor is excellent.",
      },
      {
        type: 'h2',
        text: 'Entertainment',
      },
      {
        type: 'ul',
        items: [
          "Nu Metro IMAX - South Africa's largest IMAX screen. Book ahead for new releases.",
          'Wave House - a standing wave machine and the only FlowRider in Africa, plus a leisure pool.',
          'Skate rink - open most evenings and weekends.',
          'Games arcade - a reliable wet-day fallback for older children.',
        ],
      },
      {
        type: 'h2',
        text: 'Eating at Gateway',
      },
      {
        type: 'p',
        text: "The food court covers the usual fast-food circuit, but the dedicated restaurant zone on the first floor is a cut above - Primi Piatti, Spur, and a rotating selection of local restaurants compete for the lunchtime trade. For a proper sit-down meal, Spiga d'Oro consistently does well. If the queue is long, the courtyard restaurants outside the main entrance are often quieter and equally good.",
      },
      {
        type: 'tip',
        label: 'Weekend market',
        text: "The Gateway Craft Market runs on most Saturday and Sunday mornings on the lower deck facing the N2. Local food, handmade crafts, and a good excuse to get out early.",
      },
      {
        type: 'h2',
        text: 'Practical Notes',
      },
      {
        type: 'p',
        text: "Parking at Gateway is free and plentiful - but in peak season, the upper decks fill quickly. The lower-level parking off the N2 offramp is usually easier. The mall has a dedicated taxi rank and Uber drop-off zone at the main entrance. Most major retailers have a returns desk if you need to exchange beach holiday purchases.",
      },
    ],
  },

  // ── MAY ────────────────────────────────────────────────────────────────────

  {
    slug: 'umhlanga-village-neighbourhood-guide',
    title: 'The Umhlanga Village Guide: Walking, Coffee & Evening Strolls',
    category: 'Local Guide',
    excerpt: "Compact, walkable, and full of character - Umhlanga Village is the kind of neighbourhood that reveals itself slowly. Here is how to make the most of it.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2023/08/1-3.jpg',
    publishedAt: '2026-05-07',
    readingTime: 5,
    body: [
      {
        type: 'p',
        text: "Umhlanga Village is not large. You can walk from one end to the other in ten minutes without breaking a sweat. But within that small footprint sits a neighbourhood of real quality - a tight grid of tree-lined streets where good coffee, independent shops, and the Indian Ocean are all within easy reach of one another. It is one of the things our guests consistently mention: the walkability. You do not need a car here.",
      },
      {
        type: 'h2',
        text: 'The Morning Walk',
      },
      {
        type: 'p',
        text: "Start at the top of Chartwell Drive and walk toward the sea. The light in the morning comes in at a low angle off the water and turns the street golden. Stop at Remo's or Café de la Plage for coffee and something to eat - the wait on weekends is worth it. Then continue down to the beachfront and turn right along the promenade. The 2.5 km walk to Lagoon Beach and back is a near-perfect morning: flat, sea-facing, and usually accompanied by dolphins.",
      },
      {
        type: 'h2',
        text: 'The Village Shops',
      },
      {
        type: 'p',
        text: "The retail offer in the Village skews toward independent boutiques and lifestyle stores rather than chain retail - which is what gives it character. There are surf shops, homeware stores with a coastal sensibility, and several galleries representing local KwaZulu-Natal artists. The Chartwell Centre, just back from the main strip, has a Pick n Pay and a Woolworths Food for self-catering provisions, plus a pharmacy and a good deli counter.",
      },
      {
        type: 'h2',
        text: 'The Evening Ritual',
      },
      {
        type: 'p',
        text: "In the late afternoon, the Village comes alive in a particular way. Families walk back from the beach. Restaurants open and put their tables out. The quality of the light - warm and horizontal - is the best it gets all day. This is when Umhlanga most resembles a European coastal village: people are unhurried, well-fed, and glad to be where they are. A drink on the terrace at the Breakers, or a table at Ile Maurice for sunset, are both worth the evening.",
      },
      {
        type: 'tip',
        label: 'Hidden gem',
        text: "The path behind the lighthouse, heading north along the coastal forest edge, is almost unknown to visitors. It is a five-minute walk from the main beach and feels like a different world - indigenous forest, bird life, and the ocean below.",
      },
      {
        type: 'h2',
        text: 'Getting Around Without a Car',
      },
      {
        type: 'p',
        text: "Most of our properties are within a ten-minute walk of the beach, the Village restaurants, and the Chartwell Centre. For Gateway, a five-minute Uber is the obvious choice. For Durban, the N2 is fast and Ubers are readily available from Umhlanga. If you are spending most of your time in the Village - which is the right choice - you genuinely do not need a car for the duration of your stay.",
      },
      {
        type: 'blockquote',
        text: '"We left the car keys in the apartment for the first three days and barely noticed. Everything is just there."',
      },
    ],
  },

  {
    slug: 'choosing-the-right-self-catering-apartment',
    title: 'How to Choose the Right Self-Catering Apartment in Umhlanga',
    category: 'Travel Tips',
    excerpt: "Not all apartments are equal - and the difference between a good one and a great one often comes down to a handful of details. Here is what to look for before you book.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2024/09/1a-1.jpg',
    publishedAt: '2026-05-21',
    readingTime: 6,
    body: [
      {
        type: 'p',
        text: "We have been placing guests in Umhlanga self-catering apartments since 1988 - and in that time we have learned, often through the feedback of returning guests, exactly what makes the difference between a good stay and a great one. The view matters. The kitchen matters. The parking matters more than almost anyone anticipates. Here is the framework we give to guests who are not sure where to start.",
      },
      {
        type: 'h2',
        text: 'Location: Proximity vs Quietness',
      },
      {
        type: 'p',
        text: "The beachfront apartments - Sea Lodge, Bronze Beach, our various lighthouse-adjacent units - offer the obvious advantage of a sea view and a short walk to the sand. But they also sit on the busier roads. The quieter side streets off Chartwell Drive and in the Umhlanga residential belt are a two-minute walk from the same beach, significantly calmer, and often better value. For families with young children, proximity wins. For couples and smaller groups, the quieter options are worth considering.",
      },
      {
        type: 'h2',
        text: 'Bedrooms and Bathrooms',
      },
      {
        type: 'p',
        text: "The golden rule for families: as many bathrooms as possible. A party of six sharing one bathroom is a different holiday to the same party sharing three. Our larger properties - Beacon Rock 416, Stanley Grace, Umhlanga Mansions - are specifically configured for families and groups who need space to spread out. For couples or small groups, a compact but well-appointed one or two-bedroom unit often provides a better experience than a larger apartment that is half-empty.",
      },
      {
        type: 'h2',
        text: 'The Kitchen',
      },
      {
        type: 'p',
        text: "Self-catering means different things to different people. Some guests want the option to cook breakfast and braai dinner; others want a fully equipped kitchen for daily cooking. Check whether the kitchen has a gas hob (better for braaing and cooking) or electric, whether there is a dishwasher if that matters to you, and - for longer stays - whether the apartment has a chest freezer for bulk shopping. All our properties are fully stocked with cookware, crockery, and utensils.",
      },
      {
        type: 'tip',
        label: 'Braai checklist',
        text: "Most apartments have a built-in braai or a Weber on the balcony. Confirm this at booking if it is important to you - and remember to pick up charcoal or wood from Pick n Pay before you arrive. The village stores often run low on busy summer weekends.",
      },
      {
        type: 'h2',
        text: 'Parking',
      },
      {
        type: 'p',
        text: "In peak season, street parking in Umhlanga is genuinely difficult. An apartment with a garage or undercover bay removes this stress entirely. If you are arriving on a December weekend, the difference between having allocated parking and not is significant. We flag parking arrangements clearly for every property - always check this detail before you book.",
      },
      {
        type: 'h2',
        text: 'Pools and Shared Facilities',
      },
      {
        type: 'p',
        text: "A pool makes a meaningful difference to a holiday with children - it gives younger guests a safe, supervised option when they are not ready for the sea. Complex pools tend to be heated and calmer than the ocean, which extends the swimming day. The Shades, Sea Lodge, and Beacon Rock all have excellent pool facilities. For guests without children, pool access is a pleasant addition but rarely the deciding factor.",
      },
      {
        type: 'h2',
        text: 'Asking the Right Questions',
      },
      {
        type: 'ul',
        items: [
          'Is there air conditioning in the bedrooms? (Summer nights can be warm and humid.)',
          'Is the Wi-Fi fibre or ADSL? (Increasingly matters for working guests.)',
          'How far is the walk to the beach - and is it flat?',
          'Is there a washing machine? (Essential for stays of more than five days.)',
          'What is the check-in process, and is there 24-hour contact available?',
        ],
      },
      {
        type: 'p',
        text: "We know every property we manage personally - and if you are not sure which one is right for your group, get in touch. Matching the right apartment to the right guests is something we have been doing for a long time, and it is one of the things we do best.",
      },
      {
        type: 'blockquote',
        text: '"We called to ask which apartment suited us best. They asked three questions, recommended one option, and it was perfect. We have gone back to the same unit three times."',
      },
    ],
  },

  {
    slug: 'new-year-getaway-umhlanga',
    title: 'Start the Year Right: New Year Getaways in Umhlanga',
    category: 'Travel',
    excerpt: "January is one of the best-kept secrets on the KZN coast. The crowds have thinned, the ocean is at its warmest, and Umhlanga slips back into its easy, unhurried rhythm. Here is how to make the most of it.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2023/08/1-3.jpg',
    publishedAt: '2026-01-10',
    readingTime: 5,
    body: [
      {
        type: 'p',
        text: "The festive rush is over. The family has scattered back to Johannesburg and Pretoria. And Umhlanga, for a brief and glorious few weeks, belongs to the people who know to come in January. Water temperatures hover around 26–27 °C. The beach is wide and clean. Restaurants are no longer taking three-hour waits. This is the Umhlanga most visitors never see — and it is worth coming for.",
      },
      {
        type: 'h2',
        text: 'Why January Beats December',
      },
      {
        type: 'p',
        text: "December in Umhlanga is spectacular — and it shows. Every apartment is full, every parking bay is taken, and the promenade is shoulder-to-shoulder from sunrise to sunset. By the second week of January, the school-holiday crowd has largely gone home, rates drop, and availability opens up. The weather, if anything, improves: slightly fewer storms, longer clear days, and that deep summer warmth that makes even doing nothing feel like an achievement.",
      },
      {
        type: 'tip',
        label: 'Best value window',
        text: "Book between 10–31 January for the best combination of availability, lower rates, and uncrowded beaches. Most schools return in the third week of January, which is when things quiet down fastest.",
      },
      {
        type: 'h2',
        text: 'Set Intentions, Not Alarms',
      },
      {
        type: 'p',
        text: "A January Umhlanga break works best when it is unstructured. Sleep past seven. Walk the promenade before the heat builds. Swim, dry off, swim again. Spend an afternoon on the balcony doing absolutely nothing in particular. The point is not to see everything — it is to decompress properly before the year begins in earnest.",
      },
      {
        type: 'h2',
        text: 'A Few Things Worth Doing',
      },
      {
        type: 'ul',
        items: [
          'Sunrise walk to the lighthouse — the beach is yours at 6 am.',
          'Breakfast at one of the village cafés; January queues are short.',
          'An afternoon at Bronze Beach lagoon, especially good for young children.',
          'Dinner at any of the beachfront restaurants without a reservation — a January luxury.',
          'A day trip to Ballito (30 minutes north) for a change of scenery and excellent seafood.',
        ],
      },
      {
        type: 'h2',
        text: 'Choosing the Right Apartment',
      },
      {
        type: 'p',
        text: "January is a good time to go for something you might not stretch to in peak season. With rates lower and availability better, it is easier to secure a sea-facing unit or a property with a private braai. If you have been eyeing one of the larger apartments — something with three bedrooms and a full ocean view — January is when it becomes realistic.",
      },
      {
        type: 'blockquote',
        text: '"January in Umhlanga is the reward for everyone who had somewhere else to be in December."',
      },
    ],
  },

  {
    slug: 'winter-in-umhlanga',
    title: "Winter in Umhlanga: Why the Off-Season Is Worth It",
    category: 'Local Guide',
    excerpt: "Mild temperatures, empty beaches, whale sightings from the shore, and the best restaurant availability of the year — Umhlanga in winter is a different experience, and a quietly brilliant one.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2025/01/1-3.jpg',
    publishedAt: '2026-06-01',
    readingTime: 6,
    body: [
      {
        type: 'p',
        text: "Most people think of Umhlanga as a summer destination. They are not wrong — but they are missing something. Winter on the KwaZulu-Natal north coast is unlike winter almost anywhere else in South Africa. The days are clear and sunny. Temperatures sit in the low-to-mid twenties. The sea, though cooler than in summer, is still swimmable for those with a reasonable cold tolerance. And the town, freed from the school-holiday crowds, becomes a genuinely pleasant place to move through at your own pace.",
      },
      {
        type: 'h2',
        text: 'The Weather',
      },
      {
        type: 'p',
        text: "Umhlanga's winter (June through August) is characterised by dry, clear days and cool nights. Daytime highs typically reach 20–24 °C — warm enough for the beach, comfortable enough for walking. The humidity that makes summer afternoons heavy is gone. Rain is rare. If you are coming from the Highveld, where winter means frost and brown grass and grey skies, arriving in Umhlanga in July feels like being let out early.",
      },
      {
        type: 'tip',
        label: 'Packing note',
        text: "Bring a light jacket or fleece for evenings — sea breezes can be cool after dark. Days, however, are comfortably t-shirt weather in most years.",
      },
      {
        type: 'h2',
        text: 'Whale Season',
      },
      {
        type: 'p',
        text: "This is the real headline. Between June and November, humpback whales migrate northward past Umhlanga on their way to their breeding grounds, then return south from August onwards. On a calm winter morning, it is not unusual to spot spouts and breaches from the beach, or even from a high-floor apartment balcony. The whales often pass surprisingly close to shore.",
      },
      {
        type: 'p',
        text: "For those who want to get closer, several operators run whale-watching charters from the Durban harbour. Trips run for approximately two hours and are conducted in accordance with South Africa's whale-watching regulations, which specify minimum approach distances to avoid disturbing the animals. Booking in advance is recommended.",
      },
      {
        type: 'h2',
        text: 'The Town Without the Crowds',
      },
      {
        type: 'p',
        text: "Winter Umhlanga is unhurried in a way that summer never quite manages. Tables at good restaurants are available without a week's notice. Parking on the beachfront is straightforward. The promenade in the early morning is yours, more or less, apart from the regular joggers and the occasional dog-walker. It is easier to appreciate the architecture of the village, the quality of the light, the sound of the sea — when you are not navigating around a crowd.",
      },
      {
        type: 'h2',
        text: 'What to Do in Winter',
      },
      {
        type: 'ul',
        items: [
          'Whale watching from the beach or the lighthouse point — peak season is July to October.',
          'Long lunches at beachfront restaurants — no queue, no rush.',
          'Walking the full promenade from Lagoon Beach to Bronze Beach without breaking a sweat.',
          'Gateway Theatre of Shopping for an afternoon — fully enclosed, great for a cooler day.',
          'Exploring the Village on foot — the boutiques and coffee shops are far more accessible off-season.',
        ],
      },
      {
        type: 'h2',
        text: 'Rates and Availability',
      },
      {
        type: 'p',
        text: "Low-season rates apply across most of our properties from June through July, making it the most affordable time of year to stay in Umhlanga. Properties that are frequently booked solid in December — particularly our larger sea-facing apartments — are often available at short notice in winter. If you have been considering a longer stay, a two- or three-week winter break is both practical and well-priced.",
      },
      {
        type: 'blockquote',
        text: '"I have come in December three times and in June twice. June wins, every time. The town is yours."',
      },
    ],
  },

  // ── JUNE ───────────────────────────────────────────────────────────────────

  {
    slug: 'whale-watching-umhlanga',
    title: 'Whale Watching in Umhlanga: Your Winter Guide',
    category: 'Local Guide',
    excerpt: "Every June, humpback whales begin passing the KwaZulu-Natal coast on their northward migration — and Umhlanga is one of the best places in South Africa to watch them from the shore.",
    coverImage: 'https://pub-c515ece99fde425db8502f06def905f9.r2.dev/wp-content/uploads/2025/01/1-3.jpg',
    publishedAt: '2026-06-23',
    readingTime: 5,
    body: [
      {
        type: 'p',
        text: "Each year between June and November, humpback whales migrate northward along the KwaZulu-Natal coastline on their way to warmer breeding grounds — and then return south again in the months that follow. The KZN coast sits directly in their path, and from Umhlanga's elevated promenade and sea-facing balconies, sightings are a near-daily occurrence at the peak of the season.",
      },
      {
        type: 'h2',
        text: 'When to Look',
      },
      {
        type: 'p',
        text: "The northward migration runs from June through August — this is when you are most likely to spot humpbacks close to shore, sometimes in groups, occasionally breaching. The southward return from September through November brings mothers with calves. Both phases are worth watching, but the June–August window tends to produce the most dramatic sightings.",
      },
      {
        type: 'tip',
        label: 'Best time of day',
        text: 'Early morning on a calm day gives the clearest viewing conditions. The sea surface is flatter, the light is good, and whales are often more active. Bring binoculars — sightings can be as close as a few hundred metres.',
      },
      {
        type: 'h2',
        text: 'Where to Watch From',
      },
      {
        type: 'ul',
        items: [
          'The Umhlanga promenade — elevated above the shore and stretching 2.5 km, it gives an unobstructed view of the ocean. Walk slowly and scan the horizon.',
          'The lighthouse headland — the rocky point at the north end of Main Beach offers height and a wide field of view.',
          'Bronze Beach — quieter and further north, with an open horizon and fewer people to look past.',
          'Your apartment balcony — any sea-facing upper-floor apartment is well-positioned. Humpbacks are large enough to spot without binoculars when they breach.',
        ],
      },
      {
        type: 'h2',
        text: 'What You Might See',
      },
      {
        type: 'p',
        text: "Humpback whales are the most commonly sighted species along this stretch of coast, recognisable by their long pectoral fins and habit of breaching — launching their full body clear of the water. Southern right whales are also occasionally spotted, identifiable by the callosities on their heads and the absence of a dorsal fin. Dolphins are a year-round presence and will often appear in the same area.",
      },
      {
        type: 'blockquote',
        text: '"We watched three humpbacks from the balcony for nearly an hour. It was completely unexpected and entirely unforgettable."',
      },
      {
        type: 'h2',
        text: 'Boat-Based Whale Watching',
      },
      {
        type: 'p',
        text: "For a closer encounter, several operators run whale-watching boat trips from Durban harbour, approximately 20 minutes south of Umhlanga. These trips go out specifically to find and follow the whales at a respectful distance, and on a good day you can be within metres of an animal the length of a bus. Trips typically run two to three hours — worth booking a day or two in advance during peak season.",
      },
      {
        type: 'tip',
        label: 'No trip needed',
        text: "Shore-based sightings from Umhlanga are genuinely common in winter. Before booking a boat trip, spend a morning on the promenade — you may not need to go any further.",
      },
      {
        type: 'h2',
        text: 'Winter Is Worth It',
      },
      {
        type: 'p',
        text: "Whale season coincides with Umhlanga's best winter weather — clear skies, low humidity, and temperatures in the low-to-mid twenties. The beaches are quieter, the restaurants are easier to get into, and low-season rates apply across most of our properties. If you have been considering a winter stay, this is the reason to book it.",
      },
    ],
  },

];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(current: JournalArticle, count = 3): JournalArticle[] {
  return articles.filter((a) => a.slug !== current.slug).slice(0, count);
}
