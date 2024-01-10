import React from "react";
import { Raleway } from "next/font/google";
import SideWidget from "./SideWidget";
import Link from "next/link";
import Typewriter from "./Typewriter";

const raleway = Raleway({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="hero relative min-h-[90vh] bg-base-200">
      <div className="hero-content flex-col gap-20 text-center">
        <div className="flex max-w-3xl flex-col items-center">
          <h1
            className={`text-5xl font-extrabold uppercase ${raleway.className}`}
          >
            hello, i'm <span>Ayoola Michael</span>
          </h1>
          <div className="mt-1 text-xs font-light text-neutral">
            <Typewriter />
          </div>

          <p className="my-14">
            I specialize in front-end development, utilizing cutting-edge
            technologies to bring design concepts to life. From responsive
            layouts to captivating animations, I strive to make every click
            memorable. At the heart of my work is a deep commitment to turning
            creative visions into interactive, user-friendly websites
          </p>
          <Link href="#projects">
            <button className="btn btn-primary btn-wide">View Projects</button>
          </Link>
        </div>
        <SideWidget />
      </div>
    </div>
  );
}
