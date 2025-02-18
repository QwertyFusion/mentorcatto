import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  const { user } = useAuthStore();
  return (
    <div className="bg-accent-1 p-6 text-white h-screen flex flex-col justify-between">
      <div className="flex flex-col">
        <em>
          <h2 className="text-2xl font-inter">
            print(<span className="font-bold text-white">"Statistics"</span>)
          </h2>
        </em>

        {/* Preferred Language */}
        <div className="bg-accent-1 p-4 border-1 border-tertiary mt-4">
          <p className="text-primary text-4xl font-thin">
            {user.preferredLanguage}
          </p>
          <p className="text-white text-sm font-thin">Preferred DSA Language</p>
        </div>

        {/* Grid view */}
        <div className="grid grid-cols-2 gap-4 mt-4 font-inter">
          <div className="bg-accent-1 p-4 border-1 border-tertiary">
            <p className="text-primary text-4xl font-thin">
              {user.modulesLearnt}
            </p>
            <p className="text-white text-sm font-thin">Modules Learnt</p>
          </div>
          <div className="bg-accent-1 p-4 border-1 border-tertiary">
            <p className="text-primary text-4xl font-thin">
              {user.averageScore}
            </p>
            <p className="text-white text-sm font-thin">Average Score</p>
          </div>
          <div className="bg-accent-1 p-4 border-1 border-tertiary">
            <p className="text-primary text-4xl font-thin">
              {user.highestScore}
            </p>
            <p className="text-white text-sm font-thin">Highest Score</p>
          </div>
          <div className="bg-accent-1 p-4 border-1 border-tertiary">
            <p className="text-primary text-4xl font-thin">
              {user.badgesEarned}
            </p>
            <p className="text-white text-sm font-thin">Badges Earned</p>
          </div>
        </div>
      </div>

      {/* Bottom tips */}
      <Link to="/chat">
        <div className="bg-accent-1 border-1 border-primary p-3 text-center font-thin">
          <p className="text-sm font-inter">#Tips from Mentor Catto</p>
        </div>
      </Link>
    </div>
  );
};

export default RightSideBar;
