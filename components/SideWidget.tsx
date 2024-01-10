import Link from "next/link";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";

export default function SideWidget() {
  return (
    <div className="shadow-3xl absolute left-0 flex flex-col justify-around gap-3 bg-base-100 py-4 pr-2">
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
        <Link href="https://dev.to/ayvvla" target="_blank">
          <FaDev size={40} />
        </Link>
      </div>
    </div>
  );
}
