
'use client'
import React from "react";
import { IoMdRocket } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";

export default function ScrollToTop() {
  const scrollToTop = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    scroll.scrollToTop()
  };

  return (
    <div>
      <div
        className="tooltip tooltip-bottom cursor-pointer"
        data-tip="Beam me up scotty!"
        onClick={scrollToTop}
      >
        <IoMdRocket size={40} />
      </div>
    </div>
  );
}
