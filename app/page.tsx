"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import CountUp from "react-countup";
import TestimonialSliderHero from "../components/ui/TestimonialSliderHero.tsx";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* banner hero section */}
      <section id="banner" className="bg-[#faf0b9] pb-4 relative">
        <div className="p-6 lg:pl-20 lg:pr-0 lg:py-0 flex-col lg:flex-row flex gap-6">
          <div className="flex flex-col itesm-center lg:items-start gap-6 text-center lg:text-left">
            <h1 className="text-[2rem]/[80%] lg:text-[4rem]/[80%] -tracking-[.1225rem] font-black line text-black mt-3 uppercase">
              CaR <br /> INSURANCe <br /> THAT DRIVES <br />{" "}
              <span className="underline">GOOD</span>
            </h1>
            <span className="text-lg lg:text-2xl text-black font-normal lg:pr-10">
              Affordable car insurance for underserved communities.
            </span>
            <div className="flex flex-col lg:flex-row gap-2">
              <button className="border-2 px-3 py-4 text-center rounded-[32px] text-lg/[40%] hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 bg-black border-black text-white">
                Get Your Price
              </button>
              <button className="border-2 px-3 py-4 text-center rounded-[32px] text-lg/[40%] hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 text-black border-black bg-transparent">
                Make A Payment
              </button>
              <button className="border-2 px-3 py-4 text-center rounded-[32px] text-lg/[40%] hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 text-black border-black bg-transparent">
                File A Claim
              </button>
            </div>
          </div>

          <InView threshold={0.1}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <Image
                  width="800"
                  height="800"
                  src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667f21ba8dc9f5520c6c13bd_cover.webp"
                  alt="Loop Banner"
                />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* section testimonial  */}
      <section id="testimonial" className="bg-white p-10 lg:p-20">
        <div className="flex flex-col lg:flex-row gap-6 pr-10">
          <div className="flex flex-col gap-8 text-black">
            <h2 className="text-[2rem]/[80%] font-black -tracking-[.1rem]">
              HONEST AND <br /> TRANSPARENT <br /> PRICING
            </h2>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_217_1192)">
                <path
                  d="M1.58691 2.25391L27.7468 2.25391V28.4138"
                  stroke="#23231E"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M27.7468 2.25391L1.58691 28.4138"
                  stroke="#23231E"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_217_1192">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[1rem]/[1.3] ">
              Based on data and driving — not credit scores.
            </p>
          </div>
          <div className="flex flex-col gap-8 text-black">
            <h2 className="text-[2rem]/[80%] font-black -tracking-[.1rem]">
              CUSTOMER CARE
              <br /> THAT
              <br /> CARES
            </h2>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_217_1192)">
                <path
                  d="M1.58691 2.25391L27.7468 2.25391V28.4138"
                  stroke="#23231E"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M27.7468 2.25391L1.58691 28.4138"
                  stroke="#23231E"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_217_1192">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[1rem]/[1.3] ">
              Based on data and driving — not credit scores.
            </p>
          </div>
          <div className="flex flex-col gap-8 text-black">
            <h2 className="text-[2rem]/[80%] font-black -tracking-[.1rem]">
              MISSION <br /> DRIVEN <br />
              BUSINESS
            </h2>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_217_1192)">
                <path
                  d="M1.58691 2.25391L27.7468 2.25391V28.4138"
                  stroke="#23231E"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M27.7468 2.25391L1.58691 28.4138"
                  stroke="#23231E"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_217_1192">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <p className="text-[1rem]/[1.3] ">
              Based on data and driving — not credit scores.
            </p>
          </div>
        </div>
        <div className="mt-40">
          <Image
            src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/668044e56d29b9531a601ed6_Screenshot%202024-06-29%20at%201.30.49%20PM.avif"
            alt="Loop Info"
            width="1200"
            height="800"
          />
        </div>

        <div className="flex flex-col gap-8 mt-20 text-black">
          <h2 className="text-[2.5rem]/[80%] font-black -tracking-[.1rem]">
            NOT YOUR TYPICAL <br /> INSURANCE COMPANY
          </h2>
          <p className="text-[1rem]/[1.3]">
            But dont just take our word for it...
          </p>

          <TestimonialSlider />
        </div>
      </section>

      {/* Insurance Section */}
      <section
        id="insurance"
        className="bg-[#faf0b9] p-10 lg:p-20 flex flex-col lg:flex-row gap-6 lg:gap-0 items-center text-center lg:text-start lg:items-end"
      >
        <div className="flex flex-col gap-6 text-black basis-auto">
          <h2 className="text-[2.5rem]/[80%] font-black -tracking-[.1rem]">
            INSURANCE FOR <br /> UNDERSERVED <br /> COMMUNITIES
          </h2>
          <p className="text-[1rem]/[1.3]">
            LOOP is purpose-built to insure underserved communities. Our
            equitable approach to pricing removes the use of credit score,
            education, and occupation in our rates, making us significantly more
            competitive for everyday, working-class families.
          </p>
          <button className="mx-auto lg:mx-0 border-2 px-3 py-4 text-center rounded-[32px] text-lg/[40%] hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 text-black border-black bg-transparent w-max">
            Our Story
          </button>
        </div>
        <div>
          <Image
            src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667f21eb5b6c0f17a2662e4d_639c619a4d03cc80e5d02c2a_Family%20of%203%20smiling-p-800.webp"
            width="1600"
            height="750"
            alt="Insurance Photo"
          />
        </div>
      </section>

      {/* Feature Blog Section */}
      <section
        id="featureBlog"
        className="bg-white p-10 lg:p-20 flex flex-col gap-12"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start justify-start md:justify-between md:items-center">
          <div className="text-black flex flex-col gap-2 items-center">
            <InView threshold={0.1}>
              {({ inView, ref }) => (
                <h2 className="text-6xl font-black" ref={ref}>
                  {inView ? (
                    <CountUp
                      start={1359 - 300}
                      end={1359}
                      duration={2}
                      separator=","
                      prefix="$"
                    />
                  ) : (
                    "$0"
                  )}
                </h2>
              )}
            </InView>

            <p className="text-xs">Yearly average savings per Member</p>
          </div>
          <div className="text-black flex flex-col gap-2 items-center">
            <InView threshold={0.1}>
              {({ inView, ref }) => (
                <h2 className="text-6xl font-black" ref={ref}>
                  {inView ? (
                    <CountUp start={91 - 70} end={91} duration={2} />
                  ) : (
                    "0%"
                  )}
                  %
                </h2>
              )}
            </InView>
            <p className="text-xs">Customer service satisfaction</p>
          </div>
          <div className="text-black flex flex-col gap-2 items-center">
            <InView threshold={0.1}>
              {({ inView, ref }) => (
                <h2 className="text-6xl font-black" ref={ref}>
                  {inView ? (
                    <CountUp
                      start={100 - 40}
                      end={100}
                      duration={2}
                      prefix="$"
                    />
                  ) : (
                    "$0"
                  )}
                  M
                </h2>
              )}
            </InView>
            <p className="text-xs">Lifetime pledge to our community</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:mt-20">
          <h2 className="uppercase text-4xl font-black text-black">
            featured blog
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#ebebdc] rounded-[12px] flex flex-col gap-5 p-6">
              <Image
                src="https://cdn.prod.website-files.com/6399ea71bf3ea34f516c1523/65173237fc9a1f886cf3bf0a_homebuying%20tips%20costs-min-p-500.webp"
                alt="feature blog 1"
                width="350"
                height="200"
              />
              <h5 className="text-black text-xl">
                A First-Time Homebuyer’s Guide: The Costs You’ll Need to
                Calculate
              </h5>

              <button className="border-b-2 cursor-pointer text-black hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 max-w-max">
                Learn More
              </button>
            </div>
            <div className="bg-[#ebebdc] rounded-[12px] flex flex-col gap-5 p-6">
              <Image
                src="https://cdn.prod.website-files.com/6399ea71bf3ea34f516c1523/65173237fc9a1f886cf3bf0a_homebuying%20tips%20costs-min-p-500.webp"
                alt="feature blog 1"
                width="350"
                height="200"
              />
              <h5 className="text-black text-xl">
                A First-Time Homebuyer’s Guide: The Costs You’ll Need to
                Calculate
              </h5>

              <button className="border-b-2 cursor-pointer text-black hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 max-w-max">
                Learn More
              </button>
            </div>
            <div className="bg-[#ebebdc] rounded-[12px] flex flex-col gap-5 p-6">
              <Image
                src="https://cdn.prod.website-files.com/6399ea71bf3ea34f516c1523/65173237fc9a1f886cf3bf0a_homebuying%20tips%20costs-min-p-500.webp"
                alt="feature blog 1"
                width="350"
                height="200"
              />
              <h5 className="text-black text-xl">
                A First-Time Homebuyer’s Guide: The Costs You’ll Need to
                Calculate
              </h5>

              <button className="border-b-2 cursor-pointer text-black hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 max-w-max">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Hero */}
      <TestimonialSliderHero />

      {/*Become Member  */}
      <section
        id="becomeMember"
        className="bg-[#faf0b9] p-10 lg:p-20 flex flex-col items-center gap-10 text-black"
      >
        <h2 className="text-3xl/[80%] lg:text-4xl/[80%] font-black uppercase -tracking-[0.1rem] text-center">
          Become A Member
        </h2>
        <p className="text-xs text-center font-medium max-w-[20rem] mx-auto">
          Get your quote in minutes and see how much you can save when car
          insurance is fair.
        </p>
        <button className="border-2 px-3 py-4 text-center rounded-[32px] text-sm/[40%] hover:-translate-y-1.5 transition-all duration-200 ease-in-out hover:scale-105 bg-black border-black text-white">
          Get Your Price
        </button>
      </section>
    </div>
  );
}
