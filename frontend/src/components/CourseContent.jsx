import { motion } from "framer-motion";

const CourseContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-4 bg-accent-4 inner-shadow rounded-ten flex flex-col items-center"
    >
      <h2 className="text-xl text-center text-white">
        <span className="text-primary">Choose</span> on a lesson to start
        learning!
      </h2>
    </motion.div>
  );
};

export default CourseContent;
