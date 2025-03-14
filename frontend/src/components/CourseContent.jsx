import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const CourseContent = ({ index, module, lesson, content }) => {
    const [isMarking, setIsMarking] = useState(false);
    const { user } = useAuthStore();

    const handleMarkAsDone = async () => {
        try {
            setIsMarking(true);
            const response = await fetch('http://localhost:3000/api/lessons/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id,
                    lessonId: lesson._id
                }),
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Failed to mark lesson as complete');
            }

            // You might want to show a success message or update UI
            console.log('Lesson marked as complete!');
        } catch (error) {
            console.error('Error marking lesson:', error);
        } finally {
            setIsMarking(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-accent-4 inner-shadow rounded-ten p-4 flex flex-col items-center"
        >
            <div className="w-[80%] flex flex-col items-center">
                <h2 className="text-2xl text-center text-white">
                    <span className="text-primary">
                        Module {index}: {module.name}
                    </span>
                </h2>
                <h3 className="text-xl text-white mt-2">
                    Lesson: {lesson.name}
                </h3>
                <hr className="border-1 border-accent-5 w-full mb-6 mt-2" />

                {/* Introduction */}
                {content?.introduction && (
                    <div className="text-white mb-6">
                        {content.introduction}
                    </div>
                )}

                {/* Main Content */}
                {content?.content && (
                    <div className="text-white mb-6 w-full">
                        {content.content}
                    </div>
                )}

                {/* Summary */}
                {content?.summary && (
                    <div className="text-white mt-4">
                        <h4 className="text-lg font-semibold mb-2">Summary</h4>
                        {content.summary}
                    </div>
                )}

                {/* Add Mark as Done button */}
                <button
                    onClick={handleMarkAsDone}
                    disabled={isMarking}
                    className="mt-8 px-6 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                    {isMarking ? 'Marking...' : 'Mark as Done'}
                </button>
            </div>
        </motion.div>
    );
};

// Add PropTypes validation
CourseContent.propTypes = {
    index: PropTypes.number.isRequired,
    module: PropTypes.shape({
        name: PropTypes.string.isRequired,
        _id: PropTypes.string,
    }).isRequired,
    lesson: PropTypes.shape({
        name: PropTypes.string.isRequired,
        _id: PropTypes.string,
        number: PropTypes.number,
    }).isRequired,
    content: PropTypes.shape({
        introduction: PropTypes.string,
        content: PropTypes.string,
        summary: PropTypes.string,
    }),
};

// Add default props
CourseContent.defaultProps = {
    content: {
        introduction: "",
        content: "",
        summary: "",
    },
};

export default CourseContent;
