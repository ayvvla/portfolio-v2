"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function Submitbutton() {
  const {pending} = useFormStatus();
  
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
    >
      Submit
      {pending && <div className="loading loading-spinner loading-xs ml-8"></div>}
    </button>
  );
}
