import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-bgColor w-full h-screen flex items-center justify-center mx-auto px-8 pt-20 md:pt-40 pb-32 md:mt-80"
    >
      <form
      method="POST"
        action="https://getform.io/f/07b08aa4-a0e5-40d0-844a-3b681153b8f8"
        className="flex text-gray-300 flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-3xl font-semibold inline border-b-4 text-gray-300 border-[#03A9F4]">
            Contact
          </p>
          <p className="text-gray-500 mt-4">Get in touch with me</p>
        </div>
        <input
          className="p-2 rounded-sm bg-[#4a5668] outline-none"
          type="text"
          placeholder="Name"
          required
          name="name"
        />
        <input
          className="p-2 my-4 rounded-sm bg-[#4a5668] outline-none"
          type="email"
          placeholder="Email"
          required
          name="email"
        />
        <textarea
          name="message"
          className="p-2 rounded-sm bg-[#4a5668] outline-none"
          placeholder="Message..."
          required
          rows="10"
        ></textarea>
        <motion.button whileTap={{scale: 1.1}} className="px-5 bg-primaryColor py-2 my-4 mx-auto flex items-center hover:bg-[#ff607f] drop-shadow-lg font-Montserrat font-bold text-gray-300">
          Let's chat!
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
