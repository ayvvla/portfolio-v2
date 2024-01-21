"use client";
import {useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import logoImage from "../../public/ayo.png";
import { animateScroll as scroll } from "react-scroll";

import { BiMenuAltRight, BiX } from "react-icons/bi";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    scroll.scrollToTop
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white py-4 shadow-md" : "bg-transparent py-4 shadow-none"
      } fixed z-20 mx-auto w-full max-w-[1920px] transition-all duration-300 `}
    >
      <div className="mx-auto flex flex-col md:container md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between px-4">
        <Link
            to='home'
            spy={true}
            smooth={true}
            className="flex cursor-pointer items-center justify-between font-semibold"
          >
            <Image
              src={logoImage}
              width={20}
              height={20}
              alt="Logo"
              className="mr-2 rounded-full"
            />
            
            AYOOLA
          </Link>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl transition duration-300" />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav ? "max-h-max px-4 py-8 md:px-0 md:py-0" : "max-h-0 md:max-h-max"
          }
        flex w-full flex-col gap-y-6 overflow-hidden bg-white text-center text-sm
        font-bold uppercase text-zinc-800 transition-all duration-150 md:h-max md:w-max md:flex-row md:gap-x-8 md:bg-transparent md:pb-0
        md:text-center md:text-[15px] md:font-medium md:normal-case 
        `}
        >
          <Link
            className="cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-primary"
            onClick={toggle}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            activeClass="text-primary"
            onClick={toggle}
          >
            Skills
          </Link>
          <Link
            className="cursor-pointer"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-primary"
            onClick={toggle}
          >
            Projects
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-primary"
            onClick={toggle}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
