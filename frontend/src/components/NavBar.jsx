import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
    const { isAuthenticated, user } = useAuthStore();
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-10 md:px-0 bg-accent-4 h-fit py-5">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
                {/* Left side - Logo and Brand */}
                <Link to="/">
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
                </Link>

                {/* Center section - Links for authenticated users */}
                {isAuthenticated && (
                    <div className="flex gap-5">
                        <Link
                            to="/dashboard"
                            className="text-white hover:text-primary hover:bg-accent-1 p-2 rounded-seven drop-shadow-custom"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/chat"
                            className="text-white hover:text-primary hover:bg-accent-1 p-2 rounded-seven drop-shadow-custom"
                        >
                            Mentor Chat
                        </Link>
                        <Link
                            to="/courses"
                            className="text-white hover:text-primary hover:bg-accent-1 p-2 rounded-seven drop-shadow-custom"
                        >
                            Courses
                        </Link>
                        <Link
                            to="/achievements"
                            className="text-white hover:text-primary hover:bg-accent-1 p-2 rounded-seven drop-shadow-custom"
                        >
                            Achievements
                        </Link>
                        <Link
                            to="/assessments"
                            className="text-white hover:text-primary hover:bg-accent-1 p-2 rounded-seven drop-shadow-custom"
                        >
                            Assessments
                        </Link>
                    </div>
                )}

                {/* Right side - Conditional Rendering */}
                <div className="flex gap-3">
                    {isAuthenticated ? (
                        <Link to="/profile">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center w-full p-2 bg-accent-1 text-white hover:text-primary drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
                            >
                                <img
                                    className="w-6 h-6 rounded-full drop-shadow-custom"
                                    alt="Profile"
                                    src="/profile.png"
                                />
                                <span className="ml-3 font-medium">
                                    {user.name}
                                </span>
                            </motion.button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ml-2 py-2 px-3 bg-accent-1 text-white drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
                                >
                                    Login
                                </motion.button>
                            </Link>
                            <Link to="/signup">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="ml-2 py-2 px-3 bg-primary text-black font-medium drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer"
                                >
                                    Sign up
                                </motion.button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
