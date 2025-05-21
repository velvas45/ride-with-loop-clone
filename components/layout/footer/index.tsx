import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 md:p-20">
      <div className="flex flex-col md:flex-row justify-between border-b-2 border-white pb-6">
        <div className="flex flex-col gap-6 basis-full">
          <Image
            src="https://cdn.prod.website-files.com/6388bf0d900a4d808eddf1ab/6399da2bda32eaf51a42eccc_LOOP_Logo_White.svg"
            alt="Loop Logo"
            width={80}
            height={80}
            className="color-white"
          />
          <p className="font-medium text-sm">Car insurance that DRIVES GOOD.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 basis-full">
          <div className="flex flex-col gap-4 basis-full">
            <h5 className="text-sm">Company</h5>
            <ul className="text-xs list-none flex flex-col gap-3">
              <li>Our Story</li>
              <li>Building LOOP </li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 basis-full">
            <h5 className="text-sm">Resources</h5>
            <ul className="text-xs list-none flex flex-col gap-3">
              <li>Get Help</li>
              <li>Coverages</li>
              <li>News</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-5 gap-3 md:gap-0">
        <div>
          <span className="text-xs">© {new Date().getFullYear()} LOOP</span>
        </div>
        <div className="flex md:items-center gap-6 flex-col md:flex-row">
          <span className="text-xs underline">Privacy Policy</span>
          <span className="text-xs underline">Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
