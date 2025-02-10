import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const LeftNavbar = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      {/* Navbar */}
      <div
        className={`
        h-screen 
        shadow-drop-shadow 
        bg-accent-3 
        relative
        z-40
      `}
      >
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
        <nav className="px-4 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center p-4 rounded-lg bg-accent-4 text-[#ABF07C] drop-shadow-custom hover:filter-none transition-all"
          >
            <img
              className={`absolute w-5 h-5 top-0 left-0 !relative w-6 h-6`}
              alt="Property default"
              src="Dashboard.svg"
            />
            <span className="ml-3 font-medium">Dashboard</span>
          </Link>

          <Link
            to="/courses"
            className="flex items-center p-4 rounded-lg hover:bg-accent-4 text-white shadow-drop-shadow hover:shadow-none transition-all"
            onClick={() => setIsOpen(false)}
          >
            <img
              className={`absolute w-5 h-5 top-0 left-0 !relative w-6 h-6`}
              alt="Property default"
              src="courses.svg"
            />
            <span className="ml-3 font-medium">Courses</span>
          </Link>

          <Link
            to="/chat"
            className="flex items-center p-4 rounded-lg hover:bg-accent-4 text-white shadow-drop-shadow hover:shadow-none transition-all"
            onClick={() => setIsOpen(false)}
          >
            <img
              className={`absolute w-5 h-5 top-0 left-0 !relative w-6 h-6`}
              alt="Property default"
              src="Chat.svg"
            />
            <span className="ml-3 font-medium">Doubt Chat</span>
          </Link>

          <Link
            to="/achievements"
            className="flex items-center p-4 rounded-lg hover:bg-accent-4 text-white shadow-drop-shadow hover:shadow-none transition-all"
            onClick={() => setIsOpen(false)}
          >
            <img
              className="absolute w-5 h-5 top-0 left-0 !relative w-6 h-6"
              alt="Property default"
              src="/Award.svg"
            />
            <span className="ml-3 font-medium">Achievements</span>
          </Link>

          <Link
            to="/assessments"
            className="flex items-center p-4 rounded-lg hover:bg-accent-4 text-white shadow-drop-shadow hover:shadow-none transition-all"
            onClick={() => setIsOpen(false)}
          >
            <img
              className={`absolute w-5 h-5 top-0 left-0 !relative w-6 h-6`}
              alt="Property default"
              src="Exam.svg"
            />
            <span className="ml-3 font-medium">Assessments</span>
          </Link>
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <button className="flex items-center w-full h-[55px] mb-4 p-2 border-2 bg-accent-3 border-tertiary drop-shadow-custom hover:bg-tertiary transition duration-200">
            <img
              className="w-5 h-5 ml-[10px] rounded-full shadow-drop-shadow-custom"
              alt="Profile"
              src="/profile-button.png"
            />
            <span className="ml-3 text-white font-medium">{user.name}</span>
          </button>
          <div className="flex gap-2 h-[55px]">
            <button className="flex items-center justify-center w-[55px] p-2 border-2 bg-accent-3 border-tertiary drop-shadow-custom hover:bg-tertiary transition duration-200">
              <img className="w-6 h-6" alt="Settings" src="Settings.svg" />
            </button>
            <button
              className="flex items-center justify-center flex-grow p-2 border-2 bg-accent-3 border-tertiary drop-shadow-custom hover:bg-red-900 transition duration-200"
              onClick={handleLogout}
            >
              <img className="w-5 h-5 mr-3" alt="Logout" src="Logout.svg" />
              <span className="text-white">Log out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
