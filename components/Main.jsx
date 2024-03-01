import React from "react"
import { FaLinkedinIn , FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">LET"S BUILD SOMETHING TOGEATHER</p>
            <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Raj</span>
            </h1>
            <h1 className="py-4 text-gray-700">A Full-Stack Web Developer
            </h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full-stack web Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web application while learning back-end technologies
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="http://www.linkedin.com/in/rajnaik44" target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
            </div>
                </a>
                <a href="https://github.com/rajnaik44" target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaGithub />
            </div>
            </a>
            <a href="mailto:raj44.naik@gmail.com" target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <MdEmail />
            </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <BsPersonCircle />
            </div>

            </div>
            </div>
        </div>
    </div>
  )
}
