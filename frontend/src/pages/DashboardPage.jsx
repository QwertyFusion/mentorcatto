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
                            {[
                                {
                                    link: "/courses",
                                    name: "courses",
                                    title: "Courses",
                                    desc: "Learn topics at your pace with AI-generated lessons personalized just for you.",
                                },
                                {
                                    link: "/chat",
                                    name: "chat",
                                    title: "Doubt Chat",
                                    desc: "Ask away your doubts to your personal mentor and get feedback instantly!",
                                },
                                {
                                    link: "/assessments",
                                    name: "exam",
                                    title: "Assessments",
                                    desc: "Take tests to assess your skills and get insights on what to improve and how to improve.",
                                },
                                {
                                    link: "/achievements",
                                    name: "achievements",
                                    title: "Achievements",
                                    desc: "Get badges on test completion and showcase them to friends. Happy learning!",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0px 4px 10px rgba(0,0,0,0.2)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-secondary p-4 rounded-md border-1 border-tertiary flex items-start"
                                >
                                    <Link to={item.link}>
                                        <motion.div
                                            className="bg-accent-3 inner-shadow min-h-[66px] min-w-[66px] flex justify-center items-center me-3 rounded-ten hover:outline-2 outline-offset-2 outline-accent-3"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconStore
                                                name={item.name}
                                                className="w-fit h-fit p-4"
                                                color="primary"
                                            />
                                        </motion.div>
                                    </Link>
                                    <div>
                                        <h3 className="font-bold">
                                            {item.title}
                                        </h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-accent-2 p-6 h-screen">
                        <h2 className="text-xl font-semibold mb-4 text-white">
                            Practice Your Skills
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Short Answer Type",
                                    desc: "Test your knowledge by solving problems to short answer type questions.",
                                },
                                {
                                    title: "Long Answer Type",
                                    desc: "Test your knowledge by solving problems to long answer type questions.",
                                },
                                {
                                    title: "MCQ & MSQ",
                                    desc: "Test your knowledge by solving problems to MCQ & MSQ answer type questions.",
                                },
                                {
                                    title: "Coding Questions",
                                    desc: "Solve real-world coding problems with what you have learnt.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0px 4px 10px rgba(0,0,0,0.2)",
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-accent-4 p-4 drop-shadow-custom"
                                >
                                    <h3 className="text-primary font-semibold mb-1">
                                        {item.title}
                                    </h3>
                                    <hr className="border-tertiary"></hr>
                                    <p className="text-white mt-1">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-screen flex flex-col mr-auto">
                <div className="min-w-[380px]">
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
