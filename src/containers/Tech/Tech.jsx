import React from "react";
import { images } from "../../constants";
import { TechStacks } from "../../utils/data";

const Tech = () => {
  return (
    <div name="tech" className="w-full md:h-screen bg-bgColor pt-10 ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center  sm:text-left h-full">
        <div className="pb-4">
          <p className="text-3xl font-semibold inline border-b-4 text-gray-300 border-[#03A9F4]">
            Skills
          </p>
          <p className="py-6 text-gray-400">
            Some of the few technologies I've worked with and still use
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 text-gray-300">
          {TechStacks.map((techstack) => (
            <div key={techstack.id} className="shadow-md group cursor-pointer bg-slate-800 rounded-md shadow-bgColor py-4 ">
              <img
                className="w-20 mx-auto group-hover:scale-125 sca transition duration-500"
                src={techstack.image}
                alt="HTML Icon"
              />
              <p className="mt-4">{techstack.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
