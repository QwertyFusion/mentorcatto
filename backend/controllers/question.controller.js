// Get questions for a module
export const getQuestions = async (req, res) => {
    try {
        // For now, we will return dummy questions
        const questions = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Lisbon"],
                correctAnswer: "Paris",
                type: "MCQ",
            },
            {
                question: "Select all prime numbers.",
                options: ["2", "3", "4", "5"],
                correctAnswer: "2, 3, 5",
                type: "MSQ",
            },
            {
                question: "Explain the theory of relativity.",
                type: "Long Answer",
            },
            {
                question: "Do you like cats?",
                type: "Short Answer",
            },
            {
                question: "Write a function to reverse a string.",
                type: "Coding",
            },
        ];

        res.status(200).json(questions);
    } catch (error) {
        console.error("Error in getQuestions:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
