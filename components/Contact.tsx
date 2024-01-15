"use client";
import { useEffect, useRef } from "react";
import { submit } from "@/app/formaction";
import Submitbutton from "./submit-button";
import "react-toastify/dist/ReactToastify.css";
import { useFormState } from "react-dom";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submit, {
    status: "",
    message: "",
  });

  useEffect(() => {
    if (formRef.current && state.status === "success") formRef.current.reset();
  }, [state.status]);

  return (
    <div className=" mx-auto bg-gray-100 px-8 py-16" id="contact">
      <h1 className="header">Contact</h1>
      <div className=" mt-10 ">
        <p className="text-center text-sm md:text-lg">
          Have a sweet project in mind or just want to say hi? <br /> Feel free
          to send me a message!
        </p>
        <form
          ref={formRef}
          className="form-control mx-auto mt-10 max-w-lg gap-6 md:mt-20"
          action={formAction}
        >
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="name"
              id="name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
              autoComplete="true"
            />
            <label
              htmlFor="name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Name
            </label>
          </div>

          <div className="group relative z-0 mb-5 w-full">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
              autoComplete="true"
            />
            <label
              htmlFor="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 "
            >
              Email
            </label>
          </div>

          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="subject"
              id="email"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 "
            >
              Subject
            </label>
          </div>

          <div className="group relative z-0 mb-5 w-full">
            <textarea
              rows={5}
              name="message"
              id="message"
              className="peer block w-full resize-none appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="message"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-100 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-75 peer-focus:start-0 peer-focus:-translate-y-10 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 "
            >
              Your message
            </label>
          </div>
          <Submitbutton />
          <small aria-live="polite" className="" role="status">
            {state?.message}
          </small>
        </form>
      </div>
    </div>
  );
}
