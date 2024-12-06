import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiSearch, FiX } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md flex justify-between items-center px-4 md:px-6 py-3">
      {/* Left Bar Icon (Hidden on Large Screens) */}
      <button className="p-2 rounded-full border focus:outline-none md:hidden">
        <FiMenu className="text-gray-600 dark:text-gray-300 text-xl" />
      </button>

      {/* Logo (Hidden on Small Screens) */}
      <h1 className="text-lg md:text-2xl font-bold text-orange-600 hidden md:block">
        Food Benefits
      </h1>

      {/* Middle Search Bar */}
      <div className="flex items-center border px-4 py-2 rounded-md bg-white dark:bg-gray-700 dark:text-white flex-grow md:flex-grow-0">
        <input
          type="text"
          placeholder="Search Best Food"
          className="flex-grow bg-white dark:bg-gray-700 focus:outline-none text-gray-800 dark:text-white"
        />
        <FiSearch className="text-gray-500 dark:text-gray-300 text-lg ml-2" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle (On Small Screens, Positioned Right of Search Bar) */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full border focus:outline-none"
        >
          {darkMode ? (
            <FiSun className="text-yellow-400 text-xl" />
          ) : (
            <FiMoon className="text-blue-600 text-xl" />
          )}
        </button>

        {/* Mobile Menu Toggle Icon */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full border focus:outline-none"
        >
          {menuOpen ? (
            <FiX className="text-red-500 text-xl" />
          ) : (
            <FiMenu className="text-gray-600 dark:text-gray-300 text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
