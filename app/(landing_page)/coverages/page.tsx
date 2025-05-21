import MarqueeImages from "@/components/ui/MarqueeImages";
import React from "react";

const images = [
  "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/656924af67bcf66aeb40cb6c_fineas-anton-nUzgnKwQxjA-unsplash-p-800.webp",
  "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/656926923e0823a3e5e2f801_2021-nissan-rogue-008.webp",
  "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/65b3f31a576f9c2c0f33857e_partnerships%20image%202-p-800.avif",
  "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/656926a1860d0ac7f5e317b2_rebecca-lane-fRgVnFPnJjo-unsplash-p-800.webp",
  "https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/65b3f34adff2dd126eb5a098_partnerships%20image%205-p-800.jpg",
];

const Coverages = () => {
  return (
    <>
      {/* banner coverages */}
      <section className="bg-[#faf0b9] py-20">
        <div className="flex flex-col gap-6 text-center justify-center items-center">
          <h2 className="text-4xl font-black uppercase">Coverages Offered</h2>
          <p className="text-lg font-medium max-w-lg">
            We understand the importance of comprehensive car insurance. Thats
            why we offer a range of coverages to meet your unique needs.
          </p>
          <p className="text-xl font-semibold">
            Interested In Being Covered By LOOP?
          </p>
          <button className="border-2 px-3 py-4 text-center rounded-[32px] text-sm/[40%] hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 bg-black border-black text-white">
            Get Your Price
          </button>
        </div>
        <div className="mt-10">
          <MarqueeImages images={images} direction="left" />
          <MarqueeImages images={images} />
        </div>
      </section>

      {/* Banner experience */}
      <section className="bg-black p-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-white mx-auto">
            <h1 className="text-4xl font-black uppercase">
              LOOP MEMBER EXPERIENCE
            </h1>
            <p className="text-lg font-medium">
              Quote, bind, and easily manage your policy on a 21st century
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2 text-white text-2xl gap-x-3 gap-y-2">
            <div className="lg:col-span-2 w-full bg-amber-500 h-[180px] rounded-tl-xl p-6">
              <h5 className="text-black font-black uppercase text-3xl/[80%] max-w-xs">
                Manage Your Policy
              </h5>
            </div>
            <div className="lg:col-span-2 w-full bg-lime-400 h-[180px] rounded-bl-xl p-6">
              <h5 className="text-black font-black uppercase text-3xl/[80%] max-w-xs">
                Instant Claims
              </h5>
            </div>
            <div className="lg:col-start-3 lg:col-end-3 lg:row-span-full h-full bg-sky-600 w-full rounded-tr-xl rounded-br-xl">
              <h5 className="text-white font-black uppercase text-3xl/[80%] max-w-xs p-6">
                100% Online
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Option */}
      <section className="p-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-black text-center mx-auto items-center">
            <h1 className="text-4xl font-black uppercase">
              Our Coverage Options
            </h1>
            <p className="text-lg font-medium max-w-md">
              Tailored for safety and peace of mind. Heres what we currently
              offer LOOP Members:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-6">
            <div className="rounded-xl p-6 lg:row-span-full bg-amber-300 text-black">
              Content 1
            </div>
            <div className="rounded-xl p-6 lg:col-span-2 bg-sky-400 text-black h-[300px]">
              Content 2
            </div>
            <div className="rounded-xl p-6 bg-sky-600 lg:row-start-2 lg:row-end-2 h-full lg:col-start-2 lg:col-end-2">
              Content 3
            </div>
            <div className="rounded-xl p-6 bg-gray-400 lg:row-start-2 lg:row-end-2 h-full lg:col-start-3 lg:col-end-3">
              Content 4
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-6">
            <div className="rounded-xl p-6 lg:row-start-1 lg:row-end-1 lg:col-span-1 bg-amber-300 text-black">
              Content 5
            </div>
            <div className="rounded-xl p-6 lg:row-start-1 lg:row-end-1 lg:col-span-1 bg-sky-400 text-black h-[300px]">
              Content 6
            </div>
            <div className="rounded-xl p-6 bg-sky-600 lg:row-span-full lg:col-start-3 lg:col-end-3 h-full">
              Content 7
            </div>
            <div className="rounded-xl p-6 bg-gray-400 h-full lg:col-span-2 lg:row-start-2 lg:row-end-2">
              Content 8
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="rounded-xl p-6 row-start-2 row-end-2 h-[320px] bg-gray-300">
              Content 9
            </div>

            <button className="w-max mx-auto px-3 py-2 cursor-pointer hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 hover:-translate-y-1 text-center text-black text-sm bg-[#faf0b9] rounded-4xl">
              Get Your Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coverages;
