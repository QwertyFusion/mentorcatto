import { Link } from "react-router-dom";
import IconStore from "../components/IconStore";
import LeftNavbar from "../components/LeftNavbar";
import RightSideBar from "../components/RightSideBar";
import { motion } from "framer-motion";

const DashboardPage = () => {
    return (
        <div className="h-screen w-full flex">
            <div className="min-w-[250px]">
                <LeftNavbar />
            </div>

            <div className="flex-1">
                <div className="grid grid-cols-1">
                    <div className="bg-secondary p-6 h-full">
                        <div className="mb-1">
                            <h1 className="text-4xl font-inter mt-2 mb-6 text-black">
                                print("
                                <span className="text-black font-inter font-bold">
                                    <em>Hello DSA!</em>
                                </span>
                                ")
                            </h1>
                        </div>
                        <h2 className="text-xl font-bold mb-4">
                            Platform Guide
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start"
                            >
                                <Link to="/courses">
                                    <div className="bg-accent-3 inner-shadow min-h-[66px] min-w-[66px] flex justify-center items-center me-3 rounded-ten hover:outline-2 outline-offset-2 outline-accent-3">
                                        <IconStore
                                            name="courses"
                                            className="w-fit h-fit p-4"
                                            color="primary"
                                        />
                                    </div>
                                </Link>

                                <div>
                                    <h3 className="font-bold">Courses</h3>
                                    <p>
                                        Learn topics at your pace with
                                        AI-generated lessons personalized just
                                        for you.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start"
                            >
                                <Link to="/chat">
                                    <div className="bg-accent-3 inner-shadow min-h-[66px] min-w-[66px] flex justify-center items-center me-3 rounded-ten hover:outline-2 outline-offset-2 outline-accent-3">
                                        <IconStore
                                            name="chat"
                                            className="w-fit h-fit p-4"
                                            color="primary"
                                        />
                                    </div>
                                </Link>
                                <div>
                                    <h3 className="font-bold">Doubt Chat</h3>
                                    <p>
                                        Ask away your doubts to your personal
                                        mentor and get feedback instantly!
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start"
                            >
                                <Link to="/assessments">
                                    <div className="bg-accent-3 inner-shadow min-h-[66px] min-w-[66px] flex justify-center items-center me-3 rounded-ten hover:outline-2 outline-offset-2 outline-accent-3">
                                        <IconStore
                                            name="exam"
                                            className="w-fit h-fit p-4"
                                            color="primary"
                                        />
                                    </div>
                                </Link>
                                <div>
                                    <h3 className="font-bold">Assessments</h3>
                                    <p>
                                        Take tests to assess your skills and get
                                        insights on what to improve and how to
                                        improve.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start"
                            >
                                <Link to="/achievements">
                                    <div className="bg-accent-3 inner-shadow min-h-[66px] min-w-[66px] flex justify-center items-center me-3 rounded-ten hover:outline-2 outline-offset-2 outline-accent-3">
                                        <IconStore
                                            name="achievements"
                                            className="w-fit h-fit p-4"
                                            color="primary"
                                        />
                                    </div>
                                </Link>
                                <div>
                                    <h3 className="font-bold">Achievements</h3>
                                    <p>
                                        Get badges on test completion and
                                        showcase them to friends. Happy
                                        learning!
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="bg-accent-2 p-6 h-screen">
                        <h2 className="text-xl font-semibold mb-4 text-white">
                            Practice Your Skills
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-accent-4 p-4 drop-shadow-custom"
                            >
                                <h3 className="text-primary font-semibold mb-1">
                                    Short Answer Type
                                </h3>
                                <hr className="border-tertiary"></hr>
                                <p className="text-white mt-1">
                                    Test your knowledge by solving problems to
                                    short answer type questions.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-accent-4 p-4 drop-shadow-custom"
                            >
                                <h3 className="text-primary font-semibold mb-1">
                                    Long Answer Type
                                </h3>
                                <hr className="border-tertiary"></hr>
                                <p className="text-white mt-1">
                                    Test your knowledge by solving problems to
                                    long answer type questions.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-accent-4 p-4 drop-shadow-custom"
                            >
                                <h3 className="text-primary font-semibold mb-1">
                                    MCQ & MSQ
                                </h3>
                                <hr className="border-tertiary"></hr>
                                <p className="text-white mt-1">
                                    Test your knowledge by solving problems to
                                    MCQ & MSQ answer type questions.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="bg-accent-4 p-4 drop-shadow-custom"
                            >
                                <h3 className="text-primary font-semibold mb-1">
                                    Coding Questions
                                </h3>
                                <hr className="border-tertiary"></hr>
                                <p className="text-white mt-1">
                                    Solve real-world coding problems with what
                                    you have learnt.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-screen flex flex-col mr-auto">
                <div className="min-w-[380px]">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
