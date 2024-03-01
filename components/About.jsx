import React from "react";
import Image from "next/image";
import LaptopImg from "@/public/laptop.jpg"
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          {/* <p className="py-2 text-gray-600">//I am not your normal developer</p> */}
          <p className="py-2 text-gray-600">
          My name is Raj and I am a videographer and full stack developer. I&apos;ve honed a sharp eye for capturing intricate details and telling compelling stories through my lens. In my free time, I enjoy listening to music, I have always had a love for music and find that it helps to relax and inspire me in my work.

          </p>
          <p className="py-2 text-gray-600">
          I initially started coding in my college days , but quickly realized that it was something I was truly passionate about and decided to pursue a career change. It was a big decision, but I am excited to be able to do what I love and help others in the process.
          </p>
          <Link href="/#projects" ><p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p></Link>
        </div>
        <div className="w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl"
            src={LaptopImg}
            alt="/"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
