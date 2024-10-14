"use client"; // Ensure this is the first line in the file
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="mt-12"> {/* Added mt-12 for top margin */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
              Hello, I am{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Ummay",
                1000,
                "Web Developer",
                1000,
               "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block", lineHeight: "1" }} // Added lineHeight
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            consequuntur nihil ad earum vero expedita culpa natus, velit
            repudiandae nobis eligendi impedit doloremque, et itaque voluptate
            commodi perspiciatis, nam aperiam!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-yellow-600 to-pink-800 hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px- py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-red-600 to-yellow-800 hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Profile-image.png"
              alt="profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
