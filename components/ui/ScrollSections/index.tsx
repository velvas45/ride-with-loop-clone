"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Trusted by Experts",
    description: "LOOP works with top insurance agents...",
    image:
      "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667eba112bf3c4ea655323fb_image%209.avif",
    bgColor: "#FFFFFF",
  },
  {
    title: "Simple Partnership",
    description: "We make it easy to integrate...",
    image:
      "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667ebac336bbe0bc9b80a8fd_image%2010q.avif",
    bgColor: "#fdf9e0",
  },
  {
    title: "Grow with LOOP",
    description: "Get tools and support to scale...",
    image:
      "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667ebac39e267f6991e13539_image%208q.avif",
    bgColor: "#c3e1c8",
  },
];

export default function ScrollSections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      gsap.to(img, {
        opacity: i === activeIndex ? 1 : 0,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    // Animate background color when section changes
    const bgColor = sections[activeIndex].bgColor;
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, {
        backgroundColor: bgColor,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    sectionsRef.current.forEach((el, i) => {
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "center center",
        end: "center center",
        scrub: true,
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="relative w-full flex" ref={imageContainerRef}>
      {/* Left: Sticky Image */}
      <div className="sticky top-0 basis-[65%] h-screen flex items-center justify-center z-10">
        <Image
          ref={(el) => {
            imageRefs.current[activeIndex] = el;
          }}
          key={sections[activeIndex].image}
          src={sections[activeIndex].image}
          alt=""
          width={1200}
          height={500}
          className="w-max h-full object-cover transition-all duration-500 opacity-0"
        />
      </div>

      {/* Right: Stack Content */}
      <div className="basis-auto relative z-20">
        {sections.map((section, i) => (
          <div
            key={i}
            ref={(el) => {
              sectionsRef.current[i] = el;
            }}
            className="h-screen flex items-center justify-start"
            style={{ zIndex: sections.length - i }}
          >
            <div className="">
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-700 max-w-md">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
