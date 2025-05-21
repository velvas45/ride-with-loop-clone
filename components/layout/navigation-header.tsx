"use client";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavigationHeader = () => {
  const [activeMenuDialog, setActiveMenuDialog] = useState("");

  return (
    <div className="bg-white flex items-center justify-between pl-[7%] pr-[11%] h-[3.5rem] relative lg:sticky top-0 right-0 left-0 z-50">
      <Link href="/">
        <Image
          width={70}
          height={40}
          src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/6399da2b6c4668369332c298_LOOP_Logo_Black.svg"
          alt="Loop Logo"
        />
      </Link>

      <div className="flex gap-1 text-[#222] text-[11px]/5 max-lg:hidden">
        <div className="flex items-center gap-2 font-bold pr-2">
          <Link
            href="/our_story"
            className="border-b-3 focus:outline-0 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1 px-2"
          >
            Our Story
          </Link>
          <a
            href="#"
            className="border-b-3 focus:outline-0 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1 px-2"
          >
            Coverages
          </a>
          <div
            role="button"
            className="flex flex-col gap-2 border-b-3 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1 px-2 cursor-pointer relative"
            onClick={() => {
              if (activeMenuDialog == "AGENTS") {
                setActiveMenuDialog("");
              } else {
                setActiveMenuDialog("AGENTS");
              }
            }}
            onMouseLeave={() => {
              setActiveMenuDialog("");
            }}
            onMouseEnter={() => setActiveMenuDialog("AGENTS")}
          >
            <span className="focus:outline-0">Partner Agents</span>
            <nav
              className={cn(
                "min-w-full w-32 left-0 p-3.5 rounded-xl bg-white transform transition-all duration-200 ease-in absolute top-0 text-black flex flex-col gap-2",
                activeMenuDialog == "AGENTS"
                  ? "translate-y-8 opacity-100"
                  : "opacity-0 translate-y-14 "
              )}
            >
              <a
                href="#"
                className="border-b-3 focus:outline-0 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1"
              >
                Become an Agent
              </a>
              <a
                href="#"
                className="border-b-3 focus:outline-0 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1"
              >
                Agent Login
              </a>
            </nav>
          </div>
          <div
            role="button"
            className="flex flex-col gap-2 border-b-3 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1 px-2 cursor-pointer relative"
            onClick={() => {
              if (activeMenuDialog == "HELP") {
                setActiveMenuDialog("");
              } else {
                setActiveMenuDialog("HELP");
              }
            }}
            onMouseLeave={() => {
              setActiveMenuDialog("");
            }}
            onMouseEnter={() => setActiveMenuDialog("HELP")}
          >
            <span className="focus:outline-0">Help</span>
            <nav
              className={cn(
                "min-w-full w-52 left-0 p-3.5 rounded-xl bg-white transform transition-all duration-200 ease-in absolute top-0 text-black flex flex-col gap-2",
                activeMenuDialog == "HELP"
                  ? "translate-y-8 opacity-100"
                  : "opacity-0 translate-y-14 "
              )}
            >
              <a
                href="#"
                className="border-b-3 focus:outline-0 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1"
              >
                Make a Payment
              </a>
              <div className="px-3 flex flex-col gap-2">
                <a href="#" className="focus:outline-0">
                  Add/Remove Vehicle
                </a>
                <a href="#" className="focus:outline-0">
                  Add/Remove Driver
                </a>
                <a href="#" className="focus:outline-0">
                  Lionhorders: Verify Coverage
                </a>
                <a href="#" className="focus:outline-0">
                  File A Claim
                </a>
                <a href="#" className="focus:outline-0">
                  Other
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-3 border-l border-[#e9e9e8] pl-2">
          <button className="px-3 py-2 cursor-pointer hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 hover:-translate-y-1 text-center text-[#23231e] border border-[#23231e] text-xs bg-[#f5e06400] rounded-4xl">
            Manage Policy
          </button>
          <button className="px-3 py-2 cursor-pointer hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 hover:-translate-y-1 text-center text-white text-xs bg-[#23231e] rounded-4xl">
            Get Your Price
          </button>
        </div>
      </div>

      <button className="border-b-3 focus:outline-0 border-white hover:border-black hover:transition-all hover:duration-400 hover:ease-in-out hover:scale-105 hover:-translate-y-1 px-2 text-black">
        Manage Policy
      </button>
    </div>
  );
};

export default NavigationHeader;
