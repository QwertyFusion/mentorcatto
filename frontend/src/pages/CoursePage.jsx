import LeftNavbar from "../components/LeftNavbar";
import { motion } from "framer-motion";
import CoursesRightSideBar from "../components/CoursesRightSideBar";

const CoursePage = () => {
    return (
        <div className="h-screen w-full flex">
            <div className="w-fit">
                <LeftNavbar />
            </div>

            <div className="flex-1 font-inter bg-accent-2 p-4 flex flex-col">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full mx-auto mt-10 p-8 bg-accent-4 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center bg-primary text-transparent bg-clip-text">
                        Courses
                    </h2>
                </motion.div>
            </div>
            <div className="min-w-[350px]">
                <CoursesRightSideBar />
            </div>
        </div>
    );
};

export default CoursePage;
