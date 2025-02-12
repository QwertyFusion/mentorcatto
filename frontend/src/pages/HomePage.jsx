import Navbar from "../components/NavBar";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import IconStore from "../components/IconStore";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-accent-3">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full left-0 right-0 mx-auto px-[120px] pt-32">
        <div className="flex justify-between items-start">
          {/* Left Content */}
          <div className="max-w-[600px]">
            <h1 className="text-[64px] leading-tight font-bold text-white">
              Lessons and
              <br />
              insights <span className="text-[#A7F288]">on DSA</span>
            </h1>
            <p className="text-gray-300 text-lg mt-6">
              Where to grow your DSA skills? MentorCatto!
            </p>
            <button className="mt-8 px-8 py-3 bg-[#A7F288] hover:bg-[#95D979] rounded-lg text-black font-medium">
              Register
            </button>
          </div>

          {/* Right Image */}
          <div className="w-[450px]">
            <img
              src="Illustration.svg"
              alt="DSA Learning"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-40 text-center">
          <h2 className="text-[#A7F288] text-[40px] font-bold leading-tight">
            Learn entire DSA till placements
          </h2>
          <h3 className="text-white text-[40px] font-bold mt-2">
            in a single system
          </h3>
          <p className="text-gray-300 mt-6 text-lg">
            Who is MentorCatto suitable for?
          </p>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            {/* Beginners Card */}
            <div className="bg-[#42424E] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#40414F] rounded-xl mb-6 mx-auto flex items-center justify-center">
                <img src="Lollipop.svg" alt="Beginners" className="w-8 h-8" />
              </div>
              <h4 className="text-[#A7F288] text-2xl font-bold mb-4">
                Beginners
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla diam
                adipiscing donec. Sed at et consectetur venenatis.
              </p>
            </div>

            {/* Intermediates Card */}
            <div className="bg-[#42424E] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#40414F] rounded-xl mb-6 mx-auto flex items-center justify-center">
                <img src="Star.svg" alt="Intermediates" className="w-8 h-8" />
              </div>
              <h4 className="text-[#A7F288] text-2xl font-bold mb-4">
                Intermediates
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla diam
                adipiscing donec. Sed at et consectetur venenatis.
              </p>
            </div>

            {/* Advanced Card */}
            <div className="bg-[#42424E] rounded-2xl p-8">
              <div className="w-14 h-14 bg-[#40414F] rounded-xl mb-6 mx-auto flex items-center justify-center">
                <img src="Crown.svg" alt="Advanced" className="w-8 h-8" />
              </div>
              <h4 className="text-[#A7F288] text-2xl font-bold mb-4">
                Advanced
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla diam
                adipiscing donec. Sed at et consectetur venenatis.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-40">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[40px] font-bold text-white leading-tight">
                Our platform offers
                <br />
                <span className="text-[#A7F288]">a lot of nice stuff</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <img src="Members.svg" alt="" className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-gray-300">Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="courses.svg" alt="" className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold text-white">46</p>
                  <p className="text-gray-300">Modules</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="Exam.svg" alt="" className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="text-gray-300">Question Types</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="Award.svg" alt="" className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold text-white">46</p>
                  <p className="text-gray-300">Achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-[40px] h-[40px]" alt="Cat" src="Cat.png" />
            <span className="text-xl font-semibold text-white">
              MENTORCATTO
            </span>
          </div>
          <p className="text-gray-400">Copyright © 2025 MentorCatto</p>
          <button className="px-4 py-2 bg-accent-2 rounded-lg text-white text-sm flex items-center gap-2">
            <img src="/github-icon.png" alt="" className="w-4 h-4" />
            GitHub
          </button>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
