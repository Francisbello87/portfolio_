import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {NavLink} from 'react-router-dom'
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState('')
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full z-10 h-20 justify-between items-center flex px-7 md:px-32 bg-[#0a192f] text-gray-300">
      <div className="content px-7 ">
        <Link to="home" smooth={true} duration={500} className="text-5xl logo cursor-pointer">FB</Link>
        <Link to="home" smooth={true} duration={500} className="text-5xl logo cursor-pointer">FB</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex font-HindMadurai ">
        <li>
          <Link to="home" smooth={true} duration={500} className="active active:text-primaryColor">
            Home
          </Link>
        </li >
        <li>
          <Link to="about" smooth={true} duration={500} className="active active:text-primaryColor">
            About
          </Link>
        </li>
        <li>
          <Link to="tech" smooth={true} duration={500} className="active active:text-primaryColor">
            Tech.
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true} duration={500} className="active active:text-primaryColor">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="active active:text-primaryColor">
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="tech" smooth={true} duration={500}>
            Tech
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className=" hidden fixed lg:flex flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#0177B5] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/francisbello/"
              target="blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#1BA1F2] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Francis_coder"
              target="blank"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#24292E] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Francisbello87"
              target="blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between bg-[#c71610] items-center ml-[-105px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:bellofrancis91@gmail.com"
              
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
