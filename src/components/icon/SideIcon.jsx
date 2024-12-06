import React from "react";
import { CgMenuGridO, CgMenuGridR } from "react-icons/cg";
import { FaHome, FaHeart, FaCog } from "react-icons/fa";
import { LuMessageSquareDiff } from "react-icons/lu";
import { PiCirclesFourBold } from "react-icons/pi";
import { TbLocationShare } from "react-icons/tb";

const SideIcons = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <button className="text-gray-600 hover:text-orange-600 text-2xl">
        <FaHome />
      </button>
      <button className="text-gray-600 hover:text-orange-600 text-2xl">
      <PiCirclesFourBold />
      </button>
      <button className="text-gray-600 hover:text-orange-600 text-2xl">
      <LuMessageSquareDiff />
      </button>
      <button className="text-gray-600 hover:text-orange-600 text-2xl">
      <TbLocationShare />
      </button>
      <button className="text-gray-600 hover:text-orange-600 text-2xl">
      <CgMenuGridR />
      </button>
    </div>
  );
};

export default SideIcons;
