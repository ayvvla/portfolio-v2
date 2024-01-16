"use client";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-gray-200 bg-white uppercase">
      <div className="mx-auto flex max-w-[95%] items-center justify-between py-6">
        <Link
          to=""
          onClick={scroll.scrollToTop}
          spy={true}
          smooth={true}
          duration={500}
          className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            Ayoola
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-l hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse ">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="text-primary"
                className="block cursor-pointer rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="text-primary"
                className="block cursor-pointer rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                activeClass="text-primary"
                className="block cursor-pointer rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
                activeClass="text-primary"
                className="block cursor-pointer rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
