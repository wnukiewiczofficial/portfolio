import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HiUser,
  HiClipboardList,
  HiCode,
  HiChatAlt,
  HiChevronDoubleUp,
} from "react-icons/hi";

export default function NavBar({ cardRef, contentRef }) {
  const [inContent, setInContent] = useState();
  const navRef = useRef();

  useEffect(() => {
    if (inContent) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
      navRef.current.classList.replace(
        "-translate-y-[150%]",
        "translate-y-1/2"
      );
    } else {
      navRef.current.classList.replace(
        "translate-y-1/2",
        "-translate-y-[150%]"
      );
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inContent]);

  return (
    <>
      {/* mobile */}
      <nav
        ref={navRef}
        className="lg:hidden absolute top-full h-20 left-1/2 -translate-x-1/2 -translate-y-[150%] w-5/6 rounded-2xl bg-themeTwo transition duration-200 z-20"
      >
        <ul className="flex w-full h-full items-center justify-around text-sm">
          <Link
            to="/me"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiUser className="text-4xl" />
            <span>Me</span>
          </Link>
          <Link
            to="/"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiClipboardList className="text-4xl" />
            <span>Resume</span>
          </Link>
          <Link
            to="/"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiCode className="text-4xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiChatAlt className="text-4xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </nav>
      {/* desktop */}
      <nav className="hidden lg:flex self-start p-12 h-20 rounded-2xl bg-themeTwo transition duration-200">
        <ul className="w-full flex gap-8 h-full items-center justify-between text-sm text-center relative">
          <Link
            to="/me"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiUser className="text-5xl" />
            <span>Me</span>
          </Link>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiClipboardList className="text-5xl" />
            <span>Resume</span>
          </Link>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiCode className="text-5xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiChatAlt className="text-5xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </nav>
      <div className="lg:hidden absolute flex h-20 justify-center items-center left-0 top-full translate-y-[150%] w-full p-4 transition duration-200 z-10">
        <Link to="/" onClick={() => inContent && setInContent(false)}>
          <HiChevronDoubleUp className="text-4xl bg-themeTwo rounded-full p-2" />
        </Link>
      </div>
    </>
  );
}
