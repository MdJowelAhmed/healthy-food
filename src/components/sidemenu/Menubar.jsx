import { useState } from "react";
import SideIcons from "../icon/SideIcon";

// Menubar component handles the tab navigation, search functionality, and displays a list of fruits
const Menubar = () => {
  const [activeTab, setActiveTab] = useState("Fruits"); // Active tab state to toggle between Fruits and Vegetables
  const [searchTerm, setSearchTerm] = useState(""); // State to handle the search input
  const [activeItem, setActiveItem] = useState("Oranges"); // Default active item in the list

  // List of fruits with their names, vitamins, and images
  const fruits = [
    {
      name: "Oranges",
      vitamin: "Vitamin C",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
    },
    {
      name: "Apples",
      vitamin: "Vitamin C",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaPOaoiIpcA1XsrIAIx_Knp18lgCcwb9-GQ&s",
    },
    {
      name: "Avocado",
      vitamin: "Vitamin B6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_pHV2W3wZe2l95xWlLWoQkFHsD2Wnadm0w&s",
    },
    {
      name: "Strawberries",
      vitamin: "Vitamin C",
      image:
        "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJzdHJhd2JlcnJ5X3JlZF9kZWxpY2lvdXNfc3dlZXQtaW1hZ2Utam9iNjIxXzEucG5n.png",
    },
    {
      name: "Mangoes",
      vitamin: "Vitamin A, C",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaPOaoiIpcA1XsrIAIx_Knp18lgCcwb9-GQ&s",
    },
    {
      name: "Blueberries",
      vitamin: "Vitamin C, K",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_pHV2W3wZe2l95xWlLWoQkFHsD2Wnadm0w&s",
    },
    {
      name: "Grapes",
      vitamin: "Vitamin C, K",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
    },
    {
      name: "Pineapples",
      vitamin: "Vitamin C",
      image:
        "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJzdHJhd2JlcnJ5X3JlZF9kZWxpY2lvdXNfc3dlZXQtaW1hZ2Utam9iNjIxXzEucG5n.png",
    },
  ];

  // Filter fruits based on the search term
  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        {/* Side icons are displayed only on larger screens */}
        <div className="hidden md:block">
          <SideIcons />
        </div>
      </div>

      {/* Main menu container */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg hidden md:block shadow-md mx-auto">
        {/* Tab navigation for Fruits and Vegetables */}
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "Fruits"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
            onClick={() => setActiveTab("Fruits")}
          >
            Fruits
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "Vegetables"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
            onClick={() => setActiveTab("Vegetables")}
          >
            Vegetables
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Fruits Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Fruits List - displayed when "Fruits" tab is active */}
        {activeTab === "Fruits" && (
          <ul className="space-y-4">
            {filteredFruits.map((fruit) => (
              <li
                key={fruit.name}
                onClick={() => setActiveItem(fruit.name)}
                className={`flex items-center space-x-2 cursor-pointer px-2 py-1 rounded-md ${
                  activeItem === fruit.name
                    ? "border-2 border-orange-500"
                    : "hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                <div className="w-8 h-8">
                  <img
                    src={fruit?.image} // Placeholder image
                    alt={fruit.name}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{fruit.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{fruit.vitamin}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Placeholder message for the Vegetables tab */}
        {activeTab === "Vegetables" && (
          <div className="text-gray-500 dark:text-gray-300 text-sm">No vegetables available.</div>
        )}
      </div>
    </div>
  );
};

export default Menubar;
