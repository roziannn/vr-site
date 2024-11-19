import React from "react";
import vr1 from "../assets/vr-1.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen items-center mt-10 lg:mt-20" id="hero">
      <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.8 }} className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-center tracking-wide">
        Provides powerful tools to create VR
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> for developers</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row mt-5 justify-center items-center gap-10">
        <img src={vr1} className="rounded-lg size-5/6 lg:size-3/6 border-b border-orange-700 shadow-orange-400 mx-2 my-4" />
        <div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-start tracking-wide">
            Transform your reality with <span className="curved-underline">VMax vision</span>
          </h1>
          <p className="mt-5 text-lg text-start text-neutral-500 max-w-4xl">Boost your creativity and turn your VR app ideas into reality with our easy-to-use tools. Start now and create amazing virtual experiences!</p>
          <div className="flex justify-start my-10">
            <a href="/register" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
              Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
