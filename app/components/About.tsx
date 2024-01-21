"use client";
import React from "react";
import { Raleway } from "next/font/google";
import ayo from "../../public/ayo.png";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const raleway = Raleway({ subsets: ["latin"] });

export default function About() {
  return (
    <div className=" py-24 bg-gray-100" id="about">
      <motion.h1
        initial="hidden"
        variants={fadeIn("down", 0.2)}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className={`header ${raleway.className}`}
      >
        ABOUT ME
      </motion.h1>

      <div className="mx-auto mt-10 flex w-[90%] flex-col items-center justify-center text-left md:max-w-[70vw] lg:text-center ">
        <motion.div
          initial="hidden"
          variants={fadeIn("down", 0.2)}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="my-3"
        >
          <Image
            src={ayo}
            alt="ayo"
            height={70}
            width={70}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          variants={fadeIn("up", 0.1)}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="mt-5 gap-y-5"
        >
          <p className="">
            <span>Hi, I'm Michael</span>. I am a design-driven and
            detail-oriented software engineer who is passionate about combining
            elegant code with beautiful design. I have experience developing and
            designing software for the web, ranging from simple landing pages to
            progressive web applications.
          </p>
          <p className="my-6">
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
        </motion.div>
      </div>
    </div>
  );
}
