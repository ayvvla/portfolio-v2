"use client";
import Typewriter from "typewriter-effect";

export default function () {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello World.",
          "I'm a passionate and results-driven web developer",
        ],
        autoStart: true,
        loop: true,
        delay:100
      }}
    />
  );
}
