import React from "react";
import { Raleway } from "next/font/google";
import ayo from "../public/ayo.png";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="mb-32 mt-24" id="about">
      <h1 className={`header ${raleway.className}`}>ABOUT ME</h1>
      

      <div className="mt-10 flex flex-col items-center justify-center gap-y-5 text-left lg:text-center w-[90%] mx-auto md:max-w-[70vw] ">
        <div className="my-5">
          <Image
            src={ayo}
            alt="ayo"
            height={80}
            width={80}
            className="rounded-full"
          />
        </div>
        <p className="">
          <span>Hi, I'm Michael</span>. I am a design-driven and detail-oriented
          software engineer who is passionate about combining elegant code with
          beautiful design. I have experience developing and designing software
          for the web, ranging from simple landing pages to progressive web
          applications.
        </p>
        <p className="">
          My goal is to create software that not only functions efficiently
          under the hood but also provides intuitive, pixel-perfect user
          experiences. I enjoy discovering new and improved methods to develop
          user-friendly interfaces with streamlined, effective, and scalable
          code. I view work as a continuous learning process and actively seek
          out opportunities to collaborate with individuals who are eager to
          share their expertise, just as I am eager to learn. Ultimately, my
          main objective is to produce exceptional work alongside those who
          inspire me to do my best.
        </p>
        <p className="">
          When I'm not in front of a computer screen, I'm probably watching an
          old sitcom, playing a video game or reading a thriller novel.
        </p>
      </div>
    </div>
  );
}
