import Link from "next/link";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";

export default function SideWidget() {
  return (
    <div className="hidden lg:block absolute left-0">
    <div className="shadow-3xl flex flex-col justify-around gap-3 bg-base-100 py-4 pr-2 rounded-md">
      <div className="p-2 hover:bg-slate-600 rounded-sm ">
        <Link href="https://linkedin.com/in/ayoola-michael" target="_blank">
          <FaLinkedin size={40} />
        </Link>
      </div>
      <div className="p-2 hover:bg-slate-600 rounded-sm">
        <Link href="https://github.com/ayvvla" target="_blank">
          <FaGithubSquare size={40} />
        </Link>
      </div>
      <div className="p-2 hover:bg-slate-600 rounded-sm">
        <Link href="https://twitter.com/Ayvvla" target="_blank">
          <FaTwitterSquare size={40} />
        </Link>
      </div>
      <div className="p-2 hover:bg-slate-600 rounded-sm">
        <Link href="https://dev.to/ayvvla" target="_blank">
          <FaDev size={40} />
        </Link>
      </div>
    </div>
    </div>  );
}
