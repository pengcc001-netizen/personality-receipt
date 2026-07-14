export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    typeSlug: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Your phone buzzes at 11pm. It is a text from someone you kinda know. You...",
    options: [
      { text: "Reply immediately with enthusiasm and three emojis", typeSlug: "the-golden-retriever" },
      { text: "Read it, think about the perfect response, reply tomorrow", typeSlug: "the-overthinker" },
      { text: "Reply in 30 seconds because you were already on your phone", typeSlug: "the-disco-ball" },
      { text: "See it, feel warmth, reply when you have the mental energy", typeSlug: "the-cozy-blanket" },
    ],
  },
  {
    id: 2,
    question: "You are at a party where you know two people. You...",
    options: [
      { text: "Bounce between groups making new friends", typeSlug: "the-disco-ball" },
      { text: "Find one person and have a deep conversation", typeSlug: "the-overthinker" },
      { text: "Help the host with something useful", typeSlug: "the-swiss-army-knife" },
      { text: "Sit on the couch and observe until someone joins you", typeSlug: "the-cozy-blanket" },
    ],
  },
  {
    id: 3,
    question: "Someone cancels plans on you at the last minute. Your first thought is...",
    options: [
      { text: "More time for myself, actually", typeSlug: "the-cozy-blanket" },
      { text: "Did I do something wrong? Was it something I said?", typeSlug: "the-overthinker" },
      { text: "Cool, let me text the group chat to see who is free", typeSlug: "the-disco-ball" },
      { text: "Their loss. I will remember this.", typeSlug: "the-storm-cloud" },
    ],
  },
  {
    id: 4,
    question: "You have a free Saturday with zero plans. You...",
    options: [
      { text: "Text five friends to see who wants to hang out", typeSlug: "the-golden-retriever" },
      { text: "Start three projects and finish none of them", typeSlug: "the-wildcard" },
      { text: "Organize your space, meal prep, maybe read", typeSlug: "the-spreadsheet" },
      { text: "Wander. See where the day takes you.", typeSlug: "the-wildcard" },
    ],
  },
  {
    id: 5,
    question: "A friend asks for advice about a relationship problem. You...",
    options: [
      { text: "Analyze every angle and present a comprehensive framework", typeSlug: "the-overthinker" },
      { text: "Tell them honestly what you think, even if it stings", typeSlug: "the-storm-cloud" },
      { text: "Offer practical solutions and a backup plan", typeSlug: "the-swiss-army-knife" },
      { text: "Listen, validate, and suggest they trust their gut", typeSlug: "the-cozy-blanket" },
    ],
  },
  {
    id: 6,
    question: "You are in a group project and nobody is taking charge. You...",
    options: [
      { text: "Immediately create a shared doc with tasks and deadlines", typeSlug: "the-spreadsheet" },
      { text: "Quietly do the most difficult part yourself", typeSlug: "the-swiss-army-knife" },
      { text: "Suggest something wild and see if anyone follows", typeSlug: "the-wildcard" },
      { text: "Wait for someone else to lead, then support them", typeSlug: "the-cozy-blanket" },
    ],
  },
  {
    id: 7,
    question: "Someone says something that hurts you. Three weeks later, you...",
    options: [
      { text: "Still think about it at 2am occasionally", typeSlug: "the-overthinker" },
      { text: "Bring it up directly because it still bothers you", typeSlug: "the-storm-cloud" },
      { text: "Forgot about it. Life is too short.", typeSlug: "the-golden-retriever" },
      { text: "Forgave them but quietly adjusted expectations", typeSlug: "the-spreadsheet" },
    ],
  },
  {
    id: 8,
    question: "You discover a new hobby. Two weeks later, you...",
    options: [
      { text: "Have already bought all the gear and lost interest", typeSlug: "the-wildcard" },
      { text: "Are deep in a research rabbit hole about it", typeSlug: "the-overthinker" },
      { text: "Have a structured plan to get good at it", typeSlug: "the-spreadsheet" },
      { text: "Are enjoying it casually with no pressure", typeSlug: "the-cozy-blanket" },
    ],
  },
  {
    id: 9,
    question: "Your ideal vacation is...",
    options: [
      { text: "A packed itinerary hitting every attraction", typeSlug: "the-spreadsheet" },
      { text: "Somewhere with lots of people and nightlife", typeSlug: "the-disco-ball" },
      { text: "A cabin in the woods with good books", typeSlug: "the-cozy-blanket" },
      { text: "Wherever the cheapest flight goes", typeSlug: "the-wildcard" },
    ],
  },
  {
    id: 10,
    question: "Your friends would describe you as...",
    options: [
      { text: "The one who always remembers everyone's birthday", typeSlug: "the-golden-retriever" },
      { text: "The one they go to when they need real talk", typeSlug: "the-storm-cloud" },
      { text: "The one who can fix anything", typeSlug: "the-swiss-army-knife" },
      { text: "The one who is impossible to predict", typeSlug: "the-wildcard" },
    ],
  },
  {
    id: 11,
    question: "You get an unexpected compliment from a stranger. You...",
    options: [
      { text: "Say thank you and feel warm for hours", typeSlug: "the-golden-retriever" },
      { text: "Wonder what their motive was", typeSlug: "the-overthinker" },
      { text: "Compliment them back immediately", typeSlug: "the-disco-ball" },
      { text: "Smile, say thanks, and move on", typeSlug: "the-spreadsheet" },
    ],
  },
  {
    id: 12,
    question: "It is Sunday evening. You are thinking about...",
    options: [
      { text: "All the things you said this weekend and whether they were okay", typeSlug: "the-overthinker" },
      { text: "How to make next week better than this one", typeSlug: "the-spreadsheet" },
      { text: "The great time you had and who to hang out with next", typeSlug: "the-golden-retriever" },
      { text: "Nothing in particular. You are just existing.", typeSlug: "the-cozy-blanket" },
    ],
  },
]
