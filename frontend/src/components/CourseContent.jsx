import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const CourseContent = ({ module, lesson, content }) => {
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
                    <span className="text-primary">Module {module.name}</span>
                </h2>
                <h3 className="text-xl text-white mt-2">{lesson.name}</h3>
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
            </div>
        </motion.div>
    );
};

// Add PropTypes validation
CourseContent.propTypes = {
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
        introduction: '',
        content: '',
        summary: '',
    },
};

export default CourseContent;
