import { motion } from "framer-motion";

const CourseContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full mx-auto mt-10 p-8 bg-accent-4 bg-opacity-80 backdrop-filter rounded-xl drop-shadow-custom"
        >
            <h2 className="text-2xl text-center text-white">
                <span className="text-primary">Choose</span> on a lesson to
                start learning!
            </h2>
        </motion.div>
    );
};

export default CourseContent;
