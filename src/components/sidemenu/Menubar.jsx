import { useState } from "react";

const Menubar = () => {
  const [activeItem, setActiveItem] = useState("Oranges"); // Default active item

  const fruits = [
    { name: "Oranges", vitamin: "Vitamin C" },
    { name: "Apples", vitamin: "Vitamin C" },
    { name: "Avocado", vitamin: "Vitamin B6" },
    { name: "Strawberries", vitamin: "Vitamin C" },
    { name: "Mangoes", vitamin: "Vitamin A, C" },
    { name: "Blueberries", vitamin: "Vitamin C, K" },
    { name: "Grapes", vitamin: "Vitamin C, K" },
    { name: "Pineapples", vitamin: "Vitamin C" },
  ];

  return (
    <div className="bg-white py-4 px-6">
      <h2 className="text-lg font-semibold mb-4">Fruits List</h2>
      <ul className="space-y-4">
        {fruits.map((fruit) => (
          <li
            key={fruit.name}
            onClick={() => setActiveItem(fruit.name)}
            className={`flex items-center space-x-4 cursor-pointer px-4 py-2 rounded-md ${
              activeItem === fruit.name
                ? " border-2 border-orange-600 border-t-gray-300"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="w-7 h-7">
              <img
                src={`https://fruitnames.net/wp-content/uploads/2023/10/apples-on-a-tree-branch.jpg`} 
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
    </div>
  );
};

export default Menubar;
