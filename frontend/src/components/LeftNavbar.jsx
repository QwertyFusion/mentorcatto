import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from "../store/authStore";
import { motion } from "framer-motion";

const LeftNavbar = () => {
    const { user, logout } = useAuthStore();
    const location = useLocation(); // Get the current location

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            {/* Navbar */}
            <div className={`
                h-screen 
                drop-shadow-custom 
                bg-accent-3 
                relative
                font-inter
                z-40
            `}>
                {/* Logo Section */}
                <div className="flex items-center px-8 pt-8 mb-12">
                    <img
                        className="w-10 h-10 object-cover drop-shadow-custom"
                        alt="Cat"
                        src="Cat.png"
                    />
                    <h1 className="ml-3 text-2xl font-bold text-white tracking-wide drop-shadow-custom">
                        MENTORCATTO
                    </h1>
                </div>

                {/* Navigation Links */}
                <nav className="px-4 space-y-3">
                    <Link 
                        to="/dashboard" 
                        className={`flex items-center p-4 ${location.pathname === '/dashboard' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >

                        <svg
                            className={`top-0 left-0 !relative w-6 h-6`}
                            fill="none"
                            height="20"
                            viewBox="0 0 20 20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.1111 6.66667V0H20V6.66667H11.1111ZM0 11.1111V0H8.88889V11.1111H0ZM11.1111 20V8.88889H20V20H11.1111ZM0 20V13.3333H8.88889V20H0ZM2.22222 8.88889H6.66667V2.22222H2.22222V8.88889ZM13.3333 17.7778H17.7778V11.1111H13.3333V17.7778ZM13.3333 4.44444H17.7778V2.22222H13.3333V4.44444ZM2.22222 17.7778H6.66667V15.5556H2.22222V17.7778Z"
                                fill={`${location.pathname === '/dashboard' ? '#ABF07C' : '#FFFFFF'}`}
                            />
                        </svg>
                        <span className="ml-3 font-medium">Dashboard</span>
                    </Link>

                    <Link 
                        to="/courses" 
                        className={`flex items-center p-4 ${location.pathname === '/courses' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <img
                            className={`top-0 left-0 !relative w-6 h-6`}
                            alt="Courses"
                            src="courses.svg"
                        />
                        
                        <span className="ml-3 font-medium">Courses</span>
                    </Link>

                    <Link 
                        to="/chat" 
                        className={`flex items-center p-4 ${location.pathname === '/chat' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <img
                            className={`top-0 left-0 !relative w-6 h-6`}
                            alt="Doubt Chat"
                            src="Chat.svg"
                        />
                        <span className="ml-3 font-medium">Doubt Chat</span>
                    </Link>

                    <Link 
                        to="/achievements" 
                        className={`flex items-center p-4 ${location.pathname === '/achievements' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <img
                            className='top-0 left-0 !relative w-6 h-6'
                            alt="Achievements"
                            src="/Award.svg"
                        />
                        <span className="ml-3 font-medium">Achievements</span>
                    </Link>

                    <Link 
                        to="/assessments" 
                        className={`flex items-center p-4 ${location.pathname === '/assessments' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <img
                            className={`top-0 left-0 !relative w-6 h-6`}
                            alt="Assessments"
                            src="Exam.svg"
                        />
                        <span className="ml-3 font-medium">Assessments</span>
                    </Link>
                </nav>

                {/* User Profile Section */}
                <div className="absolute bottom-8 left-0 right-0 px-6">
                    <Link to="/profile">
                        <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }} 
                                className="flex items-center w-full h-[55px] mb-4 p-2 border-2 bg-accent-3 border-tertiary drop-shadow-custom hover:bg-tertiary rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200">
                            <img
                                className="w-10 h-10 ml-[10px] rounded-full drop-shadow-custom"
                                alt="Profile"
                                src="/profile.png"
                            />
                            <span className="ml-3 text-white font-medium">{user.name}</span>
                        </motion.button>
                    </Link>
                    <div className="flex gap-2 h-[55px]">
                        <Link to="/settings">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }} 
                                className="flex items-center justify-center h-[55px] w-[55px] p-2 border-2 bg-accent-3 border-tertiary drop-shadow-custom hover:bg-tertiary rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200">
                                <img
                                    className="w-6 h-6"
                                    alt="Settings"
                                    src="Settings.svg"
                                />
                            </motion.button>
                            </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }} 
                            className="flex items-center justify-center flex-grow p-2 border-2 text-white bg-accent-3 border-tertiary drop-shadow-custom hover:bg-red-950 rounded-seven focus:outline-none focus:ring-2 focus:ring-red-950 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200" onClick={handleLogout}>
                            <img
                                className="w-5 h-5 mr-3"
                                alt="Logout"
                                src="Logout.svg"
                            />
                            <span className="">Log out</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftNavbar;