export type AttractionCategory =
  | 'Beach & Nature'
  | 'Shopping'
  | 'Entertainment'
  | 'Recreation'
  | 'Day Trips';

export interface Attraction {
  id: string;
  name: string;
  category: AttractionCategory;
  description: string;
  distance: string;
  driveTime: string;
  openingHours?: string;
  entryFee?: string;
  highlight: string;
  image: string;
  featured?: boolean;
}

export const attractions: Attraction[] = [

  // ─── BEACH & NATURE ──────────────────────────────────────────
  {
    id: 'umhlanga-main-beach',
    name: 'Umhlanga Main Beach',
    category: 'Beach & Nature',
    description:
      'A pristine Blue Flag beach on the warm Indian Ocean, famous for safe swimming, consistent surf, and the iconic candy-striped pier. Body-boarders, kite-surfers, and families share the break while lifeguards patrol year-round. The 3 km promenade runs the full length of the beach and connects to the village restaurants and the lighthouse.',
    distance: 'On your doorstep',
    driveTime: '0 min',
    openingHours: 'Open 24 hours; lifeguards on duty approx 08:00–17:00',
    entryFee: 'Free',
    highlight: 'Blue Flag status, warm Indian Ocean water, and one of the most photographed piers in the world.',
    image: '/images/hero/beach-lighthouse.jpg',
    featured: true,
  },
  {
    id: 'umhlanga-lighthouse',
    name: 'Umhlanga Lighthouse',
    category: 'Beach & Nature',
    description:
      'Built in 1954, the striking red-and-white striped lighthouse stands at the northern end of the promenade and is one of KwaZulu-Natal\'s most photographed landmarks. At night its revolving beam is visible nearly 30 miles out to sea. The headland around it offers the best elevated vantage point for whale watching from June to November.',
    distance: 'Central Umhlanga',
    driveTime: '2 min walk',
    openingHours: 'Exterior viewable 24 hours',
    entryFee: 'Free',
    highlight: 'The most photographed structure in Umhlanga - and the best whale-watching vantage point on the coast.',
    image: '/images/hero/lighthouse-night.jpg',
  },
  {
    id: 'lagoon-nature-reserve',
    name: 'Umhlanga Lagoon Nature Reserve',
    category: 'Beach & Nature',
    description:
      'A 26-hectare coastal wilderness at the mouth of the Ohlange River, accessible from the northern end of the promenade. A wheelchair-friendly boardwalk constructed from recycled plastic winds through ancient dune forest, across the lagoon, and out to the beach. The reserve shelters birdlife, small antelope, butterflies, and vervet monkeys - and the Forest Café at the exit does excellent coffee.',
    distance: 'Northern tip of the promenade',
    driveTime: '5 min walk',
    openingHours: 'Sunrise to sunset daily',
    entryFee: 'Free',
    highlight: 'A pocket of pristine dune forest right inside the village - free, family-friendly, 30–45 minute circular walk.',
    image: '/images/things-to-do/lagoon-reserve.png',
  },

  // ─── SHOPPING ────────────────────────────────────────────────
  {
    id: 'gateway',
    name: 'Gateway Theatre of Shopping',
    category: 'Shopping',
    description:
      'One of the largest malls in the Southern Hemisphere with over 300 stores, 60+ restaurants, a 16-screen cinema, South Africa\'s largest wave pool (Wavehouse), an indoor skating rink, a climbing wall, and Africa\'s biggest skate park. Gateway is as much an entertainment resort as a shopping destination - easily a full day out.',
    distance: '4 km from the beachfront',
    driveTime: '7 min',
    openingHours: 'Mon–Thu 09:00–19:00 | Fri–Sat 09:00–21:00 | Sun 09:00–18:00',
    entryFee: 'Free entry; individual attractions priced separately',
    highlight: 'The Wavehouse surf pool is the only standing-wave FlowRider in Africa.',
    image: '/images/things-to-do/gateway.png',
    featured: true,
  },
  {
    id: 'la-lucia-mall',
    name: 'La Lucia Mall',
    category: 'Shopping',
    description:
      'An upmarket boutique mall 5 minutes from the beachfront with over 120 retailers - L\'Occitane, Pandora, Le Creuset, Havainas, and Sunglass Hut alongside Woolworths and Edgars. Four padel courts, curated dining, and a relaxed neighbourhood feel make this the locals\' preferred alternative to the scale of Gateway.',
    distance: '2.5 km',
    driveTime: '5 min',
    openingHours: 'Mon–Sat 09:00–18:00 | Sun 09:00–15:00',
    entryFee: 'Free entry',
    highlight: 'Upmarket and uncrowded - 120+ premium boutiques without the bustle of Gateway.',
    image: '/images/things-to-do/la-lucia-mall.png',
  },
  {
    id: 'umhlanga-village',
    name: 'Umhlanga Village & Chartwell Drive',
    category: 'Shopping',
    description:
      'The charming heart of Umhlanga, where boutique fashion stores, artisan coffee shops, deli restaurants, and gift shops line the walkways down to the promenade. Chartwell Drive is the main dining and lifestyle strip. The village is fully walkable and connects directly to the beach - perfect for a morning of browsing followed by lunch with sea views.',
    distance: 'Central Umhlanga',
    driveTime: 'On foot from most accommodation',
    openingHours: 'Shops generally 09:00–17:00; restaurants until late',
    entryFee: 'Free',
    highlight: 'The most walkable part of Umhlanga - boutiques, restaurants, and the beach all within a few hundred metres.',
    image: '/images/things-to-do/umhlanga-village.jpg',
  },

  {
    id: 'oceans-umhlanga',
    name: 'Oceans Umhlanga',
    category: 'Shopping',
    description:
      'The landmark cylindrical tower that defines the Umhlanga skyline, Oceans Umhlanga is a mixed-use lifestyle precinct housing upmarket retail, the Signature Restaurant (with panoramic ocean views from the top floor), a cinema, and direct beach access. The building is the most recognisable structure in the village and its rooftop views stretch from the Bluff to the North Coast.',
    distance: 'Central Umhlanga',
    driveTime: 'Walking distance from most accommodation',
    openingHours: 'Retail daily 09:00–18:00; Signature Restaurant until late',
    entryFee: 'Free entry',
    highlight: 'Umhlanga\'s skyline icon - dining with panoramic Indian Ocean views at the top-floor Signature Restaurant.',
    image: '/images/things-to-do/oceans-mall.jpg',
  },

  // ─── ENTERTAINMENT ───────────────────────────────────────────
  {
    id: 'sharks-board',
    name: 'KZN Sharks Board Maritime Centre',
    category: 'Entertainment',
    description:
      'The world\'s leading shark research organisation, located right in Umhlanga. Interactive presentations and live shark dissections let visitors examine apex predators up close and understand the net programme protecting KZN beaches. Early-morning boat tours accompany the operations crew as they service shark nets off the Durban coast - with dramatic views of Moses Mabhida Stadium from the water.',
    distance: '1.5 km from the beachfront',
    driveTime: '3 min',
    openingHours: 'Display Hall: Mon–Fri 08:00–16:00 | Presentations: Tue–Thu 09:00 & 14:00, Sun 14:00',
    entryFee: 'Adults R50 | Children R30 | Boat tours: call 082 403 9206',
    highlight: 'The only place in the world where you can attend a live shark dissection and join the crew servicing real shark nets.',
    image: '/images/things-to-do/sharks-board.png',
    featured: true,
  },
  {
    id: 'ushaka',
    name: 'uShaka Marine World',
    category: 'Entertainment',
    description:
      'Africa\'s largest aquarium complex and marine theme park, built around a faux wrecked ship on Durban\'s Point Waterfront. Sea World showcases over 32 shark species in immersive tunnel aquariums; Wet \'n Wild features Africa\'s highest waterslide; and interactive encounters include dolphin swims, shark cage dives, and ocean walker helmet dives. A full-day family adventure 25 minutes south.',
    distance: '20 km south',
    driveTime: '25 min via N2',
    openingHours: 'Sea World: Daily 09:00–17:00 | Wet \'n Wild: Wed–Sun 10:00–17:00',
    entryFee: 'Sea World: Adults ~R202 | Children ~R154 | Under 3 free',
    highlight: 'Africa\'s biggest aquarium with shark tunnel walks, the continent\'s tallest waterslide, and shark cage dives.',
    image: '/images/things-to-do/ushaka.png',
  },
  {
    id: 'sibaya',
    name: 'Sibaya Casino & Entertainment Kingdom',
    category: 'Entertainment',
    description:
      'Sun International\'s flagship KZN property perched on the bluffs just north of Umhlanga, with an African-themed casino, the 577-seat iZulu Theatre hosting world-class productions, two hotels, multiple restaurants, and spectacular Indian Ocean views. The casino floor operates 24 hours with slots, tables, and poker rooms.',
    distance: '8 km north',
    driveTime: '12 min',
    openingHours: 'Casino: 24 hours | Theatre: show-dependent',
    entryFee: 'Casino floor: free entry (ID required, 18+)',
    highlight: 'Clifftop casino with Indian Ocean views and a 577-seat theatre for touring productions.',
    image: '/images/things-to-do/sibaya-casino.png',
  },
  {
    id: 'moses-mabhida',
    name: 'Moses Mabhida Stadium',
    category: 'Entertainment',
    description:
      'Durban\'s iconic 56,000-seat FIFA World Cup 2010 stadium, recognisable by its sweeping Y-shaped arch spanning the entire field. The stadium is currently undergoing a major upgrade (expected completion 2026–27) adding a new Sky Car with glass viewing deck and revamped Big Swing. The surrounding People\'s Park is open and superb for walking, cycling, and picnics.',
    distance: '16 km south',
    driveTime: '20 min',
    openingHours: 'People\'s Park: daily from 06:00 | Attraction rides: check mmstadium.com - currently under renovation',
    entryFee: 'People\'s Park: free | Stadium rides: TBC post-renovation',
    highlight: 'An architectural marvel - the only stadium arch in the world you can walk across, with panoramic ocean and city views.',
    image: '/images/things-to-do/moses-mabhida.png',
  },

  // ─── RECREATION ──────────────────────────────────────────────
  {
    id: 'whale-watching',
    name: 'Whale Watching & Dolphin Spotting',
    category: 'Recreation',
    description:
      'Bottlenose and spinner dolphins are resident year-round and can often be spotted from the beach or promenade without a boat. Humpback and Southern Right Whales migrate north between May and December, peaking August–September. Umhlanga Ocean Charters runs dedicated boat tours from Durban Harbour, while microlight coastal safaris offer a bird\'s-eye view of marine megafauna.',
    distance: 'From the beach; harbour 15 min drive',
    driveTime: '0–15 min',
    openingHours: 'Tours typically depart early morning; best May–December for whales',
    entryFee: 'Boat tours from approx R450–R800 per person',
    highlight: 'Dolphins are spotted year-round from the beach itself - while whale season brings Humpbacks close inshore.',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=900&q=80',
    featured: true,
  },
  {
    id: 'golf',
    name: 'Golf - Mount Edgecombe & Beyond',
    category: 'Recreation',
    description:
      'Mount Edgecombe Country Club is KZN\'s only 36-hole facility (The Woods and The Lakes courses), 10 km inland. Beachwood Country Club, established in 1931, offers a classic parkland layout among indigenous trees. Durban Country Club - ranked among Africa\'s top 3 and the world\'s top 100 - is 20 km south. All three are bookable in advance and offer day visitor tee times.',
    distance: 'Mount Edgecombe: 10 km | Durban CC: 20 km',
    driveTime: '10–25 min',
    openingHours: 'Typically 07:00–17:00 daily; advance booking required',
    entryFee: 'Green fees from approx R500–R900 per round (confirm directly)',
    highlight: 'Durban Country Club is consistently ranked in the world\'s top 100 - one of Africa\'s great historic courses.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&q=80',
  },
  {
    id: 'deep-sea-fishing',
    name: 'Deep Sea Fishing',
    category: 'Recreation',
    description:
      'The warm Agulhas and Mozambique currents converge off the KZN coast, creating rich fishing grounds for marlin, sailfish, yellowfin tuna, dorado, and wahoo. Charter boats launch from Umdloti beach (8 km north of Umhlanga) and Durban Harbour. Full-day and half-day charters cater to all levels - experienced skippers know the seasonal runs intimately.',
    distance: 'Umdloti launch: 8 km | Durban Harbour: 16 km',
    driveTime: '10–20 min to departure points',
    openingHours: 'Charters depart 05:30–06:30; full-day or half-day options',
    entryFee: 'From approx R800–R1,500 per person (full-day charter)',
    highlight: 'Two warm ocean currents converge right on Umhlanga\'s doorstep - one of Africa\'s richest billfish grounds.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80',
  },
  {
    id: 'surfing-kayaking',
    name: 'Surfing, Paddleboarding & Kayaking',
    category: 'Recreation',
    description:
      'Umhlanga Main Beach offers consistent 1–2 m surf suitable for all levels, with qualified instructors available directly on the beach. Stand-up paddleboard and kayak hire is also available, allowing calm-water paddling inside the surf break or open-ocean touring. The Umhlanga Lagoon provides sheltered flat-water paddling for beginners and families.',
    distance: 'On the beach',
    driveTime: '0 min',
    openingHours: 'Surf school typically 08:00–16:00 daily',
    entryFee: 'Surf lessons from approx R350 per session | Board hire from R100/hour',
    highlight: 'Lessons, hire, and guided open-ocean tours all from the beach with qualified instructors.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&q=80',
  },

  // ─── DAY TRIPS ───────────────────────────────────────────────
  {
    id: 'durban-city',
    name: 'Durban City & The Golden Mile',
    category: 'Day Trips',
    description:
      'Africa\'s busiest port city offers a compelling mix of Indian spice markets, the Victoria Street Market, Durban Botanic Gardens (Africa\'s oldest), and the 6 km Golden Mile beachfront promenade. The new Point waterfront development anchors the south end. Durban is uniquely KZN - the spice markets, curry restaurants, and Victorian architecture create an urban experience unlike anywhere else on the continent.',
    distance: '17 km south',
    driveTime: '20–25 min via N2',
    openingHours: 'City sights generally daily; markets Mon–Sat',
    entryFee: 'Most sights free or individually priced',
    highlight: 'Africa\'s most Indian city outside India - the spice markets and curry scene alone are worth the trip.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900&q=80',
  },
  {
    id: 'valley-of-1000-hills',
    name: 'Valley of a Thousand Hills',
    category: 'Day Trips',
    description:
      'A spectacular series of rolling green valleys 45 km inland, home to traditional Zulu villages, craft markets, and PheZulu Safari Park - where visitors attend authentic Zulu cultural performances, view crocodiles and snakes, and tour a living Zulu homestead. The valley views are among the most dramatic in KZN, with verdant undulating hills fading into a soft blue haze.',
    distance: '45 km inland',
    driveTime: '50 min',
    openingHours: 'PheZulu Safari Park: daily 08:00–16:00',
    entryFee: 'PheZulu from approx R150 per adult',
    highlight: 'The most accessible traditional Zulu cultural experience from Umhlanga - living villages and sweeping valley panoramas.',
    image: '/images/things-to-do/valley-of-1000-hills.png',
  },
  {
    id: 'hluhluwe-imfolozi',
    name: 'Hluhluwe-iMfolozi Game Reserve',
    category: 'Day Trips',
    description:
      'The oldest proclaimed nature reserve in Africa (est. 1895) and the place that saved the white rhino from extinction. Home to all of the Big Five plus cheetah and wild dog. Full-day guided open-vehicle safaris depart Umhlanga at 05:30–06:00, with pickup from most accommodation. Allow 4–5 hours of game driving in the park.',
    distance: '275 km north',
    driveTime: '3 hours (or guided day tour with Umhlanga pickup)',
    openingHours: 'Day visitor gates: 06:00–18:00 (Oct–Mar) | 06:00–17:00 (Apr–Sep)',
    entryFee: 'Day entry from ~R300 per person | Guided day tours from ~R1,800–R2,500 (incl. transport)',
    highlight: 'Where the white rhino was pulled back from extinction - the Big Five in Africa\'s oldest reserve, as a day trip.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80',
  },
  {
    id: 'ballito',
    name: 'Ballito & the Dolphin Coast',
    category: 'Day Trips',
    description:
      'A laid-back coastal resort town 40 km north along South Africa\'s Dolphin Coast, known for its pristine Blue Flag tidal pools, upmarket restaurants, and the Ballito Junction mall. The coast between Ballito and Salt Rock is excellent for rock pooling and spotting spinner dolphins in the surf - often visible from the clifftop walkway with no boat required.',
    distance: '40 km north',
    driveTime: '35 min via N2',
    openingHours: 'Town always accessible; tidal pools best at low tide',
    entryFee: 'Free (tidal pools, beach, clifftop walk)',
    highlight: 'Ballito\'s tidal pools are among the finest on the KZN North Coast - safe snorkelling for all ages.',
    image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=900&q=80',
  },
];

export const CATEGORIES: AttractionCategory[] = [
  'Beach & Nature',
  'Shopping',
  'Entertainment',
  'Recreation',
  'Day Trips',
];
