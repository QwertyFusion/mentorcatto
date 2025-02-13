import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-accent-3">
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
              insights <span className="text-[#A7F288]">on DSA</span>
            </h1>
            <p className="text-gray-300 text-lg mt-6">
              Where to grow your DSA skills? MentorCatto!
            </p>
            <Link to="/signup">
              <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-primary text-black font-medium drop-shadow-custom rounded-seven focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer">Register</motion.button>
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
            <p className="text-gray-300 mt-2 text-lg">
              Who is MentorCatto suitable for?
            </p>
          </div>

          {/* Cards */}
          <div className="flex justify-evenly flex-col md:flex-row mx-7 md:mx-0 gap-6 mt-6">
            {/* Beginner Card */}
            <div className="bg-accent-1 rounded-ten p-8">
              <div className="w-14 h-14 bg-secondary rounded-seven mb-6 mx-auto flex items-center justify-center">
                <img src="Lollipop.svg" alt="Beginners" className="w-8 h-8" />
              </div>
              <h4 className="text-primary text-2xl font-bold mb-4">
                Beginner
              </h4>
              <p className="text-accent-5 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla diam
                adipiscing donec. Sed at et consectetur venenatis.
              </p>
            </div>

            {/* Intermediate Card */}
            <div className="bg-accent-1 rounded-ten p-8">
              <div className="w-14 h-14 bg-secondary rounded-seven mb-6 mx-auto flex items-center justify-center">
                <img src="Star.svg" alt="Intermediates" className="w-8 h-8" />
              </div>
              <h4 className="text-primary text-2xl font-bold mb-4">
                Intermediate
              </h4>
              <p className="text-accent-5 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla diam
                adipiscing donec. Sed at et consectetur venenatis.
              </p>
            </div>

            {/* Advanced Card */}
            <div className="bg-accent-1 rounded-ten p-8">
              <div className="w-14 h-14 bg-secondary rounded-seven mb-6 mx-auto flex items-center justify-center">
                <img src="Crown.svg" alt="Advanced" className="w-8 h-8" />
              </div>
              <h4 className=" text-primary text-2xl font-bold mb-4">
                Advanced
              </h4>
              <p className="text-accent-5 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla diam
                adipiscing donec. Sed at et consectetur venenatis.
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
              <span className="text-primary">a lot of nice stuff</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-8 mt-4 md:mt-0">
            <div className="flex items-center gap-4">
              <img src="Members.svg" alt="" className="w-8 h-8" />
              <div>
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-gray-300">Members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="CoursesGreen.svg" alt="" className="w-8 h-8" />
              <div>
                <p className="text-2xl font-bold text-white">46</p>
                <p className="text-gray-300">Modules</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="ExamGreen.svg" alt="" className="w-8 h-8" />
              <div>
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-gray-300">Question Types</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="AwardGreen.svg" alt="" className="w-8 h-8" />
              <div>
                <p className="text-2xl font-bold text-white">46</p>
                <p className="text-gray-300">Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-fit bg-accent-4  border-t border-gray-800 py-5 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-[40px] h-[40px]" alt="Cat" src="Cat.png" />
            <span className="text-xl font-semibold text-white">
              MENTORCATTO
            </span>
          </div>
          <p className="text-gray-400 mt-2 md:mt-0">Copyright © 2025 MentorCatto</p>
          <button className="px-4 py-2 bg-accent-2 rounded-lg text-white text-sm flex items-center gap-2 mt-2 md:mt-0">
            <img src="/github-icon.png" alt="" className="w-4 h-4" />
            GitHub
          </button>
        </footer>
    </div>
  );
};

export default HomePage;