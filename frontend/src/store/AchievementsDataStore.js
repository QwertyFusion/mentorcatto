const achievements = [
    {
        title: "Getting Started",
        description: "Login for the first time",
        unlocked: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#abf07c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cat"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>',
    },
    {
        title: "Novice",
        description: "Complete your very first assessment",
        unlocked: true,
    },
    {
        title: "Medieval Knight",
        description: "Complete five assessments",
        unlocked: false,
    },
    {
        title: "Where's the carrot?",
        description: "Practice your first five questions",
        unlocked: true,
    },
    {
        title: "A friend in need",
        description: "Take help from Agent while practicing",
        unlocked: true,
    },
    {
        title: "Wizard",
        description: "Score above 80%",
        unlocked: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#abf07c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wand-sparkles"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>',
    },
    {
        title: "Found'em all!",
        description: "Navigate through all the pages",
        unlocked: true,
    },
    {
        title: "Crowned them all!",
        description: "Practice 200 questions",
        unlocked: false,
    },
    {
        title: "Aim Bot",
        description: "Score 100% in 3 consecutive modules",
        unlocked: false,
    },
    {
        title: "See you later!",
        description: "Change your preferred language",
        unlocked: true,
    },
    {
        title: "Perfectionist",
        description: "Complete all the modules",
        unlocked: false,
    },
    {
        title: "It's Over 9000!",
        description: "Solve 9001 problems. Just kidding, solve 100.",
        unlocked: false,
    },
    {
        title: "Recursion Master",
        description:
            "Write a recursive function without infinite looping (on the first try).",
        unlocked: false,
    },
    {
        title: "Big O? More Like Big NO!",
        description: "Optimize an O(n^2) solution to O(n log n).",
        unlocked: false,
    },
    {
        title: "Speedrunner",
        description: "Solve 10 problems under 10 minutes.",
        unlocked: false,
    },
    {
        title: "Hackerman",
        description: "Use a clever one-liner to solve a problem.",
        unlocked: false,
    },
    {
        title: "Git Gud",
        description: "Spend 5 hours straight solving DSA problems.",
        unlocked: false,
    },
    {
        title: "The Dark Souls of DSA",
        description: "Solve a problem rated as 'very hard' without hints.",
        unlocked: false,
    },
    {
        title: "Hello, World!",
        description: "Print 'Hello, World!' in at least 3 different languages.",
        unlocked: true,
    },
    {
        title: "The Floor is JavaScript",
        description:
            "Write a solution in Python after struggling with JavaScript.",
        unlocked: false,
    },
    {
        title: "Bracket Buster",
        description: "Forget a closing bracket and spend 15 minutes debugging.",
        unlocked: true,
    },
    {
        title: "Stack Overflowed",
        description: "Use recursion and accidentally cause a stack overflow.",
        unlocked: true,
    },
    {
        title: "NPC Dialogue",
        description: "Ask ChatGPT the same question 5 different ways.",
        unlocked: true,
    },
    {
        title: "Binary Brute",
        description: "Solve 10 problems using only bit manipulation.",
        unlocked: false,
    },
    {
        title: "The Chosen One",
        description:
            "Solve a problem using Dynamic Programming on your first try.",
        unlocked: false,
    },
    {
        title: "Dungeon Master",
        description: "Successfully traverse a maze using BFS or DFS.",
        unlocked: false,
    },
    {
        title: "RNGesus Blesses You",
        description:
            "Pass all test cases on the first attempt (without debugging).",
        unlocked: false,
    },
    {
        title: "Meme Coder",
        description: "Write a solution entirely in meme variable names.",
        unlocked: true,
    },
    {
        title: "Segmentation Fault (Core Dumped)",
        description: "Experience your first segmentation fault in C/C++.",
        unlocked: true,
    },
    {
        title: "The Linked List Awakens",
        description: "Implement a linked list without looking up the syntax.",
        unlocked: false,
    },
    {
        title: "Just One More Problem...",
        description: "Solve problems late into the night (past 2 AM).",
        unlocked: true,
    },
];

export default achievements;