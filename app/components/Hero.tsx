"use client";
import React from "react";
import { Raleway } from "next/font/google";
import SideWidget from "./SideWidget";
import Typewriter from "./Typewriter";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import bgImage from "../../assets/hero-bg.jpg";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="hero relative min-h-[100vh] bg-[aa] bg-base-200">
      <div className="hero-overlay bg-base-200 " />

      <Image
        src={bgImage}
        fill
        sizes="100vw"
        placeholder="blur"
        alt="hero background image"
        style = {{
          objectFit: 'fill',
        }}
      />

      <div className="hero-content flex-col gap-20 text-center">
        <div className="flex max-w-3xl flex-col items-center justify-center">
          <h1
            className={`text-3xl font-extrabold uppercase md:text-5xl ${raleway.className} mt-4`}
          >
            hello, i'm <span>Ayoola Michael</span>
          </h1>
          <div className="mt-0 text-xs font-light text-neutral">
            <Typewriter />
          </div>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <button className="btn btn-primary btn-wide mt-20 ">
              View Projects
            </button>
          </Link>
        </div>
        <Link
          className="down-arrow absolute bottom-10 cursor-pointer"
          to="about"
        />
      </div>
      <SideWidget />
    </div>
  );
}
