import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent-4 h-[84px]">
      <div className="bg-blue-400 max-w-5xl mx-auto h-full flex justify-between items-center">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" alt="Cat" src="Cat.png" />
          <span className="text-3xl font-semibold text-white">MentorCatto</span>
        </div>

        {/* Right side - Auth Buttons */}
        <div className="flex gap-3">
          <Link to="/login">
            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 py-2 px-3 bg-accent-1 text-white drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer">Login</motion.button>
          </Link>
          <Link to="/signup">
          <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-2 py-2 px-3 bg-primary text-black font-medium drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer">Sign up</motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
