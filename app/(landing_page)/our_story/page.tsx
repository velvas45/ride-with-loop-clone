import OurStoryBanner from "@/components/layout/ourstorybanner";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <>
      <OurStoryBanner />

      {/* What People Saying */}
      <section className="p-10 lg:p-20">
        <h1 className="text-4xl/[80%] uppercase font-black">
          What people are saying
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
          <div className="flex flex-col gap-12 cursor-pointer hover:shadow-lg hover:-translate-y-4 transition-all duration-150 ease-in-out rounded-2xl p-8 min-h-[400px]">
            {/* logo */}
            <div className="w-max h-max">
              <Image
                src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/6627c65ca836bb62b4e1c78d_retina-logo-vertical.png"
                alt="Logo people saying"
                width={128}
                height={40}
              />
            </div>
            {/* content */}
            <p className="font-bold text-2xl max-w-sm">
              The LOOP Effect: How This Black Innovator Is Making Car Insurance
              Fair And Accessible
            </p>
            {/* footer */}
            <p className="text-lg font-medium">
              In People of Color in Tech <br /> February 2024
            </p>
          </div>
          <div className="flex flex-col gap-12 cursor-pointer hover:shadow-lg hover:-translate-y-4 transition-all duration-150 ease-in-out rounded-2xl p-8 min-h-[400px]">
            {/* logo */}
            <div className="w-max h-max">
              <Image
                src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/6627c65ca836bb62b4e1c78d_retina-logo-vertical.png"
                alt="Logo people saying"
                width={128}
                height={40}
              />
            </div>
            {/* content */}
            <p className="font-bold text-2xl max-w-sm">
              The LOOP Effect: How This Black Innovator Is Making Car Insurance
              Fair And Accessible
            </p>
            {/* footer */}
            <p className="text-lg font-medium">
              In People of Color in Tech <br /> February 2024
            </p>
          </div>
          <div className="flex flex-col gap-12 cursor-pointer hover:shadow-lg hover:-translate-y-4 transition-all duration-150 ease-in-out rounded-2xl p-8 min-h-[400px]">
            {/* logo */}
            <div className="w-max h-max">
              <Image
                src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/6627c65ca836bb62b4e1c78d_retina-logo-vertical.png"
                alt="Logo people saying"
                width={128}
                height={40}
              />
            </div>
            {/* content */}
            <p className="font-bold text-2xl max-w-sm">
              The LOOP Effect: How This Black Innovator Is Making Car Insurance
              Fair And Accessible
            </p>
            {/* footer */}
            <p className="text-lg font-medium">
              In People of Color in Tech <br /> February 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
