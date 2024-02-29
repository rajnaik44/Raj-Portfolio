import React from "react";
import Image from "next/image";
import HTML from "@/public/assets/skills/html.png";
import CSS from "@/public/assets/skills/css.png";
import JAVASCRIPT from "@/public/assets/skills/javascript.png";
import TAILWIND from "@/public/assets/skills/tailwind.png";
import REACT from "@/public/assets/skills/react.png";
import NEXTJS from "@/public/assets/skills/nextjs.png";
import NODEJS from "@/public/assets/skills/node.png";
import MONGODB from "@/public/assets/skills/mongo.png";
import GITHUB from "@/public/assets/skills/github1.png";


const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Html</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSS} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JAVASCRIPT} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TAILWIND} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={REACT} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NEXTJS} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NODEJS} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MONGODB} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GITHUB} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
