"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MarqueeImages({
  images,
  direction = "right",
}: {
  images: string[];
  direction?: "left" | "right";
}) {
  const marqueeImages = [...images, ...images]; // Duplikat untuk seamless loop

  return (
    <div className="overflow-hidden w-full py-2">
      <motion.div
        className="flex gap-3"
        animate={
          direction == "left" ? { x: ["0%", "-50%"] } : { x: ["-50%", "0%"] }
        }
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        {marqueeImages.map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              key={i}
              src={src}
              alt={`image-${i}`}
              className="object-cover h-[220px] lg:h-[300px] rounded-xl"
              width={450}
              height={250}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
