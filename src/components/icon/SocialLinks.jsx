import React from "react";
import { FaFacebook, FaTwitter, FaShareAlt, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex lg:flex-col gap-4 items-center">
        <button className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 text-2xl">
          <FaFacebook />
        </button>
        <button className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 text-2xl">
          <FaLinkedin />
        </button>
        <button className="text-blue-400 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-400 text-2xl">
          <FaTwitter />
        </button>
        <button className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-500 text-2xl">
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
