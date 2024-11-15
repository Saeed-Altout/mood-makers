"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { progressStep } from "@/constants";

export const Steppers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
      {progressStep.map((step, index) => (
        <motion.div
          key={step.id}
          className="relative border border-mood-primary p-5 rounded-md last:md:col-span-2 pt-10 md:pt-5 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
        >
          <span className="absolute top-0 md:top-1/2 left-1/2 md:left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-mood-primary text-white font-bold flex justify-center items-center rounded-full">
            {index + 1}
          </span>
          <div className="pl-0 md:pl-5">
            <h3 className="text-xl font-semibold text-mood-primary mb-2">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans text-gray-600">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
