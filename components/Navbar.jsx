'use client'
import Image from "next/image";
import navLogo from "../public/assets/navLogo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu  } from "react-icons/ai";
import { FaLinkedinIn , FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navLogo} alt="/" width={80} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10  text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10  text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/skills">
              <li className="ml-10  text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10  text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? `md:hidden fixed left-0  top-0  w-full  h-screen bg-black/70` : ''}>
        <div className={nav ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10  ease-in duration-500` : `fixed left-[-100%] top-0 p-10  ease-in duration-500`}>
          <div>
            <div className="flex justify-between w-full items-center">
              <Image src={navLogo} alt="/" width={50} height={20} />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary togeather
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect</p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <MdEmail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <BsPersonCircle />
            </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
