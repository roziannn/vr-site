import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";

export default function Workflow() {
  return (
    <div className="mt-20" id="workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-6 tracking-wide">
        Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow.</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <motion.div variants={fadeIn("right", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.8 }} className="p2 w-full lg:w-1/2">
          <img src={codeImg} alt="code img" />
        </motion.div>
        <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.8 }} className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((list, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{list.title}</h5>
                <p className="text-md text-neutral-500">{list.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
