export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  published: boolean;
};

export type GolfStat = {
  id: string;
  playerId: string;
  playerName: string;
  holes: number;
  score: number;
  par: number;
  handicap: number;
  course: string;
  roundDate: string;
};

export type WeatherDataType = {
  id: string;
  location: string;
  temperature: number;
  windSpeed: number;
  windDir: string;
  humidity: number;
  conditions: string;
  forecast: string;
  recordedAt: string;
};

export type VipMember = {
  id: string;
  name: string;
  email: string;
  handicap: number | null;
  joinedAt: string;
  active: boolean;
};

export type LeagueRound = {
  id: string;
  leagueName: string;
  playerId: string;
  playerName: string;
  score: number;
  points: number;
  roundDate: string;
  course: string;
};

export const mockPosts: Post[] = [
  {
    id: "1",
    slug: "mastering-the-iron-game",
    title: "Mastering the Iron Game: Tips from the Pros",
    excerpt: "Discover the secrets behind consistent iron play that separates weekend golfers from scratch players. We break down stance, grip, and swing path.",
    content: `# Mastering the Iron Game\n\nThe iron game is where rounds are truly won and lost. Whether you're attacking a tucked pin or laying up safely, understanding how to control your irons is fundamental to shooting lower scores.\n\n## The Setup\n\nYour setup is everything. Position the ball slightly forward of center for mid-irons, and move it progressively back as the clubs get shorter. Keep your weight slightly favoring your lead foot — about 55/45 — to encourage the downward strike that creates compression.\n\n## The Downswing\n\nThe key to consistent iron play is sequencing. The hips initiate the downswing, followed by the torso, then arms, and finally the club. This kinetic chain creates lag and power without manipulation.\n\n## Distance Control\n\nPractice with a launch monitor if possible. Know your exact distances for each club under normal conditions. Temperature, altitude, and wind all affect carry — learn to adjust accordingly.\n\n## Final Thoughts\n\nSpend two-thirds of your practice time within 150 yards. The short game and iron play will lower your scores faster than any driver upgrade.`,
    coverImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800",
    category: "Instruction",
    tags: ["irons", "technique", "instruction", "improvement"],
    author: "James Fairway",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    featured: true,
    published: true,
  },
  {
    id: "2",
    slug: "pebble-beach-course-review",
    title: "Pebble Beach: A Round Worth Every Penny",
    excerpt: "We played one of golf's most iconic courses and lived to tell the tale. Here's our honest review of Pebble Beach Golf Links.",
    content: `# Pebble Beach: A Round Worth Every Penny\n\nThere are courses you play, and then there are experiences you live. Pebble Beach Golf Links firmly belongs in the latter category. Perched on the cliffs of the Monterey Peninsula, every hole offers views that make it nearly impossible to focus on your scorecard.\n\n## The Arrival\n\nDriving up 17-Mile Drive as the Pacific fog burns off in the morning is something no golfer should miss. The starter's lodge sets the tone — impeccable service, pristine carts, and a palpable sense of history.\n\n## Standout Holes\n\nHoles 6 through 10 are arguably the finest stretch in American golf. The par-3 7th, all of 106 yards, plays over a cliff to a postage-stamp green. The 8th may be the best par-4 in golf — a blind drive followed by an approach over a chasm to a green hugging the ocean.\n\n## The Verdict\n\nAt over $600 per round, it's not a daily driver. But as a bucket-list experience? Absolutely priceless. Play it once, and you'll understand why golf captured the world's imagination.`,
    coverImage: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800",
    category: "Course Review",
    tags: ["pebble beach", "course review", "bucket list", "california"],
    author: "Sarah Links",
    publishedAt: "2024-01-20T09:00:00Z",
    updatedAt: "2024-01-20T09:00:00Z",
    featured: true,
    published: true,
  },
  {
    id: "3",
    slug: "best-golf-equipment-2024",
    title: "The Best Golf Equipment of 2024: Our Top Picks",
    excerpt: "From game-changing drivers to precision wedges, we tested this year's hottest gear so you don't have to.",
    content: `# The Best Golf Equipment of 2024\n\nEvery year brings a new wave of technological innovation to the golf equipment market. 2024 has been no exception, with manufacturers pushing the boundaries of distance, forgiveness, and feel.\n\n## Driver of the Year\n\nThe TaylorMade Qi10 Max takes the crown for 2024. With its massive face and adjustable weighting system, it offers the most forgiveness we've tested at high swing speeds. Off-center hits stay remarkably on line.\n\n## Best Iron Set\n\nCallaway's Apex CB irons strike the perfect balance between workability and forgiveness. Tour-level players will love the feedback; mid-handicappers will appreciate the added height and consistency.\n\n## Wedge Pick\n\nCleveland's RTX 6 ZipCore continues the brand's dominance in the short game category. The spin rates from tight lies are exceptional, and the feel at impact is simply outstanding.\n\n## Putter Technology\n\nOdyssey's Ai-ONE Mallet series features machine-learning-optimized face inserts that improve consistency across the face. If you struggle with distance control on longer putts, this is your answer.\n\n## Bottom Line\n\nGolf equipment continues to advance rapidly. While the fundamentals of the swing haven't changed, modern gear can absolutely help you play your best golf.`,
    coverImage: "https://images.unsplash.com/photo-1576494304080-f55cf2bd9dd0?w=800",
    category: "Equipment",
    tags: ["equipment", "drivers", "irons", "review", "2024"],
    author: "Mike Bogey",
    publishedAt: "2024-02-01T08:00:00Z",
    updatedAt: "2024-02-01T08:00:00Z",
    featured: false,
    published: true,
  },
  {
    id: "4",
    slug: "mental-game-golf-psychology",
    title: "The Mental Game: Golf Psychology for Amateurs",
    excerpt: "Your swing is fine. Your mind might be holding you back. Explore the psychological principles that elite golfers use to perform under pressure.",
    content: `# The Mental Game: Golf Psychology for Amateurs\n\nBob Rotella famously said, "Golf is not a game of perfect." Yet most amateur golfers torture themselves over imperfect shots, creating a negative feedback loop that destroys confidence and consistency.\n\n## Pre-Shot Routine\n\nDeveloping a consistent pre-shot routine is the single most effective mental tool available to amateur golfers. It signals to your brain that it's time to perform, quieting the analytical mind and allowing your trained motor patterns to execute.\n\n## Managing Expectations\n\nThe best round of your life won't come from trying to hit every shot perfectly. It comes from making smart decisions and accepting that bad shots are part of the game. Even tour professionals miss one in five greens.\n\n## Breathing and Focus\n\nBox breathing — four counts in, four counts hold, four counts out — activates the parasympathetic nervous system, reducing cortisol and improving fine motor control. Try it before challenging shots.\n\n## Course Management\n\nThe mental game includes strategic thinking. Aim for the fat part of the green. Know your miss patterns and play away from danger. A bogey is far better than a double.\n\n## Building Resilience\n\nLearn to reset after bad holes. Give yourself a 30-second window to feel frustrated, then consciously let it go. The next shot is always a fresh start.`,
    coverImage: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=800",
    category: "Mental Game",
    tags: ["mental game", "psychology", "focus", "routine", "performance"],
    author: "Dr. Clara Birdie",
    publishedAt: "2024-02-10T11:00:00Z",
    updatedAt: "2024-02-10T11:00:00Z",
    featured: false,
    published: true,
  },
  {
    id: "5",
    slug: "golf-travel-scotland-highlands",
    title: "Golf in the Scottish Highlands: A Journey Through Time",
    excerpt: "Links golf in its purest form. We toured the legendary courses of Scotland's rugged north and discovered what the game was always meant to be.",
    content: `# Golf in the Scottish Highlands: A Journey Through Time\n\nTo play golf in the Scottish Highlands is to connect with the game's very soul. Here, golf was born — not on manicured parkland courses, but on wind-swept coastal strips where sheep grazed between rounds.\n\n## Royal Dornoch\n\nPerhaps the finest course outside the Open Championship rotation, Royal Dornoch's natural template holes feel like they've existed since the earth's formation. The plateau greens are diabolical; the views across the Dornoch Firth are sublime.\n\n## Castle Stuart\n\nThe modern masterpiece of Highland golf, Castle Stuart opened in 2009 but feels timeless. Perched above the Moray Firth with views of Inverness in the distance, it combines strategic design with dramatic scenery.\n\n## Nairn\n\nA hidden gem of the Scottish east coast, Nairn Golf Club offers pure traditional links golf at its finest. The course is narrow, demands accuracy, and rewards local knowledge.\n\n## Travel Tips\n\nFly into Inverness. Rent a car — public transport won't reach most of these courses. Pack waterproofs regardless of the forecast. And bring a genuine reverence for the game's origins.`,
    coverImage: "https://images.unsplash.com/photo-1612367289091-a8a987c03a56?w=800",
    category: "Travel",
    tags: ["scotland", "travel", "links golf", "highlands", "bucket list"],
    author: "James Fairway",
    publishedAt: "2024-02-18T09:30:00Z",
    updatedAt: "2024-02-18T09:30:00Z",
    featured: true,
    published: true,
  },
  {
    id: "6",
    slug: "short-game-secrets-chipping",
    title: "Short Game Secrets: The Art of Chipping",
    excerpt: "Save strokes around the green with these proven chipping techniques. From bump-and-run to flop shots, we cover every scenario.",
    content: `# Short Game Secrets: The Art of Chipping\n\nStatistics consistently show that golfers who improve their short games lower their scores faster than those who focus on driving distance. The chip shot — that most fundamental of short game weapons — is where many rounds are saved or squandered.\n\n## The Basic Chip\n\nFor a standard chip from just off the green, use a 7 or 8 iron. Position the ball back in your stance, weight forward, hands ahead of the ball. Use a putting-style stroke with a slight hinging of the wrists. The goal is to land the ball just on the green and let it roll to the hole.\n\n## The Bump and Run\n\nIdeal for firm conditions and links-style courses, the bump-and-run uses anything from a 5-iron to a 9-iron to keep the ball low and rolling. Read the slope as you would a long putt.\n\n## The Lob Shot\n\nReserve the lob shot for specific situations: over a bunker, to a tight pin. Open the face, open your stance, accelerate through impact. This is an advanced shot requiring significant practice before deployment in competition.\n\n## Consistent Contact\n\nThe biggest enemy of good chipping is inconsistent contact. Practice hitting a small circle drawn in the turf to develop precision. This eliminates both chunked chips and bladed skulls.`,
    coverImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800",
    category: "Instruction",
    tags: ["chipping", "short game", "technique", "instruction"],
    author: "Sarah Links",
    publishedAt: "2024-03-01T10:00:00Z",
    updatedAt: "2024-03-01T10:00:00Z",
    featured: false,
    published: true,
  },
  {
    id: "7",
    slug: "augusta-national-history",
    title: "Augusta National: The Cathedral in the Pines",
    excerpt: "The history, mystique, and enduring allure of golf's most famous address. A deep dive into Augusta National Golf Club.",
    content: `# Augusta National: The Cathedral in the Pines\n\nNo other golf course carries the weight of history, tradition, and aspiration that Augusta National Golf Club bears. Home to The Masters since 1934, it is simultaneously the most admired and most debated stage in golf.\n\n## Origins\n\nBobby Jones and Clifford Roberts founded the club in 1933 on the site of Fruitland Nurseries in Augusta, Georgia. Alister MacKenzie, coming off the triumph of Cypress Point, designed the course. Jones wanted strategic holes that rewarded creative play over pure power.\n\n## Amen Corner\n\nHoles 11, 12, and 13 constitute Amen Corner, where the Masters is most often won and lost. The par-3 12th — a mere 155 yards over Rae's Creek — has destroyed more Masters hopes than any other single hole in golf.\n\n## The Evolution\n\nAugusta National has changed dramatically over the decades, primarily in response to equipment advances. What Jones designed as a second-shot course has been lengthened to over 7,500 yards, yet its strategic DNA remains intact.\n\n## The Traditions\n\nThe green jacket. The par-3 contest. The pimento cheese sandwich. Augusta's traditions are as important as the golf itself — a reminder that some things in sport are more than competition.`,
    coverImage: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800",
    category: "History",
    tags: ["augusta", "masters", "history", "traditions"],
    author: "Mike Bogey",
    publishedAt: "2024-03-10T08:00:00Z",
    updatedAt: "2024-03-10T08:00:00Z",
    featured: false,
    published: true,
  },
  {
    id: "8",
    slug: "fitness-for-golfers",
    title: "Fitness for Golfers: Build a Body That Can Play 18",
    excerpt: "Golf fitness has evolved dramatically. Modern training approaches help golfers add distance, prevent injury, and play well into their senior years.",
    content: `# Fitness for Golfers: Build a Body That Can Play 18\n\nThe image of the overweight recreational golfer has given way to a new reality: golf is an athletic endeavor, and the best players in the world train like athletes. You don't need to train like Rory McIlroy, but purposeful fitness work will measurably improve your game.\n\n## Mobility First\n\nBefore strength, focus on mobility. The golf swing requires significant hip and thoracic spine rotation. Tight hips restrict your backswing; a stiff thoracic spine prevents proper shoulder turn. Daily mobility work — hip circles, thoracic rotations, shoulder stretches — will pay immediate dividends.\n\n## Core Stability\n\nThe core is the engine of the golf swing. Not just the abs — we're talking about a 360-degree cylinder of musculature including the obliques, lower back, and hip flexors. Planks, pallof presses, and rotational cable exercises build the stability needed to transfer power consistently.\n\n## Rotational Power\n\nMed ball rotational throws are perhaps the single best exercise for golfers. They train the same movement pattern as the swing while developing the fast-twitch muscle fibers responsible for clubhead speed.\n\n## Playing 18 Strong\n\nCardiovascular fitness determines whether you play your best on the 18th hole or fade. Even 30 minutes of moderate cardio three times per week will improve your stamina and course management in the closing holes.`,
    coverImage: "https://images.unsplash.com/photo-1576494304080-f55cf2bd9dd0?w=800",
    category: "Fitness",
    tags: ["fitness", "training", "mobility", "strength", "performance"],
    author: "Dr. Clara Birdie",
    publishedAt: "2024-03-15T09:00:00Z",
    updatedAt: "2024-03-15T09:00:00Z",
    featured: false,
    published: true,
  },
];

