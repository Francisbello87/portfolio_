import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-20 justify-between items-center flex px-7 md:px-32 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-5xl">FB</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex font-HindMadurai">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <motion.div
        whileTap={{ scale: 1.2 }}
        onClick={handleClick}
        className="md:hidden z-10 text-2xl"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </motion.div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Projects</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className=" hidden fixed lg:flex flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#0177B5] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#1BA1F2] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#24292E] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#c71610] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
