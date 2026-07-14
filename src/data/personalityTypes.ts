export interface ReceiptItem {
  label: string;
  qty: number;
  price: number;
}

export interface CareerFit {
  title: string;
  whyItFits: string;
}

export interface RelationshipDynamic {
  partnerSlug: string;
  dynamic: string;
}

export interface PersonalityType {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  receiptItems: ReceiptItem[];
  receiptTotal: number;
  strengths: string[];
  weaknesses: string[];
  compatibleWith: string[];
  habits: string[];
  deepAnalysis?: string;
  careerAdvice?: string;
  careerFits?: CareerFit[];
  relationshipDynamics?: RelationshipDynamic[];
  growthTips?: string[];
  dailyLife?: string;
  famousExamples?: string[];
}

export const personalityTypes: PersonalityType[] = [
  {
    slug: "the-overthinker",
    name: "The Overthinker",
    emoji: "🧠",
    tagline: "Receipt total: $847.50, mostly existential dread.",
    description: "You analyze everything. Every text, every glance, every pause. Your brain runs at 3am replaying conversations from 2019. You are brilliant and exhausted. People come to you for advice because you have already thought through every possible outcome. The downside is you have also thought through every possible disaster. Your receipt is heavy on introspection and light on action. The total cost of being you is high, but the value you bring to others is immeasurable. You are the person who catches the detail everyone else missed, who remembers what was actually said versus what was intended, who can sit with complexity without rushing to resolve it. The world needs overthinkers. Without you, decisions would be faster but worse.",
    receiptItems: [
      { label: "Overthinking", qty: 47, price: 4.70 },
      { label: "3 AM Existential Dread", qty: 1, price: 13.00 },
      { label: "Re-reading texts for tone", qty: 23, price: 1.50 },
      { label: "Spiraling about email wording", qty: 8, price: 5.20 },
      { label: "Drafting replies and deleting them", qty: 15, price: 2.00 },
      { label: "Googling symptoms at midnight", qty: 4, price: 8.50 },
      { label: "Remembering awkward moment from 2019", qty: 1, price: 12.00 },
    ],
    receiptTotal: 386.00,
    strengths: ["Detail-oriented", "Deep thinker", "Catches what others miss", "Thorough"],
    weaknesses: ["Decision paralysis", "Sleep deprivation", "Over-analyzes simple things", "Hard to let go"],
    compatibleWith: ["the-golden-retriever", "the-cozy-blanket", "the-spreadsheet"],
    habits: ["Re-reading sent messages", "Making pro/con lists at 2am", "Asking 'but what if' 47 times", "Googling things instead of sleeping"],
    deepAnalysis: "The Overthinker is not anxious by accident. Your brain is a prediction engine that never shuts down, constantly modeling futures, weighing branches, calculating the probability that the silence on the other end of the text means something. This is cognitively expensive — research on rumination shows that chronic overthinking burns the same neural pathways as problem-solving, but without the resolution. You are running the computation without ever pressing enter.\n\nThe paradox of the Overthinker is that your analysis is usually correct. You do see outcomes others miss. You do catch the subtle shift in tone. The problem is not accuracy — it is cost. By the time you have verified that the text was fine, the moment has passed. Your intelligence operates at a latency that makes it invisible to others.\n\nThe 3am spiral is not random. Sleep research shows that the prefrontal cortex — the part that regulates emotional responses — goes offline during REM sleep. Without it, the amygdala runs unchecked, turning minor concerns into existential threats. You are not weaker at night. You are running the same analysis without the brakes.\n\nWhat looks like indecision is actually hyper-decision: you are making and unmaking the same choice dozens of times per minute. The exhaustion is real. The solution is not to think less but to think with a time limit — to externalize the analysis (write it down), set a deadline (decide by X), and accept that a good decision made on time beats a perfect decision made late.",
    careerAdvice: "Your ability to see every angle is a superpower in roles where the cost of being wrong exceeds the cost of being slow. You thrive in analysis-heavy environments: research, risk assessment, strategy, editing, code review, legal analysis. The key is finding roles that reward thoroughness rather than speed. Avoid cultures that prize 'move fast and break things' — you will be miserable and they will call you a bottleneck.\n\nThe Overthinker's professional trap is perfectionism disguised as diligence. You will spend three hours on an email that needed twenty minutes. Learn to calibrate: not every decision deserves the same depth of analysis. Categorize decisions as reversible or irreversible, and spend your cognitive budget accordingly. Reversible decisions should be made fast. Irreversible decisions deserve the full treatment.\n\nYour best career move is to find a partner — a Golden Retriever or a Wildcard — who can pull the trigger while you provide the analysis. You are the navigator, not the driver, and that is not a lesser role. Navigators prevent ships from hitting rocks.",
    careerFits: [
      { title: "Data Analyst / Researcher", whyItFits: "Your natural tendency to question, verify, and explore edge cases is exactly what data analysis demands." },
      { title: "Editor / Proofreader", whyItFits: "You already re-read every text three times. Getting paid to catch what others miss is just monetizing your habit." },
      { title: "Risk Manager / Compliance", whyItFits: "You already model worst-case scenarios for free. In risk management, that paranoia is called 'due diligence' and it pays well." },
      { title: "Therapist / Counselor", whyItFits: "You already analyze everyone's behavior. Channeling that into a professional, structured framework turns rumination into insight." },
      { title: "Software Engineer (Backend)", whyItFits: "Code rewards careful thinking. The bugs you prevent by considering edge cases are worth more than the features a fast coder ships." },
    ],
    relationshipDynamics: [
      { partnerSlug: "the-golden-retriever", dynamic: "The Golden Retriever pulls you out of your head. Their warmth is an antidote to your spirals, and your depth gives them something to lean on. The risk: you may overanalyze their simple affection, searching for hidden meanings that do not exist." },
      { partnerSlug: "the-cozy-blanket", dynamic: "The Cozy Blanket gives you permission to rest. Their calm energy lowers your processing speed to something sustainable. The risk: together you may achieve so little comfort that nothing ever gets decided." },
      { partnerSlug: "the-spreadsheet", dynamic: "The Spreadsheet validates your analytical nature. You both process the world through systems. The risk: two containers, no release valve. Someone needs to be willing to feel, out loud, eventually." },
    ],
    growthTips: [
      "Set a timer for decisions. If it is reversible, decide in under 60 seconds. If it is not, decide within 24 hours.",
      "Externalize the spiral. Write it down instead of thinking in circles — paper does not loop the way the mind does.",
      "Distinguish between productive analysis and unproductive rumination. Productive analysis leads to a decision. Rumination leads to another question.",
      "Practice the 70% rule: if you are 70% confident, act. Waiting for 100% is not thoroughness, it is fear wearing a disguise.",
      "Tell someone when you are spiraling. Naming the loop out loud often breaks it. Silence feeds it.",
    ],
    dailyLife: "Your morning starts with a check of the phone — not to see what arrived, but to re-read what you sent last night, scanning for tone. You get coffee and think about whether the barista's 'have a nice day' was genuine or perfunctory. At work, you are the person who catches the edge case, the one who asks 'but what about when...' in the meeting. Colleagues are grateful and also slightly impatient. Lunch is spent replaying a conversation from 11am, deciding whether your tone was appropriate. The afternoon is productive but interrupted by periodic checks of whether you responded correctly to a Slack message. Evening is where the real processing begins. You lie in bed and your brain opens every file from the day, re-reading, re-evaluating. Sleep comes eventually, usually after you have Googled something inconsequential at 1am and fallen down a Wikipedia rabbit hole that has nothing to do with your original question.",
    famousExamples: ["Riley from Inside Out", "Chidi Anagonye from The Good Place", "BoJack Horseman", "Alice from You've Got Mail"],
  },
  {
    slug: "the-golden-retriever",
    name: "The Golden Retriever",
    emoji: "🐕",
    tagline: "Zero impulse control, infinite heart, will absolutely double-text.",
    description: "You love everyone, and you love them immediately. A stranger smiled at you once in 2021 and you still think about them fondly. You are the human equivalent of a tail wagging so hard the whole dog vibrates. People feel safe around you because you have zero judgment and approximately zero filters. You will forgive someone four times before they even finish apologizing. You are the friend who remembers birthdays with confetti energy and forgets why they walked into a room with the same enthusiasm. Your loyalty is not earned, it is given on sight, which means you occasionally give it to people who do not deserve it. That is your tragedy and your superpower. You bring warmth into cold rooms, you make new people feel like old friends, you turn ordinary Tuesdays into events. The receipt for being you is mostly joy, billed in small enthusiastic installments, with a generous line item for apologizing you did not need to do. You exhaust yourself being kind and you would not trade it for anything.",
    receiptItems: [
      { label: "Unconditional enthusiasm", qty: 30, price: 3.50 },
      { label: "Forgetting what upset you", qty: 12, price: 2.25 },
      { label: "Bringing joy to every room", qty: 8, price: 6.00 },
      { label: "Apologizing for things you didn't do", qty: 20, price: 1.75 },
      { label: "Double texting", qty: 15, price: 2.00 },
      { label: "Crying when someone is kind", qty: 5, price: 9.00 },
      { label: "Saying 'I love you' too fast", qty: 3, price: 15.00 },
      { label: "Fetching emotional tennis balls", qty: 25, price: 1.20 },
      { label: "Loyalty (no expiration)", qty: 1, price: 40.00 },
    ],
    receiptTotal: 405.00,
    strengths: ["Endlessly loyal", "Makes people feel welcome", "Forgives quickly", "Contagious energy"],
    weaknesses: ["No impulse control", "Trusts too easily", "Forgets to protect own feelings", "Cannot leave on time"],
    compatibleWith: ["the-overthinker", "the-storm-cloud", "the-spreadsheet"],
    habits: ["Replying with three messages in a row", "Saying 'BESTIE' to near-strangers", "Bringing snacks to every gathering", "Forgetting why you entered a room"],
  },
  {
    slug: "the-swiss-army-knife",
    name: "The Swiss Army Knife",
    emoji: "🔧",
    tagline: "Competent at 40 things, exceptional at none, useful at every dinner party.",
    description: "You can wire a plug, edit a friend's resume, cook a decent risotto, and fix someone's Wi-Fi without breaking a sweat. None of these are your job. You do not have a single calling, you have a toolbox, and you open it for whoever needs it. This makes you indispensable and invisible in the same breath. People call you when something is broken, not when something is celebrated. You are the person who knows a little about a lot, which means you are never the expert in the room but you are always the one keeping the room running. You have started fourteen hobbies and finished two. Your bookshelf has three half-read books in unrelated genres. You are not lazy, you are omnivorous, and the world does not always know what to do with that. The receipt for being you is a long list of small competencies, each individually modest, collectively impressive. You wish someone would notice how much you hold together. They will, eventually, usually right after you leave.",
    receiptItems: [
      { label: "Being decent at 40 hobbies", qty: 40, price: 1.50 },
      { label: "Never quite mastering anything", qty: 1, price: 25.00 },
      { label: "'I can fix that' (you can, barely)", qty: 14, price: 3.50 },
      { label: "Switching tools mid-project", qty: 9, price: 4.00 },
      { label: "Knowing a little about everything", qty: 50, price: 0.80 },
      { label: "Useful at every dinner party", qty: 6, price: 7.00 },
      { label: "Imposter syndrome (multi-tool edition)", qty: 7, price: 8.00 },
      { label: "Helping everyone, advancing nowhere", qty: 11, price: 5.00 },
    ],
    receiptTotal: 363.00,
    strengths: ["Adaptable", "Genuinely helpful", "Fast learner", "Calm under pressure"],
    weaknesses: ["Rarely the standout", "Hard to define yourself", "Burnout from usefulness", "Finishes almost nothing"],
    compatibleWith: ["the-disco-ball", "the-wildcard", "the-overthinker"],
    habits: ["Saying 'I can figure it out'", "Starting a new hobby monthly", "Fixing things before being asked", "Downplaying your own skills"],
  },
  {
    slug: "the-storm-cloud",
    name: "The Storm Cloud",
    emoji: "⛈️",
    tagline: "Intense, loyal, and remembers exactly what you said in March.",
    description: "You feel everything at full volume. Joy is a thunderclap and sadness is a slow rain that lasts three days, and you would not trade the sensitivity for a calmer forecast. People underestimate how loyal a storm can be. You do not love casually. When you commit to someone, you become the weather system around their life, present and immovable and occasionally terrifying. You remember the exact words people used, the tone they used them in, and the date. This is a gift and a weapon and you are still learning which is which. You cry in the car because that is the only private space left and you have a lot to process. You are not moody for the sake of it, you are moody because you are paying attention when most people have stopped. The world tells you to lighten up. The world is wrong. Your intensity is the reason the people you love feel deeply seen. Your receipt is heavy on feeling and long on memory, billed in episodes that most people weather once and you replay for years.",
    receiptItems: [
      { label: "Remembering exactly what they said", qty: 1, price: 50.00 },
      { label: "Emotional intensity (per episode)", qty: 18, price: 6.00 },
      { label: "Holding grudges (long-term storage)", qty: 3, price: 22.00 },
      { label: "Crying in the car", qty: 25, price: 2.50 },
      { label: "Loyalty through hurricanes", qty: 4, price: 18.00 },
      { label: "Reading into silence", qty: 30, price: 1.75 },
      { label: "Lighting that makes it dramatic", qty: 12, price: 5.00 },
      { label: "Forgiveness (back-ordered)", qty: 1, price: 35.00 },
    ],
    receiptTotal: 506.00,
    strengths: ["Fiercely loyal", "Deeply empathetic", "Never forgets a promise", "Loves with full weight"],
    weaknesses: ["Holds onto things too long", "Overwhelms easily", "Takes things personally", "Slow to forgive"],
    compatibleWith: ["the-golden-retriever", "the-cozy-blanket", "the-swiss-army-knife"],
    habits: ["Crying in parked cars", "Quoting people back to themselves", "Staying up to finish a feeling", "Loving harder than is convenient"],
  },
  {
    slug: "the-disco-ball",
    name: "The Disco Ball",
    emoji: "🪩",
    tagline: "High energy, high maintenance, the life of every party you crash.",
    description: "You walk in and the room rearranges itself around you. You did not ask for this and you absolutely did not refuse it. You are the friend who knows everyone's business because everyone tells you everything within ten minutes of meeting you. You make strangers feel like celebrities and you make your own exhaustion look like charisma until about 2am, when the glitter starts to hurt. You are not shallow, you are just very bright, and people confuse the two. Under the sparkle is someone who is terrified of being forgotten, which is why you perform so hard. You crash after parties the way a disco ball crashes after closing time, alone and a little sad in the dark. People love the version of you that is on. They are less sure what to do with the version that is off. That is the real cost of being you, and it is steeper than the receipt suggests. You are worth the maintenance. You are also allowed to dim sometimes. The party will still be there when you come back, and so will the people who stayed for you and not the lights.",
    receiptItems: [
      { label: "Being the main character", qty: 1, price: 60.00 },
      { label: "Outfit changes per night", qty: 4, price: 12.50 },
      { label: "Emotional crashes after parties", qty: 9, price: 8.00 },
      { label: "Saying 'BEST NIGHT EVER'", qty: 30, price: 1.50 },
      { label: "Knowing everyone's tea", qty: 15, price: 3.00 },
      { label: "Drama (premium subscription)", qty: 1, price: 45.00 },
      { label: "Glitter where it shouldn't be", qty: 7, price: 2.00 },
      { label: "Forgetting you are tired", qty: 20, price: 1.25 },
      { label: "Making strangers feel famous", qty: 8, price: 6.00 },
    ],
    receiptTotal: 404.00,
    strengths: ["Magnetic presence", "Makes people feel special", "Brings the energy", "Unforgettable"],
    weaknesses: ["Crashes hard", "Fears being forgotten", "High maintenance", "Hides sadness behind sparkle"],
    compatibleWith: ["the-cozy-blanket", "the-swiss-army-knife", "the-spreadsheet"],
    habits: ["Planning outfits three days ahead", "Knowing everyone's name instantly", "Saying 'we HAVE to hang out'", "Crashing for two days after"],
  },
  {
    slug: "the-spreadsheet",
    name: "The Spreadsheet",
    emoji: "📊",
    tagline: "Color-coded, calendar-synced, and emotionally filing for later.",
    description: "You have a system for everything and a feeling about none of it, at least not out loud. Your calendar is color-coded by category and your fridge is organized by expiration date and your grief has been moved to a tab you will open eventually, probably in Q3. People think you are cold. You are not cold, you are contained, which is a different thing and a harder one. You feel plenty. You just process it the way you process everything else, quietly, in rows, on a timeline that does not match anyone else's urgency. You are the friend who brings structure to chaos, who remembers the insurance details, who has the backup plan and the backup to the backup. You are also the friend who has not cried in front of another human since 2017 and is starting to wonder if that is a problem. It is. The receipt for being you is tidy and itemized and totals to a number that looks under control from the outside. Inside the workbook, several cells are red and you have not told anyone. You are allowed to open those tabs. The spreadsheet will hold.",
    receiptItems: [
      { label: "Color-coding emotions", qty: 7, price: 4.50 },
      { label: "Calendar blocking feelings", qty: 1, price: 30.00 },
      { label: "'I'm fine' (annual subscription)", qty: 12, price: 5.00 },
      { label: "Optimizing relaxation", qty: 5, price: 6.50 },
      { label: "Crying on schedule", qty: 2, price: 18.00 },
      { label: "Tracking productivity not living", qty: 30, price: 1.20 },
      { label: "Meal prep for emotional distance", qty: 8, price: 4.00 },
      { label: "Pivot tables about your life", qty: 1, price: 40.00 },
      { label: "Unread therapy workbook", qty: 1, price: 25.00 },
    ],
    receiptTotal: 323.00,
    strengths: ["Reliable", "Organized", "Calm in crisis", "Thinks ahead"],
    weaknesses: ["Represses feelings", "Hard to reach emotionally", "Over-controls", "Struggles to be spontaneous"],
    compatibleWith: ["the-wildcard", "the-disco-ball", "the-golden-retriever"],
    habits: ["Color-coding the calendar", "Saying 'I'm fine' neutrally", "Tracking habits in an app", "Planning weekends in advance"],
  },
  {
    slug: "the-wildcard",
    name: "The Wildcard",
    emoji: "🃏",
    tagline: "Chaos entity with good intentions and a coin-flip decision engine.",
    description: "Nobody, including you, knows what you will do next, and that is the whole point. You once moved apartments because the vibe felt off and you once drove four hours for a taco and you once changed your entire career trajectory because a stranger on a train said something interesting. You are not reckless, you are responsive, which is a kind word for it. Under the chaos there is a genuine desire to live a life that does not feel like someone else wrote it. You resist predictability the way other people resist vegetables. This makes you exciting to be around and difficult to plan around. You ghost people, then reappear months later with a gift and no explanation, and somehow they are still glad to see you. Your intentions are good. Your follow-through is a coin flip. You are the friend who will absolutely be at the airport at 4am to pick someone up and might also have decided to fly to another city that morning instead. The receipt for being you is unpredictable and occasionally sublime, billed in spontaneous line items that do not always add up but always feel like a story.",
    receiptItems: [
      { label: "Decisions made by coin flip", qty: 15, price: 3.00 },
      { label: "'Trust me' (results vary)", qty: 9, price: 5.50 },
      { label: "Spontaneous life changes", qty: 3, price: 20.00 },
      { label: "Ghosting then reappearing", qty: 6, price: 7.00 },
      { label: "Good intentions, chaos execution", qty: 20, price: 2.25 },
      { label: "Buying a one-way ticket", qty: 1, price: 50.00 },
      { label: "Apologizing for unspecified chaos", qty: 11, price: 4.00 },
      { label: "'It seemed like a good idea'", qty: 8, price: 6.00 },
    ],
    receiptTotal: 383.50,
    strengths: ["Spontaneous", "Brave", "Fun to be around", "Resists the ordinary"],
    weaknesses: ["Unreliable timing", "Hard to plan with", "Disappears without warning", "Follow-through is shaky"],
    compatibleWith: ["the-spreadsheet", "the-swiss-army-knife", "the-cozy-blanket"],
    habits: ["Changing plans last minute", "Saying 'okay but hear me out'", "Booking things impulsively", "Reappearing after long silences"],
  },
  {
    slug: "the-cozy-blanket",
    name: "The Cozy Blanket",
    emoji: "🛋️",
    tagline: "Warm, reliable, and will absolutely text you back, eventually.",
    description: "You are the person people come home to, even when you are not their home. Your presence lowers the volume on everything. You do not fix problems, you sit with them, which turns out to be the thing people actually needed. You are not flashy and you are not fast and you have made peace with the fact that your text replies arrive on a timeline that owes nothing to anyone. You remember the small things, the birthdays, the allergies, the names of the pets, because paying attention is your love language and you are fluent in it. People underestimate you because you are soft. People are wrong. Soft is not the same as weak and you have held together more crises than anyone realizes, mostly by being the one who did not panic. You need a lot of rest and you take it without apology. You will cancel plans to preserve your peace and you will mean it when you say take your time. The receipt for being you is mostly comfort, billed in small warm installments, with a generous line item for naps you did not owe anyone an explanation for. You are the safe place. That is not a small thing.",
    receiptItems: [
      { label: "Being everyone's safe place", qty: 1, price: 55.00 },
      { label: "'Take your time' (genuinely)", qty: 25, price: 2.00 },
      { label: "Cancelled plans, stayed cozy", qty: 12, price: 3.50 },
      { label: "Warm tea and bad advice", qty: 18, price: 2.75 },
      { label: "Replying 3 days later with love", qty: 9, price: 4.00 },
      { label: "Remembering every birthday", qty: 1, price: 35.00 },
      { label: "Emotional support (refills)", qty: 7, price: 6.00 },
      { label: "Naps as a personality trait", qty: 30, price: 1.50 },
      { label: "Never starting drama", qty: 1, price: 28.00 },
    ],
    receiptTotal: 382.50,
    strengths: ["Deeply comforting", "Reliable", "Great listener", "Lowers the temperature"],
    weaknesses: ["Slow to respond", "Avoids conflict", "Forgets own needs", "Easily drained"],
    compatibleWith: ["the-overthinker", "the-storm-cloud", "the-wildcard"],
    habits: ["Taking 2 days to reply", "Cancelling to stay home", "Remembering tiny details", "Napping without guilt"],
  },
];
