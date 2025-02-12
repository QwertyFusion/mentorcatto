import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from "../store/authStore";
import { motion } from "framer-motion";
import IconStore from './IconStore';

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
                        <IconStore name="dashboard" className="w-5 h-5" color={`${location.pathname === '/dashboard' ? 'primary' : 'white'}`} />
                        <span className="ml-3 font-medium">Dashboard</span>
                    </Link>

                    <Link 
                        to="/chat" 
                        className={`flex items-center p-4 ${location.pathname === '/chat' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <IconStore name="chat" className="w-5 h-5" color={`${location.pathname === '/chat' ? 'primary' : 'white'}`} />
                        <span className="ml-3 font-medium">Mentor Chat</span>
                    </Link>

                    <Link 
                        to="/courses" 
                        className={`flex items-center p-4 ${location.pathname === '/courses' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <IconStore name="courses" className="w-5 h-5" color={`${location.pathname === '/courses' ? 'primary' : 'white'}`} />
                        <span className="ml-3 font-medium">Courses</span>
                    </Link>

                    <Link 
                        to="/achievements" 
                        className={`flex items-center p-4 ${location.pathname === '/achievements' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <IconStore name="achievements" className="w-5 h-5" color={`${location.pathname === '/achievements' ? 'primary' : 'white'}`} />
                        <span className="ml-3 font-medium">Achievements</span>
                    </Link>

                    <Link 
                        to="/assessments" 
                        className={`flex items-center p-4 ${location.pathname === '/assessments' ? 'bg-accent-4 text-primary' : 'hover:bg-accent-4 text-white'} drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200`}
                    >
                        <IconStore name="exam" className="w-5 h-5" color={`${location.pathname === '/assessments' ? 'primary' : 'white'}`} />
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
                                className="flex items-center justify-center h-[55px] w-[55px] p-2 border-2 bg-accent-3 border-tertiary drop-shadow-custom hover:bg-tertiary rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                            >
                                <IconStore name="settings" className="w-6 h-6" color={`${location.pathname === '/settings' ? 'primary' : 'white'}`} />
                            </motion.button>
                            </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }} 
                            className="flex items-center justify-center flex-grow p-2 border-2 text-white bg-accent-3 border-tertiary drop-shadow-custom hover:bg-red-950 rounded-seven focus:outline-none focus:ring-2 focus:ring-red-950 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200" onClick={handleLogout}
                            >
                            <IconStore name="logout" className="w-5 h-5" color='white' />
                            <span className="">Log out</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftNavbar;