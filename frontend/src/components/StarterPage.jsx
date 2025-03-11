import { motion } from "framer-motion";

const StarterPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full mx-auto mt-10 p-8 bg-accent-4 bg-opacity-80 backdrop-filter rounded-ten inner-shadow"
        >
            <h2 className="text-xl text-center text-white no-select">
                <span className="text-primary">Choose</span> on a lesson to
                start learning!
            </h2>
        </motion.div>
    );
};

export default StarterPage;
