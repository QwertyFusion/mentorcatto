import React from 'react';
import Badge from "../components/badge";
import LeftNavbar from "../components/LeftNavbar";
import { motion } from "framer-motion";

const AchievementsPage = () => {
  const achievements = [
    {
      title: "Getting Started",
      description: "Login for the first time",
      unlocked: true,
    },
    {
      title: "Novice",
      description: "Complete your very first assessment",
      unlocked: true,
    },
    {
      title: "Medieval Knight",
      description: "Complete five assessments",
      unlocked: false,
    },
    {
      title: "Where's the carrot?",
      description: "Practice your first five questions",
      unlocked: true,
    },
    {
      title: "A friend in need",
      description: "Take help from Agent while practicing",
      unlocked: true,
    },
    {
      title: "Wizard",
      description: "Score above 80%",
      unlocked: true,
    },
    {
      title: "Found'em all!",
      description: "Navigate through all the pages",
      unlocked: true,
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum sit dolor amet",
      unlocked: false,
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum sit dolor amet",
      unlocked: false,
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum sit dolor amet",
      unlocked: false,
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum sit dolor amet",
      unlocked: false,
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum sit dolor amet",
      unlocked: true,
    },
    {
      title: "Crowned them all!",
      description: "Practice 200 questions",
      unlocked: false,
    },
    {
      title: "Aim Bot",
      description: "Score 100% in 3 consecutive modules",
      unlocked: false,
    },
    {
      title: "See you later!",
      description: "Change your preferred language",
      unlocked: true,
    },
    {
      title: "Perfectionist",
      description: "Complete all the modules",
      unlocked: false,
    },
  ];

  return (
    <div className="h-screen w-full flex">
      <div className="min-w-[250px]">
        <LeftNavbar />
      </div>
      
      <div className="w-full h-full flex-1 bg-accent-2 overflow-auto">
        <div className="mt-10 mx-32 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Achievements
            </h2>
            <p className="text-secondary font-bold">Can you get them all?</p>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Can't find the one you're looking for?"
              className="bg-accent-3 text-secondary px-4 py-2 rounded-full w-64 pl-4 pr-10"
            />
            <button className="absolute right-3 top-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="mx-32 mt-4 p-8 bg-accent-4 bg-opacity-80 rounded-ten mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Badge
                  text={achievement.title}
                  subText={achievement.description}
                  locked={!achievement.unlocked}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementsPage;
