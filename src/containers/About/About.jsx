import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-bgColor pt-10 md:pt-36 text-gray-300  overflow-x-hidden"
    >
      <div className="flex flex-col mx-auto px-4 justify-center items w-full">
        <div className="max-w-[1000px] w-full mx-auto  grid grid-cols-2 gap-8">
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="sm:text-right  pb-8 "
          >
            <p className="text-4xl font-bold text-center inline border-b-4 border-[#03A9F4]">
              About
            </p>
          </motion.div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full mx-auto grid sm:grid-cols-2 gap-8">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            className=""
          >
            <img
              className="mx-auto group-hover:scale-125 sca h-[350px] border border-white/10 rounded-lg transition duration-500"
              src={"/about.png"}
              alt="About graphic"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [200, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.6 }}
            className="font-HindMadurai text-gray-400 sm:text-left"
          >
            <p>
              I’m a frontend engineer focused on building and shipping
              production-ready web and mobile interfaces.
              <br />
              <br />
              I work primarily with React, Next.js, and React Native, and I’m
              comfortable taking features from idea to implementation —
              translating designs into clean UI, integrating APIs, and ensuring
              performance and maintainability.
              <br />
              <br />
              I’ve worked on client and internal products, often collaborating
              closely with designers, backend engineers, and product
              stakeholders to ship features efficiently.
              <br />
              <br />
              Much of my recent work lives in private repositories, so GitHub
              serves as my public portfolio for code quality and structure.
            </p>
            {/* <div className="flex flex-wrap text-[10px] md:text-base gap-x-4 gap-y-2 md:gap-y-4">
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                HTML{" "}
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                CSS
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                JAVASCRIPT
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                TAILWIND CSS
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                FRAMER MOTION
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                REACTJS
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                NEXTJS
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                REDUX TOOLKIT
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                SANITY
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                HYGRAPH
              </p>
              <p className="bg-[#1e2c41] px-3 py-1 rounded-sm drop-shadow">
                BOOTSTRAP
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
