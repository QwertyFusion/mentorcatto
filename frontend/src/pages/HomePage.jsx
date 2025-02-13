import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";
import IconStore from "../components/IconStore";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-accent-3 overflow-y-auto">
            <Navbar />

            {/* Main Content */}
            <div className="max-w-7xl w-full mx-auto pt-32 px-4">
                {/* Hero Section */}
                <div className="mt-10 flex flex-col gap-5 md:flex-row justify-between items-center md:h-fit">
                    {/* Left Content */}
                    <div className="md:mb-0">
                        <h1 className="text-6xl md:text-7xl leading-tight font-bold text-white">
                            Lessons and
                            <br />
                            insights{" "}
                            <span className="text-primary">on DSA</span>
                        </h1>
                        <p className="text-white text-lg mt-6">
                            Where to grow your DSA skills? MentorCatto!
                        </p>
                        <Link to="/signup">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 px-8 py-3 bg-primary text-black font-medium drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
                            >
                                Register
                            </motion.button>
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-[450px]">
                        <img
                            src="Illustration.svg"
                            alt="DSA Learning"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-40 text-center">
                    <div>
                        <h2 className="text-primary text-[32px] md:text-[40px] font-bold leading-tight">
                            Learn entire DSA till placements
                        </h2>
                        <h3 className="text-white text-[32px] md:text-[40px] font-bold mt-[-10px]">
                            in a single system
                        </h3>
                        <p className="text-white mt-2 text-lg">
                            Who is MentorCatto suitable for?
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="flex justify-evenly flex-col md:flex-row mx-7 md:mx-0 gap-6 mt-6">
                        {/* Beginner Card */}
                        <div className="bg-accent-1 rounded-ten p-8">
                            <div className="w-14 h-14 bg-secondary rounded-br-3xl rounded-tl-3xl rounded-bl-seven rounded-tr-seven mb-6 mx-auto flex items-center justify-center">
                                <img
                                    src="Beginner.svg"
                                    alt="Beginners"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h4 className="text-primary text-2xl font-bold mb-4">
                                Beginner
                            </h4>
                            <p className="text-accent-5 text-base leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Tellus
                                nulla diam adipiscing donec. Sed at et
                                consectetur venenatis.
                            </p>
                        </div>

                        {/* Intermediate Card */}
                        <div className="bg-accent-1 rounded-ten p-8">
                            <div className="w-14 h-14 bg-secondary rounded-br-3xl rounded-tl-3xl rounded-bl-seven rounded-tr-seven mb-6 mx-auto flex items-center justify-center">
                                <img
                                    src="Intermediate.svg"
                                    alt="Intermediates"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h4 className="text-primary text-2xl font-bold mb-4">
                                Intermediate
                            </h4>
                            <p className="text-accent-5 text-base leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Tellus
                                nulla diam adipiscing donec. Sed at et
                                consectetur venenatis.
                            </p>
                        </div>

                        {/* Advanced Card */}
                        <div className="bg-accent-1 rounded-ten p-8">
                            <div className="w-14 h-14 bg-secondary rounded-br-3xl rounded-tl-3xl rounded-bl-seven rounded-tr-seven mb-6 mx-auto flex items-center justify-center">
                                <img
                                    src="Advanced.svg"
                                    alt="Advanced"
                                    className="w-8 h-8"
                                />
                            </div>
                            <h4 className=" text-primary text-2xl font-bold mb-4">
                                Advanced
                            </h4>
                            <p className="text-accent-5 text-base leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Tellus
                                nulla diam adipiscing donec. Sed at et
                                consectetur venenatis.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="my-20 flex flex-col md:flex-row justify-between items-center md:h-fit">
                    <div className="">
                        <h2 className="text-5xl md:text-4xl font-bold text-white leading-tight">
                            Our platform offers
                            <br />
                            <span className="text-primary">
                                a lot of nice stuff
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-x-20 gap-y-8 mt-4 md:mt-0">
                        <div className="flex items-center gap-4">
                            <IconStore
                                name="users"
                                className="w-10 h-10 ml-[-4px]"
                                color="primary"
                            />
                            <div className="ml-[-4px]">
                                <p className="text-2xl font-bold text-white">
                                    2
                                </p>
                                <p className="text-accent-5">Members</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <IconStore
                                name="courses"
                                className="w-8 h-8"
                                color="primary"
                            />
                            <div>
                                <p className="text-2xl font-bold text-white">
                                    46
                                </p>
                                <p className="text-accent-5">Modules</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <IconStore
                                name="exam"
                                className="w-8 h-8"
                                color="primary"
                            />
                            <div>
                                <p className="text-2xl font-bold text-white">
                                    5
                                </p>
                                <p className="text-accent-5">Question Types</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <IconStore
                                name="achievements"
                                className="w-8 h-8"
                                color="primary"
                            />
                            <div>
                                <p className="text-2xl font-bold text-white">
                                    46
                                </p>
                                <p className="text-accent-5">Achievements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="h-fit bg-accent-4 py-5 px-10 md:px-0">
                <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-3 justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-10 h-10"
                            alt="MentorCatto Logo"
                            src="Cat.png"
                        />
                        <span className="text-3xl font-semibold text-white">
                            MentorCatto
                        </span>
                    </div>

                    <p className="text-accent-5 mt-2 md:mt-0 text-center hidden md:block">
                        Copyright © 2025 MentorCatto
                    </p>
                    <div className="flex flex-row justify-end items-end">
                        <a
                            href="https://github.com/QwertyFusion/mentorcatto"
                            target="_blank"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-2 py-2 px-3 bg-accent-1 text-white drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer flex flex-row items-center gap-3"
                            >
                                <img
                                    src="Github.svg"
                                    alt=""
                                    className="w-5 h-5"
                                />
                                GitHub Repository
                            </motion.button>
                        </a>
                    </div>
                </div>
                <p className="text-accent-5 mt-5 text-center block md:hidden">
                    Copyright © 2025 MentorCatto
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
