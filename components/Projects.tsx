import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import tracy from "../assets/tracy.jpg";
import movie from "../assets/moviedb.jpg";
import blockboi from "../assets/blockboi.jpg";
import notes from "../assets/note.jpg";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div className="mt-16 bg-gray-50 px-2" id="projects">
      <div className="mx-auto max-w-[95%]">
        <h1
          className={`header ${raleway.className} mb-24 before:translate-x-10`}
        >
          Projects
        </h1>

        <div className=" mx-auto flex max-w-[90%] flex-col gap-16">
          <div className="flex flex-col lg:gap-5 gap-10 lg:flex-row">
            <Image
              src={tracy}
              height={500}
              width={500}
              alt="tracy"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <div className=" flex w-full flex-col justify-center gap-6 rounded-md ">
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Tracy</h1>
                <p>
                  This is a personal portfolio website of a Tracy Melon
                  showcasing her splendid works over the years, an about section
                  and also a contact page
                </p>
                <div className="flex gap-2 whitespace-nowrap text-xs font-medium">
                  <div className="rounded-sm bg-gray-200 p-2">Javascript</div>
                  <div className="rounded-sm bg-gray-200 p-2">React</div>
                  <div className="rounded-sm bg-gray-200 p-2">Tailwind CSS</div>
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
            </div>
          </div>

          <div className="flex flex-col lg:gap-5 gap-10 lg:flex-row">
            <Image
              src={movie}
              height={500}
              width={500}
              alt="React movie trailer"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <div className="-center flex w-full flex-col justify-center gap-6 rounded-md ">
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Movie Trailer App</h1>
                <p>
                  This is a personal portfolio website of a Tracy Melon
                  showcasing her splendid works over the years, an about section
                  and also a contact page
                </p>
                <div className="flex gap-2 whitespace-nowrap text-xs font-medium">
                  <div className="rounded-sm bg-gray-200 p-2">Javascript</div>
                  <div className="rounded-sm bg-gray-200 p-2">React</div>
                  <div className="rounded-sm bg-gray-200 p-2">Tailwind CSS</div>
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
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-5 lg:flex-row">
            <Image
              src={blockboi}
              height={500}
              width={500}
              alt="Notes app"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <div className=" flex w-full flex-col justify-center gap-6 rounded-md ">
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Blockboi E-commerce App</h1>
                <p>
                  This is a personal portfolio website of a Tracy Melon
                  showcasing her splendid works over the years, an about section
                  and also a contact page
                </p>
                <div className="flex gap-2 text-xs font-medium">
                  <div className="rounded-sm bg-gray-200 p-2">Next</div>
                  <div className="rounded-sm bg-gray-200 p-2">Tailwind Css</div>
                  <div className="rounded-sm bg-gray-200 p-2">Prisma</div>
                  <div className="rounded-sm bg-gray-200 p-2">Mongo DB</div>
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
            </div>
          </div>

          <div className="flex flex-col lg:gap-5 gap-10 lg:flex-row">
            <Image
              src={notes}
              height={500}
              width={500}
              alt="Notes app"
              className="h-auto w-[100%] rounded-md object-cover"
            />
            <div className=" flex w-full flex-col justify-center gap-6 rounded-md ">
              <div className="flex flex-col gap-2 rounded-md lg:p-4">
                <h1 className="text-xl font-bold">Notes App</h1>
                <p>
                  This is a personal portfolio website of a Tracy Melon
                  showcasing her splendid works over the years, an about section
                  and also a contact page
                </p>
                <div className="flex gap-2 whitespace-nowrap text-xs font-medium">
                  <div className="rounded-sm bg-gray-200 p-2">Javascript</div>
                  <div className="rounded-sm bg-gray-200 p-2">React</div>
                  <div className="rounded-sm bg-gray-200 p-2">Tailwind CSS</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
