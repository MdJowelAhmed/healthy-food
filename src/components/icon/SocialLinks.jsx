import React from "react";
import { FaFacebook, FaTwitter, FaShareAlt, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      <button className="text-blue-500 text-2xl">
        <FaFacebook />
      </button>
      <button className="text-blue-500 text-2xl">
        <FaLinkedin />
      </button>
      <button className="text-blue-400 text-2xl">
        <FaTwitter />
      </button>
      <button className="text-orange-500 text-2xl">
        <FaShareAlt />
      </button>
    </div>
  );
};

export default SocialLinks;
