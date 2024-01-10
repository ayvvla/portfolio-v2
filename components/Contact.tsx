'use client'
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

export default function Contact() {
  const form = useRef(null)
  
  const sendEmail = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.current)
    if (
      process.env.SERVICE_ID &&
      process.env.TEMPLATE_ID &&
      process.env.USER_ID && form.current
      
    ) {
      emailjs.sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID, form.current,
        process.env.USER_ID,
      )
      .then((result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
      )
    }
  };

  return (
    <div className="min-h-[100vh] bg-gray-100 pt-16" id="contact">
      <h1 className="header">Contact</h1>
      <div className=" mt-20">
        <p className="text-center">
          Have a sweet project in mind or just want to say hi? <br /> Feel free
          to send me a message!
        </p>
        <form
          ref={form}
          className="form-control mx-auto mt-20 max-w-lg gap-6"
          onSubmit={sendEmail}
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
            <textarea
              rows={5}
              name="message"
              id="message"
              className="peer block w-full resize-none appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="message"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-100 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-10 peer-focus:scale-100 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 "
            >
              Your message
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
