import Image from "next/image";

const OurStoryBanner = () => {
  return (
    <div className="pl-10 lg:pl-24 flex flex-col lg:flex-row gap-6 bg-[#ebebdc]">
      <div className="flex flex-col gap-6 basis-[120%]">
        <h2 className="text-5xl/[80%] font-black uppercase">Our Story</h2>
        <p className="text-xl font-medium">
          We started LOOP because we believe the insurance system didn’t work
          for everybody equally. Carey and I were raised in working class
          families, and if there’s one thing you’re reminded of at every turn,
          it’s that the edges are stacked against you.
        </p>
        <p className="text-xl font-medium">
          We thought:{" "}
          <span className="font-bold">
            what if we founded an insurance company purpose-built for our
            community?
          </span>{" "}
          One that deeply understands, accepts, and uplifts you. An insurer
          built on transparency for its communities, members, and partner
          agents.
        </p>
        <p className="text-xl font-medium">
          Thus, LOOP was born. Built on the pillars of{" "}
          <span className="font-bold">
            fair and equitable insurance, dignified member care and community
            impact.
          </span>
        </p>
        <p className="text-xl font-medium">We’re so glad you’re here.</p>
        <p className="text-xl font-medium">
          <span className="font-bold">Carey Anne + John Henry</span> <br /> LOOP
          CEOs
        </p>

        <Image
          src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667eab26f33579bbbb8ac04b_Carey%20Anne%20John%20Henry.webp"
          alt="autograph"
          width={220}
          height={30}
        />
      </div>
      <div className="basis-auto w-full h-full">
        <Image
          src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/667eee8021a334cdf387d0ef_Frame%203993884-p-1080.avif"
          alt="our story image"
          width={300}
          height={300}
          className="w-full bg-cover"
        />
      </div>
    </div>
  );
};

export default OurStoryBanner;
