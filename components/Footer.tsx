import Link from "next/link";
import {
  FaDev,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import ScrollToTop from "./ScrollToTop";

export default function () {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-black py-10 text-[#d5d5d5] ">
      <div className="flex items-center justify-center">
        <div className="p-2 hover:bg-slate-600">
          <Link href="https://linkedin.com/in/ayoola-michael" target="_blank">
            <FaLinkedin size={40} />
          </Link>
        </div>
        <div className="p-2 hover:bg-slate-600">
          <Link href="https://github.com/ayvvla" target="_blank">
            <FaGithubSquare size={40} />
          </Link>
        </div>
        <div className="p-2 hover:bg-slate-600">
          <Link href="https://twitter.com/Ayvvla" target="_blank">
            <FaTwitterSquare size={40} />
          </Link>
        </div>
        <div className="p-2 hover:bg-slate-600">
          <Link href="https://wa.me/+2347015082085" target="_blank">
            <FaWhatsappSquare  size={40} />
          </Link>
        </div>
        <div className="p-2 hover:bg-slate-600">
          <Link href="https://dev.to/ayvvla" target="_blank">
            <FaDev size={40} />
          </Link>
        </div>
      </div>

      <ScrollToTop />
      <p className="mt-5 tracking-tighter text-xs">&#169;Ayoola 2023</p>
    </div>
  );
}
