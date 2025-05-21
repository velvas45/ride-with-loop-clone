"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const testimonials = [
  {
    name: "William",
    date: "07/22",
    quote:
      "I love LOOP! Process was sooo easy to sign up and get covered. Every time I reach out to customer support I get a response quickly. Keep doing what you're doing LOOP!",
  },
  {
    name: "John Brian",
    date: "10/2022",
    quote:
      "This insurance company not only found me a better rate! They were fast, efficient and had great customer service. That is just not common in today's world. Customer for life!",
  },
  {
    name: "Adolfo",
    date: "08/2022",
    quote:
      "Easy and simple no hassle got my policy within 20 minutes real quick so worth it, not like other insurances",
  },
  {
    name: "Sarah M.",
    date: "01/2023",
    quote:
      "I switched to LOOP and saved a bunch of money. Their app is smooth and support is top-notch!",
  },
  {
    name: "David Lee",
    date: "03/2023",
    quote:
      "I had questions about my policy and got a helpful answer within minutes. Amazing experience.",
  },
  {
    name: "Emily Tran",
    date: "06/2023",
    quote:
      "The signup process was effortless and quick. I feel safe and supported. Highly recommend LOOP!",
  },
  {
    name: "Carlos M.",
    date: "09/2023",
    quote:
      "Their transparency is what won me over. No hidden fees, clear terms, and I always know what I’m paying for.",
  },
  {
    name: "Jessica Ray",
    date: "11/2023",
    quote:
      "Love the clean dashboard. Everything is easy to find and I feel in control of my insurance for once.",
  },
  {
    name: "Brian Cho",
    date: "12/2023",
    quote:
      "Had an accident and the support team walked me through the whole claim process. Felt human and respectful.",
  },
];

const TestimonialSlider = () => {
  const groupSize = 3;
  const groupedTestimonials = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < testimonials.length; i += groupSize) {
      chunks.push(testimonials.slice(i, i + groupSize));
    }
    return chunks;
  }, []);

  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % groupedTestimonials.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [groupedTestimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentGroup(index);
  };

  return (
    <div className="relative w-full flex gap-6">
      <div className="overflow-hidden basis-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGroup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {groupedTestimonials[currentGroup].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg bg-white shadow h-full flex flex-col justify-between"
              >
                <div className="flex gap-1 text-black mb-2 text-xl">
                  {"★★★★★"}
                </div>
                <p className="text-base italic mb-4 line-clamp-2">
                  “{testimonial.quote}”
                </p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">
                  Member since {testimonial.date}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4 flex-col">
        {groupedTestimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === currentGroup ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
