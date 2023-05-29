import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/developer.json";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-bgColor">
      <motion.div className="max-w-[1000px] mx-auto px-8 flex items-center justify-center sm:justify-between flex-wrap-reverse sm:flex-nowrap text-center sm:text-left h-full">
        <div className="">
          <p className="text-gray-400  font-HindMadurai">Hi, my name is</p>
          <motion.h1
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.6 }}
            className="text-[30px] text-primaryColor w-full animate-charcter py-4 sm:text-7xl font-bold"
          >
            Francis bello
          </motion.h1>
          <motion.h2
            whileInView={{ x: [-240, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl text-[#8892b0] sm:text-5xl font-bold shimmer"
          >
            I'm a Front-End Developer
          </motion.h2>
          <motion.p
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-[#8892b0] py-4 max-w-[700px] font-HindMadurai"
          >
            I specialize in delivering high-quality products and services by
            creating better user interfaces and experiences which make web and
            mobile applications easier and pleasant to use.
          </motion.p>
          <div className="text-center sm:block flex items-center justify-center mt-3">
            <motion.button
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.4, delay: 1.4 }}
              className="text-white group border-2 px-4 py-3 flex items-center justify-center hover:bg-primaryColor   "
            >
              <Link to="project" smooth={true} duration={500}>
                View Projects
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </motion.button>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.6, delay: 1.6 }}
          className="flex items-center justify-center mt-20"
        >
          <Lottie
            className="w-[50%] sm:w-[100%]"
            animationData={animationData}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
