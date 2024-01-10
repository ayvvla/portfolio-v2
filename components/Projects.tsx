import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import tracy from "../assets/tracy.jpg";
import movie from "../assets/moviedb.jpg";
import blockboi from '../assets/blockboi.jpg'
import notes from '../assets/note.jpg'

const raleway = Raleway({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div className="bg-acccent  mt-16" id="projects">
      <h1 className={`header ${raleway.className} before:translate-x-10`}>
        Projects
      </h1>
      <div className=" mt-10">
        <div className="flex">
          <Image
            src={tracy}
            height={400}
            width={700}
            alt="tracy"
            className="rounded-md"
          />
          <div>
            <h1>Tracy</h1>
          </div>
        </div>
        <div className="flex">
          <Image
            src={movie}
            height={400}
            width={700}
            alt="React movie trailer"
            className="rounded-md"
          />
          <div>
            <h1>Movie</h1>
          </div>
        </div>
        <div className="flex">
          <Image
            src={blockboi}
            height={400}
            width={700}
            alt="React movie trailer"
            className="rounded-md"
          />
          <div>
            <h1>Blockboi</h1>
          </div>
        </div>
        <div className="flex">
          <Image
            src={notes}
            height={400}
            width={700}
            alt="React movie trailer"
            className="rounded-md"
          />
          <div>
            <h1>Blockboi</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}
