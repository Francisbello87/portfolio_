import React from "react";
import { motion, } from "framer-motion";
import { Projects } from "../../utils/data";

const Project = () => {

  return (
    <div
      name="project"
      className="bg-bgColor w-full md:h-screen text-gray-300 pt-10 md:pt-40"
    >
      <div className="mx-auto px-8 max-w-[1000px] w-full flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-3xl font-semibold inline border-b-4 text-gray-300 border-[#03A9F4]">
            Projects
          </p>
          <p className="py-6 text-gray-400">Some of my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 h-full md:grid-cols-3 gap-6">
          {Projects.map((project) => (
            <div key={project.id}>
              <motion.div
              
                whileInView={{ opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ backgroundImage: `url(${project.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-tr-md rounded-tl-md flex justify-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.demo} target="blank">
                      <button className="text-center rounded-lg hover:bg-bgColor hover:text-white px-4 py-3 m-2 bg-whiteColor text-gray-700 font-semibold font-HindMadurai text-lg">
                        Live Demo
                      </button>
                    </a>
                    <a href={project.code} target="blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 border-2 hover:bg-bgColor text-gray-300 font-semibold font-HindMadurai text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 0.5, 1] }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full  px-3 py-2 bg-[#020712] overflow-hidden rounded-br-md rounded-bl-md"
              >
                <motion.p
                  whileInView={{ x: [-100, 0], opacity: [0, 0.5, 1] }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="text-base font-HindMadurai"
                >
                  {project.description}
                </motion.p>
                <motion.p
                  whileInView={{ opacity: [0, 0.5, 1] }}
                  transition={{ duration: 1.4, delay: 1.4 }}
                  className="text-xs font-HindMadurai mt-3 text-gray-400"
                >
                  {project.stack}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
