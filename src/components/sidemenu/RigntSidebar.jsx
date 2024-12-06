import { MdOutlineSubtitlesOff } from "react-icons/md";

// RightSidebar component handles the settings panel for font size, vitamin type selection, and subtitle toggle
const RightSidebar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 space-y-4 rounded-md hidden md:block shadow-md">
      <h3 className="font-semibold text-gray-800 dark:text-white">Settings</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Paragraph Font Size
        </label>
        <input type="range" className="w-full dark:bg-gray-600" />
      </div>

      {/* Vitamin Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Choose Vitamin Type
        </label>
        <select className="w-full border px-2 py-1 rounded-md text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600">
          <option>All Vitamins</option>
          <option>Vitamin A</option>
          <option>Vitamin C</option>
        </select>
      </div>

      {/* Subtitle Toggle */}
      <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
        <p>Turn off subtitles</p>
        <MdOutlineSubtitlesOff className="text-xl text-gray-600 dark:text-white" />
      </div>
    </div>
  );
};

export default RightSidebar;
