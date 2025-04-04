import React, { useState } from "react";
import PropTypes from "prop-types";
import IconStore from "./IconStore";

const AssessmentView = ({ questions, onClose }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionIndex, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: answer,
        }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Finalize the assessment when the last question is reached
            console.log("Submitted Answers:", answers);
            onClose(); // Close the assessment view
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="fixed inset-0 bg-accent-2 flex flex-col items-center justify-start z-50 overflow-auto">
            <div className="flex flex-col w-5xl mb-4 mt-[10vh]">
                <h2 className="text-5xl font-bold text-primary mb-4">
                    Assessment
                </h2>
                <p className="text-white mb-4">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </p>
            </div>
            <div className="bg-accent-4 p-8 rounded-ten inner-shadow w-5xl max-w-5xl mb-10">
                <p className="text-2xl font-semibold text-primary">
                    Question {currentQuestionIndex + 1} ({currentQuestion.type}
                    ):
                </p>
                <p className="text-white pt-2">{currentQuestion.question}</p>
            </div>
            <div
                className={`bg-accent-4 focus-within:border-primary focus-within:border-1 rounded-ten inner-shadow w-5xl max-w-5xl ${
                    currentQuestion.type === "Coding" ? "p-8" : "p-2"
                }`}
            >
                {currentQuestion.type === "MCQ" && (
                    <div className="space-y-2 p-8">
                        {currentQuestion.options.map((option, i) => (
                            <div
                                key={i}
                                className="flex items-center text-white"
                            >
                                <input
                                    type="radio"
                                    name={`question-${currentQuestionIndex}`}
                                    value={option}
                                    onChange={() =>
                                        handleAnswerChange(
                                            currentQuestionIndex,
                                            option
                                        )
                                    }
                                    className="mr-2 accent-primary" // Custom color for radio button
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                )}
                {currentQuestion.type === "MSQ" && (
                    <div className="space-y-2 p-8">
                        {currentQuestion.options.map((option, i) => (
                            <div
                                key={i}
                                className="flex items-center text-white"
                            >
                                <input
                                    type="checkbox"
                                    name={`question-${currentQuestionIndex}`}
                                    value={option}
                                    onChange={(e) => {
                                        const selectedOptions =
                                            answers[currentQuestionIndex] || [];
                                        if (e.target.checked) {
                                            selectedOptions.push(option);
                                        } else {
                                            const index =
                                                selectedOptions.indexOf(option);
                                            if (index > -1) {
                                                selectedOptions.splice(
                                                    index,
                                                    1
                                                );
                                            }
                                        }
                                        handleAnswerChange(
                                            currentQuestionIndex,
                                            selectedOptions
                                        );
                                    }}
                                    className="mr-2 accent-[#ABF07C]" // Custom color for checkbox
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                )}
                {currentQuestion.type === "Short Answer" && (
                    <textarea
                        className="rounded w-full p-2 text-white outline-none" // Set width to 100%
                        rows="5"
                        onChange={(e) =>
                            handleAnswerChange(
                                currentQuestionIndex,
                                e.target.value
                            )
                        }
                        value={answers[currentQuestionIndex] || ""}
                    />
                )}
                {currentQuestion.type === "Long Answer" && (
                    <textarea
                        className="rounded w-full text-white outline-none" // Set width to 100%
                        rows="10"
                        onChange={(e) =>
                            handleAnswerChange(
                                currentQuestionIndex,
                                e.target.value
                            )
                        }
                        value={answers[currentQuestionIndex] || ""}
                    />
                )}
                {currentQuestion.type === "Coding" && (
                    <>
                        <div className="flex items-center justify-start pt-2 px-2">
                            <IconStore
                                name="courses"
                                className="w-6 h-6"
                                color="primary"
                            />
                            <p className="text-primary font-bold text-lg pl-2">
                                Code
                            </p>
                        </div>
                        <textarea
                            className="rounded w-full p-2 text-white outline-none" // Set width to 100%
                            rows="25"
                            placeholder="Write your code here..."
                            onChange={(e) =>
                                handleAnswerChange(
                                    currentQuestionIndex,
                                    e.target.value
                                )
                            }
                            value={answers[currentQuestionIndex] || ""}
                        />
                    </>
                )}
            </div>
            <div className="flex w-5xl justify-end mt-4">
                <button
                    onClick={handleNext}
                    className="bg-accent-3 border-1 mb-[10vh] border-primary text-white px-10 py-2 rounded-ten cursor-pointer hover:bg-accent-4 transition-all drop-shadow-custom"
                >
                    {currentQuestionIndex < questions.length - 1
                        ? "Submit"
                        : "Submit and End Test"}
                </button>
            </div>
        </div>
    );
};

AssessmentView.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.string),
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AssessmentView;
