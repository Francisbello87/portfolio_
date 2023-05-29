import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-black  w-full h-32 sm:h-16 py-4 ">
      <div className="flex items-center sm:hidden justify-center flex-col">
        <h5 className="text-white font-semibold capitalize">Connect with me</h5>
        <ul className="my-3 flex items-center ">
          <motion.li whileTap={{ scale: 1.1 }}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/francisbello/"
              //   target="blank"
            >
              <FaLinkedin className="text-[#0177B5]" size={30} />
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Francis_coder"
              target="blank"
            >
              <FaTwitter className="text-[#1BA1F2]" size={30} />
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Francisbello87"
              target="blank"
            >
              <FaGithub size={30} />
            </a>
          </motion.li>
        </ul>
        <p className="text-sm flex items-center text-gray-400">
          <AiOutlineCopyright className="mr-2" /> 2023,{" "}
          <span className="font-semibold ml-2"> Francis Bello</span>{" "}
        </p>
      </div>
      <div className="sm:flex hidden items-center justify-center">
        <p className="text-sm flex items-center text-gray-400">
          <AiOutlineCopyright className="mr-2" /> 2023,{" "}
          <span className="font-semibold text-lg ml-2"> Francis Bello.</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
