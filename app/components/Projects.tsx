"use client";
import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import tracy from "../../assets/tracy.jpg";
import movie from "../../assets/moviedb.jpg";
import blockboi from "../../assets/blockboi.jpg";
import notes from "../../assets/note.jpg";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const raleway = Raleway({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div className="bg-gray-200 px-2 py-16" id="projects">
      <div className="mx-auto max-w-[95%]">
        <motion.h1
          initial="hidden"
          variants={fadeIn("down", 0.1)}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className={`header ${raleway.className} mb-24 before:translate-x-10`}
        >
          Projects
        </motion.h1>

        <div className=" mx-auto flex max-w-[90%] flex-col gap-16">
          <div className="flex flex-col gap-10 lg:gap-5 xl:flex-row">
            <Image
              src={tracy}
              height={500}
              width={500}
              alt="tracy"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <motion.div
              initial="hidden"
              variants={fadeIn("left", 0.2)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=" flex w-full flex-col justify-center gap-6 rounded-md "
            >
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Tracy</h1>
                <p className="text-sm">
                  This is a personal portfolio website of a Tracy Melon
                  showcasing her splendid works over the years, an about section
                  and also a contact page
                </p>
                <div className="flex gap-2 whitespace-nowrap text-xs font-medium">
                  <div className="rounded-sm bg-gray-100 p-2">Javascript</div>
                  <div className="rounded-sm bg-gray-100 p-2">React</div>
                  <div className="rounded-sm bg-gray-100 p-2">Tailwind CSS</div>
                </div>
                <div className="mt-6 flex gap-6">
                  <Link href="https://tracymelonarts.com">
                    <button className="btn btn-primary">Visit Site</button>
                  </Link>
                  <Link href="https://github.com/ayvvla/Tracy">
                    <button className="btn btn-primary">View Source</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-5 xl:flex-row">
            <Image
              src={movie}
              height={500}
              width={500}
              alt="React movie trailer"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <motion.div
              initial="hidden"
              variants={fadeIn("left", 0.3)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=" flex w-full flex-col justify-center gap-6 rounded-md "
            >
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Movie Trailer App</h1>
                <p className="text-sm ">
                  This app is a movie trailer app, It's an app to check and
                  search for movies and also watch trailers of the movie. It's
                  built with tmdb api and reactjs with context api
                </p>
                <div className="flex gap-2 whitespace-nowrap text-xs font-medium">
                  <div className="rounded-sm bg-gray-100 p-2">Javascript</div>
                  <div className="rounded-sm bg-gray-100 p-2">React</div>
                  <div className="rounded-sm bg-gray-100 p-2">Tailwind CSS</div>
                </div>
                <div className="mt-6 flex gap-6">
                  <Link href="https://reactmovietrailer.netlify.app">
                    <button className="btn btn-primary">Visit Site</button>
                  </Link>
                  <Link href="https://github.com/ayvvla/Movie-app">
                    <button className="btn btn-primary">View Source</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-5 xl:flex-row">
            <Image
              src={blockboi}
              height={500}
              width={500}
              alt="Notes app"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <motion.div
              initial="hidden"
              variants={fadeIn("left", 0.4)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=" flex w-full flex-col justify-center gap-6 rounded-md "
            >
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Blockboi E-commerce App</h1>
                <p className="text-sm">
                  Blcokboi ecommerce app allows users to shop online, browse
                  product catalogs, add items to cart and also complete
                  purchases. It was built with Nextjs, tailwind, mongoDB database and prisma as the ORM of choice. Users can also complete payment processing using Flutterwave
                </p>
                <div className="flex gap-2 text-xs font-medium">
                  <div className="rounded-sm bg-gray-100 p-2">Next</div>
                  <div className="rounded-sm bg-gray-100 p-2">TailwindCss</div>
                  <div className="rounded-sm bg-gray-100 p-2">Prisma</div>
                  <div className="rounded-sm bg-gray-100 p-2">MongoDB</div>
                  <div className="rounded-sm bg-gray-100 p-2">Typescript</div>
                </div>
                <div className="mt-6 flex gap-6">
                  <Link href="https://beautnotes.netlify.app">
                    <button className="btn btn-primary">Visit Site</button>
                  </Link>
                  <Link href="https://github.com/ayvvla/blockboi">
                    <button className="btn btn-primary">View Source</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-5 xl:flex-row">
            <Image
              src={notes}
              height={500}
              width={500}
              alt="Notes app"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <motion.div
              initial="hidden"
              variants={fadeIn("left", 0.5)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=" flex w-full flex-col justify-center gap-6 rounded-md "
            >
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Notes App</h1>
                <p className="text-sm">
                  A simple react note app, where users can create notes, it is
                  persisted across reloads and new tabs using local storage.
                  Also included is a search functionality and also deleting an
                  existing note
                </p>
                <div className="flex gap-2 whitespace-nowrap text-xs font-medium">
                  <div className="rounded-sm bg-gray-100 p-2">Javascript</div>
                  <div className="rounded-sm bg-gray-100 p-2">React</div>
                  <div className="rounded-sm bg-gray-100 p-2">Tailwind CSS</div>
                </div>
                <div className="mt-6 flex gap-6">
                  <Link href="https://beautnotes.netlify.app">
                    <button className="btn btn-primary">Visit Site</button>
                  </Link>
                  <Link href="https://github.com/ayvvla/react-note">
                    <button className="btn btn-primary">View Source</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
