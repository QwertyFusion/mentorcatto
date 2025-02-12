const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent-4 h-[84px]">
      <div className="container mx-auto h-full px-6 flex justify-between items-center">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" alt="Cat" src="Cat.png" />
          <span className="text-xl font-semibold text-white">MENTORCATTO</span>
        </div>

        {/* Right side - Auth Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-accent-2 hover:bg-accent-3 rounded-lg text-white text-sm">
            Login
          </button>
          <button className="px-4 py-2 bg-[#A7F288] hover:bg-accent-1/90 rounded-lg text-black text-sm">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
