import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiSettings } from "react-icons/fi";

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
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md flex justify-between items-center px-6 py-3`}
    >
      {/* Left Logo */}
      <h1 className="text-2xl font-bold text-orange-600">Food Benefits</h1>

      {/* Middle Search */}
      <input
        type="text"
        placeholder="Search Best Food"
        className={`border px-4 py-2 rounded-md ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
        }`}
      />

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle */}
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

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full border focus:outline-none md:hidden"
        >
          {menuOpen ? (
            <FiX className="text-red-500 text-xl" />
          ) : (
            <FiMenu className="text-gray-600 text-xl" />
          )}
        </button>

        {/* Bar Icon */}
        <button className="p-2 rounded-full border focus:outline-none hidden md:block">
          <FiSettings className="text-gray-600 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
