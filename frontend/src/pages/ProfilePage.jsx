import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import LeftNavbar from "../components/LeftNavbar";

const ProfilePage = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="h-screen w-full flex">
            <div className="min-w-[250px]">
                <LeftNavbar />
            </div>

            <div className="flex-1 bg-accent-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full mx-auto mt-10 p-8 bg-accent-4 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center bg-primary text-transparent bg-clip-text">
                        Profile Page
                    </h2>

                    <div className="space-y-6">
                        <motion.div
                            className="p-4 bg-accent-3 bg-opacity-50 rounded-seven border-2 border-tertiary drop-shadow-custom"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-primary mb-3">
                                Profile Information
                            </h3>
                            <p className="text-white">Name: {user.name}</p>
                            <p className="text-white">Email: {user.email}</p>
                        </motion.div>
                        <motion.div
                            className="p-4 bg-accent-3 bg-opacity-50 rounded-seven border-2 border-tertiary drop-shadow-custom"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold text-primary mb-3">
                                Account Activity
                            </h3>
                            <p className="text-white">
                                <span className="font-bold">Joined: </span>
                                {new Date(user.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </p>
                            <p className="text-white">
                                <span className="font-bold">Last Login: </span>
                                {formatDate(user.lastLogin)}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLogout}
                            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
							font-bold rounded-seven drop-shadow-custom hover:from-green-600 hover:to-emerald-700
							focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Logout
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProfilePage;
