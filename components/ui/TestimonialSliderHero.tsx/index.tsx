"use client";

import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    img_src:
      "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/639c619ac75e2ed727fc818b_Mike.webp",
    quote: `“I FEEL REPRESENTED BY MY INSURANCE COMPANY.”`,
    name: "Mike, member since day one",
    background_color: "#c3e1c8",
  },
  {
    img_src:
      "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/639c619ac75e2e1c1ffc8192_John.webp",
    quote: `“WE'RE A MISSION WITH A BUSINESS.”`,
    name: "John Henry, Co-Founder & Co-CEO",
    background_color: "#ebebdc",
  },
];

const TestimonialSliderHero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row h-full lg:h-[450px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-max min-w-[600px] bg-contain"
        >
          <Image
            src={testimonials[current].img_src}
            alt="Image"
            width="800"
            height="400"
            className="bg-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div
        className={cn(
          `flex justify-between flex-col lg:flex-row items-center px-6 py-10 lg:py-0 lg:pl-20 lg:pr-10 text-black w-full`
        )}
        style={{ background: testimonials[current].background_color }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 basis-66 lg:basis-96"
          >
            <h2 className="text-4xl/[80%] -tracing-[.1rem] font-black">
              {testimonials[current].quote}
            </h2>
            <p className="text-xs font-bold">{testimonials[current].name}</p>
          </motion.div>
        </AnimatePresence>
        {/* Dots indicator */}
        <div className="flex flex-row justify-center gap-2 mt-4 lg:flex-col">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? "bg-black" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderHero;
