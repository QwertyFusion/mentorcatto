import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useRef } from "react"; // Import useRef
import { useAuthStore } from "../store/authStore";
import { Check, CheckCheck, Loader2, RefreshCw, X } from "lucide-react";
import Confetti from "react-confetti";
import MarkdownRenderer from "./MarkdownRenderer";
import { useAiAgentStore } from "../store/aiAgentStore"; // Import your AI agent store
import IconStore from "./IconStore";
import { Link } from "react-router-dom";
import funnyLoadingTexts from "../store/funnyLoadingTexts";

const CourseContent = ({
    index,
    module,
    lesson,
    content,
    completed,
    onLessonComplete,
}) => {
    const [isMarking, setIsMarking] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [lessonCompleted, setLessonCompleted] = useState(completed);
    const { user } = useAuthStore();
    const { sendMessage, response, isLoading } = useAiAgentStore(); // Use AI agent store
    const [dialogOpen, setDialogOpen] = useState(false);
    const userInputRef = useRef("Please provide detailed content."); // Use ref for textarea
    const [loadingText, setLoadingText] = useState(
        funnyLoadingTexts[Math.floor(Math.random() * funnyLoadingTexts.length)]
    );
    const [showResposne, setShowResponse] = useState(false);
    const [AIResponse, setAIResponse] = useState(response);

    const handleMarkAsDone = async () => {
        try {
            setIsMarking(true);
            const response = await fetch(
                "http://localhost:3000/api/lessons/complete",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user._id,
                        lessonId: lesson._id,
                    }),
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to mark lesson as complete");
            }

            // Trigger confetti
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 4000); // 4s before stopping confetti

            // Trigger sidebar update
            setLessonCompleted(true);
            onLessonComplete();
        } catch (error) {
            console.error("Error marking lesson:", error);
        } finally {
            setIsMarking(false);
        }
    };

    const handleSendFeedback = async () => {
        setLoadingText(
            funnyLoadingTexts[
                Math.floor(Math.random() * funnyLoadingTexts.length)
            ]
        );
        const userInput = userInputRef.current.value; // Get value from ref
        const messageToSend = `Please change the content of lesson ${lesson.number} of module ${module.moduleNumber} according to the following instruction: ${userInput}`;
        await sendMessage(messageToSend);
        setShowResponse(true);
    };

    return (
        <div>
            {/* Smooth Confetti Animation */}
            <AnimatePresence>
                {showConfetti && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }} // Smooth fade-out
                        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
                    >
                        <Confetti numberOfPieces={200} gravity={0.3} />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-accent-4 inner-shadow rounded-ten p-4 flex flex-col items-center relative"
            >
                <div className="w-[80%] flex flex-col items-center">
                    <h2 className="mt-8 text-2xl text-center text-white">
                        <span className="text-primary">
                            Module {index}: {module.name}
                        </span>
                    </h2>
                    <h3 className="text-xl text-white mt-2">
                        Lesson {lesson.number}: {lesson.name}
                    </h3>
                    <hr className="border-1 border-accent-5 w-full mb-6 mt-2" />
                    {content && (
                        <div className="text-white mb-6 w-full">
                            <MarkdownRenderer content={content} />
                        </div>
                    )}

                    <div className="flex items-center justify-end w-full">
                        {/* New Feedback Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setDialogOpen(true)}
                            className="flex items-center justify-center cursor-pointer mb-4 px-6 py-2 bg-accent-1 text-secondary hover:bg-accent-1/90 drop-shadow-custom rounded-ten focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                        >
                            <RefreshCw className="w-5 h-5 mr-2" /> Re-create
                            lesson
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleMarkAsDone}
                            disabled={lessonCompleted || isMarking} // Disable if completed or marking
                            className={`mb-4 ml-4 px-6 py-2 bg-primary text-black hover:bg-primary/90 drop-shadow-custom rounded-ten focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 disabled:opacity-50 ${
                                lessonCompleted
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            }`}
                        >
                            <div className="flex items-center justify-center">
                                {lessonCompleted ? (
                                    <>
                                        <CheckCheck className="w-5 h-5 mr-2" />
                                        Marked as Done
                                    </>
                                ) : (
                                    <>
                                        <Check className="w-5 h-5 mr-2" />
                                        Mark as Done
                                    </>
                                )}
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Dialog Box for Feedback */}
            <AnimatePresence>
                {dialogOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center bg-[#00000071] z-40"
                    >
                        <div className="bg-accent-4 p-6 rounded-ten drop-shadow-custom w-1/3">
                            <button
                                onClick={() => {
                                    setDialogOpen(false);
                                }}
                                className="absolute top-2 right-2 mx-2 my-2 p-1 rounded-seven cursor-pointer hover:bg-accent-1 text-accent-5 hover:text-danger"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className="text-lg text-primary font-semibold">
                                Re-create lesson
                            </h2>
                            {!showResposne && (
                                <motion.h4
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-sm text-secondary"
                                >
                                    <span className="text-primary mr-2">
                                        {">"}
                                        {">"}
                                    </span>
                                    Lesson: {lesson.name}
                                </motion.h4>
                            )}
                            {!showResposne && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-sm my-2 font-inter text-accent-5"
                                >
                                    Please tell me below what to change, fix, or
                                    add. You can share your preferences here,
                                    such as if you would like the content to be
                                    presented in a more fun way.
                                </motion.p>
                            )}
                            {!showResposne && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center mt-4 p-1 w-full bg-accent-1 rounded-ten border-2 border-tertiary inner-shadow focus-within:border-primary transition duration-200"
                                >
                                    <textarea
                                        ref={userInputRef} // Attach ref to textarea
                                        className="w-full h-auto flex-1 bg-transparent outline-none p-2 text-white placeholder-gray-400 no-select"
                                        defaultValue="Please provide detailed content."
                                    />
                                </motion.div>
                            )}

                            {isLoading ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`flex items-center justify-center mt-2 ${
                                        isLoading ? "opacity-100" : "opacity-0"
                                    } transition-all ease-in-out duration-300`}
                                >
                                    <Loader2 className="animate-spin w-4 h-4 text-primary mr-2" />
                                    <p className="text-md text-gray-400">
                                        {loadingText}
                                    </p>
                                </motion.div>
                            ) : (
                                !showResposne && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={`w-full flex justify-end items-center mt-2 ${
                                            isLoading
                                                ? "opacity-0"
                                                : "opacity-100"
                                        } transition-all ease-in-out duration-300`}
                                    >
                                        <Link to="/chat">
                                            <motion.button
                                                whileTap={{ scale: 0.95 }}
                                                className="mr-2 hover:bg-accent-2 cursor-pointer text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 bg-accent-1 p-2 rounded-seven drop-shadow-custom"
                                            >
                                                Talk to mentor about feedback
                                                instead
                                            </motion.button>
                                        </Link>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleSendFeedback}
                                            className={`p-2 bg-primary cursor-pointer text-accent-4 hover:opacity-80 drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                                        >
                                            <IconStore
                                                name="send"
                                                className="w-5 h-5"
                                                color="accent-3"
                                            />
                                        </motion.button>
                                    </motion.div>
                                )
                            )}
                            {showResposne && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4"
                                >
                                    <h4 className="text-sm text-secondary">
                                        <span className="text-primary mr-2">
                                            {">"}
                                            {">"}
                                        </span>
                                        Response
                                    </h4>
                                    {/* Parse the response and log it */}
                                    {(() => {
                                        const parsedResponse = JSON.parse(
                                            response.response
                                        );

                                        console.log(parsedResponse.response);

                                        return parsedResponse.response.map(
                                            (item, idx) => {
                                                if (
                                                    item.id[
                                                        item.id.length - 1
                                                    ] === "AIMessage"
                                                ) {
                                                    // Check if content is an array or an object
                                                    const content =
                                                        item.kwargs.content;

                                                    // If content is an array, join it into a string
                                                    if (
                                                        Array.isArray(content)
                                                    ) {
                                                        return <p></p>;
                                                    }

                                                    // If content is an object, handle it accordingly
                                                    if (
                                                        typeof content ===
                                                        "object"
                                                    ) {
                                                        return <p></p>;
                                                    }

                                                    // If content is a string, render it directly
                                                    return (
                                                        <p
                                                            key={idx}
                                                            className="text-accent-5 text-sm"
                                                        >
                                                            {content}
                                                        </p>
                                                    );
                                                }
                                                return null; // Skip other message types
                                            }
                                        );
                                    })()}
                                    {/* Adjust this line based on the actual structure of response */}
                                    <div className="flex items-center justify-end">
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                setDialogOpen(false);
                                                setShowResponse(false);
                                                window.location.reload();
                                            }}
                                            className={`p-2 mt-4 flex items-center justify-center bg-primary cursor-pointer text-accent-4 hover:opacity-80 drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                                        >
                                            <RefreshCw className="w-5 h-5 mr-2" />
                                            Refresh to Apply Changes
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CourseContent;
