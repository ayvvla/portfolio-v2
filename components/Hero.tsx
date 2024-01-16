"use client";
import React from "react";
import { Raleway } from "next/font/google";
import SideWidget from "./SideWidget";
import Typewriter from "./Typewriter";
import { Link } from "react-scroll";
import aa from '../assets/aaa.webp'
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="hero relative min-h-[80vh] bg-base-200 bg-[aa]">
      <div className=""></div>
      <Image src={aa} alt='hero image' className="hero-overlay"/>
      <div className="hero-content flex-col gap-20 text-center">
        <div className="flex max-w-3xl flex-col items-center mt-9">
          <h1
            className={`text-3xl md:text-4xl font-extrabold uppercase ${raleway.className} mt-4`}
          >
            hello, i'm <span>Ayoola Michael</span>
          </h1>
          <div className="mt-0 text-xs font-light text-neutral">
            <Typewriter />
          </div>

          {/* <p className="my-14">
            I specialize in front-end development, utilizing cutting-edge
            technologies to bring design concepts to life. From responsive
            layouts to captivating animations, I strive to make every click
            memorable. At the heart of my work is a deep commitment to turning
            creative visions into interactive, user-friendly websites
          </p> */}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <button className="btn btn-primary btn-wide mt-10">View Projects</button>
          </Link>
        </div>
        <SideWidget />
      </div>
    </div>
  );
}