export const mockGolfStats: GolfStat[] = [
  { id: "gs1", playerId: "p1", playerName: "James Fairway", holes: 18, score: 72, par: 72, handicap: 0.0, course: "Pebble Beach", roundDate: "2024-03-01T08:00:00Z" },
  { id: "gs2", playerId: "p2", playerName: "Sarah Links", holes: 18, score: 75, par: 72, handicap: 3.2, course: "Augusta National", roundDate: "2024-03-02T08:00:00Z" },
  { id: "gs3", playerId: "p3", playerName: "Mike Bogey", holes: 18, score: 85, par: 72, handicap: 12.5, course: "St Andrews", roundDate: "2024-03-03T08:00:00Z" },
  { id: "gs4", playerId: "p4", playerName: "Dr. Clara Birdie", holes: 18, score: 78, par: 72, handicap: 5.8, course: "Royal Dornoch", roundDate: "2024-03-04T08:00:00Z" },
  { id: "gs5", playerId: "p5", playerName: "Tom Eagle", holes: 18, score: 69, par: 72, handicap: 2.1, course: "Pebble Beach", roundDate: "2024-03-05T08:00:00Z" },
];

export const mockWeather: WeatherDataType[] = [
  {
    id: "w1",
    location: "Pebble Beach",
    temperature: 68,
    windSpeed: 12,
    windDir: "NW",
    humidity: 72,
    conditions: "Partly Cloudy",
    forecast: JSON.stringify([
      { day: "Today", high: 68, low: 55, conditions: "Partly Cloudy", wind: 12 },
      { day: "Tomorrow", high: 71, low: 57, conditions: "Sunny", wind: 8 },
      { day: "Wednesday", high: 65, low: 52, conditions: "Overcast", wind: 15 },
      { day: "Thursday", high: 62, low: 50, conditions: "Light Rain", wind: 18 },
      { day: "Friday", high: 70, low: 56, conditions: "Sunny", wind: 10 },
    ]),
    recordedAt: "2024-03-18T07:00:00Z",
  },
  {
    id: "w2",
    location: "Augusta",
    temperature: 74,
    windSpeed: 8,
    windDir: "SW",
    humidity: 65,
    conditions: "Sunny",
    forecast: JSON.stringify([
      { day: "Today", high: 74, low: 60, conditions: "Sunny", wind: 8 },
      { day: "Tomorrow", high: 76, low: 62, conditions: "Sunny", wind: 6 },
      { day: "Wednesday", high: 72, low: 58, conditions: "Partly Cloudy", wind: 10 },
      { day: "Thursday", high: 68, low: 55, conditions: "Thunderstorms", wind: 20 },
      { day: "Friday", high: 73, low: 61, conditions: "Partly Cloudy", wind: 9 },
    ]),
    recordedAt: "2024-03-18T07:00:00Z",
  },
  {
    id: "w3",
    location: "St Andrews",
    temperature: 52,
    windSpeed: 22,
    windDir: "W",
    humidity: 85,
    conditions: "Windy",
    forecast: JSON.stringify([
      { day: "Today", high: 52, low: 44, conditions: "Windy", wind: 22 },
      { day: "Tomorrow", high: 54, low: 45, conditions: "Overcast", wind: 18 },
      { day: "Wednesday", high: 56, low: 47, conditions: "Partly Cloudy", wind: 14 },
      { day: "Thursday", high: 50, low: 42, conditions: "Rain", wind: 25 },
      { day: "Friday", high: 53, low: 44, conditions: "Overcast", wind: 20 },
    ]),
    recordedAt: "2024-03-18T07:00:00Z",
  },
];

