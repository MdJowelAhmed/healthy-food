import { useState } from "react";
import SideIcons from "../icon/SideIcon";

const Menubar = () => {
  const [activeTab, setActiveTab] = useState("Fruits"); // Active tab state
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [activeItem, setActiveItem] = useState("Oranges"); // Default active item

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

  // Filter fruits based on search term
  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        <div className="hidden md:block">
          <SideIcons />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg hidden md:block shadow-md  mx-auto">
        {/* Tabs */}
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "Fruits"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTab("Fruits")}
          >
            Fruits
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "Vegetables"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-800"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Fruits List */}
        {activeTab === "Fruits" && (
          <ul className="space-y-4">
            {filteredFruits.map((fruit) => (
              <li
                key={fruit.name}
                onClick={() => setActiveItem(fruit.name)}
                className={`flex items-center space-x-2 cursor-pointer px-2 py-1 rounded-md ${
                  activeItem === fruit.name
                    ? "border-2 border-orange-500 border-t-gray-200"
                    : "hover:bg-gray-100"
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
                  <h3 className="font-medium text-gray-800">{fruit.name}</h3>
                  <p className="text-sm text-gray-500">{fruit.vitamin}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Placeholder for Vegetables Tab */}
        {activeTab === "Vegetables" && (
          <div className="text-gray-500 text-sm">No vegetables available.</div>
        )}
      </div>
    </div>
  );
};

export default Menubar;
