"use client";
import { Raleway } from "next/font/google";
import {
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { LayoutGroup, motion } from "framer-motion";
import { fadeIn } from "@/variants";

const raleway = Raleway({ subsets: ["latin"] });

export default function Skills() {
  return (
    <div className=" mb-32 mt-24 px-4 text-center tracking-widest" id="skills">
      <motion.h1
        initial="hidden"
        variants={fadeIn("down", 0.2)}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={`header ${raleway.className} before:translate-x-4`}
      >
        Skills
      </motion.h1>
      <motion.p
        initial="hidden"
        variants={fadeIn("down", 0.2)}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="my-10"
      >
        I have experience with these technologies{" "}
      </motion.p>

      <motion.div
        initial="hidden"
        variants={fadeIn("right", 0.1)}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto grid w-[100%] grid-cols-2 place-items-center gap-y-2 md:grid-cols-3 lg:w-[80%] lg:grid-cols-4"
      >
        <div className="icon-wrapper">
          <p className="icon-text">HTML 5</p>
          <FaHtml5
            className="icons fill-red-600 hover:fill-red-900"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">CSS3</p>
          <FaCss3Alt
            className="icons fill-blue-600 hover:fill-blue-900"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text whitespace-nowrap">Tailwind CSS</p>
          <SiTailwindcss
            className="icons fill-primary hover:fill-secondary"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Sass</p>
          <FaSass
            className="icons fill-secondary hover:fill-primary"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Javascript</p>
          <IoLogoJavascript
            className="icons fill-yellow-600 hover:fill-yellow-900"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Typescript</p>
          <SiTypescript
            className="icons fill-sky-600 hover:fill-sky-900"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">React</p>
          <FaReact
            className="icons fill-secondary hover:fill-blue-700"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Vue</p>
          <FaVuejs
            className="icons fill-green-700 hover:fill-green-800"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Next js</p>
          <SiNextdotjs className="icons hover:invert-[15%]" size={60} />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Redux</p>
          <SiRedux
            className="icons fill-emerald-700 hover:fill-emerald-900 hover:invert-[15%]"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Prisma</p>
          <SiPrisma
            className="icons fill-lime-700 hover:fill-lime-900"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Supabase</p>
          <SiSupabase
            className="icons fill-green-600 hover:fill-green-400"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Mongo Db</p>
          <SiMongodb
            className="icons fill-teal-600 hover:fill-teal-800"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Github</p>
          <FaGithubSquare className="icons" size={60} />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Firebase</p>
          <SiFirebase
            className="icons fill-amber-600 hover:fill-amber-400"
            size={60}
          />
        </div>
        <div className="icon-wrapper">
          <p className="icon-text">Vercel</p>
          <SiVercel className="icons" size={60} />
        </div>
      </motion.div>
    </div>
  );
}