export const mockLeagueRounds: LeagueRound[] = [
  { id: "lr1", leagueName: "Spring Classic", playerId: "p5", playerName: "Tom Eagle", score: 69, points: 45, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
  { id: "lr2", leagueName: "Spring Classic", playerId: "p1", playerName: "James Fairway", score: 72, points: 38, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
  { id: "lr3", leagueName: "Spring Classic", playerId: "p4", playerName: "Dr. Clara Birdie", score: 78, points: 32, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
  { id: "lr4", leagueName: "Spring Classic", playerId: "p2", playerName: "Sarah Links", score: 75, points: 35, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
  { id: "lr5", leagueName: "Spring Classic", playerId: "p3", playerName: "Mike Bogey", score: 85, points: 22, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
  { id: "lr6", leagueName: "Spring Classic", playerId: "p6", playerName: "Lisa Par", score: 80, points: 28, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
  { id: "lr7", leagueName: "Spring Classic", playerId: "p7", playerName: "Robert Chip", score: 82, points: 25, roundDate: "2024-03-15T08:00:00Z", course: "Pebble Beach" },
];

export const mockVipMembers: VipMember[] = [
  { id: "vm1", name: "Tom Eagle", email: "tom@example.com", handicap: 2.1, joinedAt: "2023-01-15T00:00:00Z", active: true },
  { id: "vm2", name: "James Fairway", email: "james@example.com", handicap: 0.0, joinedAt: "2023-02-20T00:00:00Z", active: true },
  { id: "vm3", name: "Sarah Links", email: "sarah@example.com", handicap: 3.2, joinedAt: "2023-03-10T00:00:00Z", active: true },
  { id: "vm4", name: "Dr. Clara Birdie", email: "clara@example.com", handicap: 5.8, joinedAt: "2023-04-01T00:00:00Z", active: true },
  { id: "vm5", name: "Mike Bogey", email: "mike@example.com", handicap: 12.5, joinedAt: "2023-05-15T00:00:00Z", active: true },
  { id: "vm6", name: "Lisa Par", email: "lisa@example.com", handicap: 8.3, joinedAt: "2023-06-20T00:00:00Z", active: true },
  { id: "vm7", name: "Robert Chip", email: "robert@example.com", handicap: 10.1, joinedAt: "2023-07-05T00:00:00Z", active: false },
];
