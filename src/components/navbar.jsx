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
      navRef.current.classList.remove("-translate-y-full");
    } else {
      navRef.current.classList.add("-translate-y-full");
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inContent]);

  return (
    <>
      {/* mobile */}
      <nav
        ref={navRef}
        className="lg:hidden absolute top-full h-20 left-1/2 -translate-x-1/2 -translate-y-full w-5/6 p-4 rounded-lg bg-gray-500 transition duration-200 z-20"
      >
        <ul className="flex h-full items-center justify-around text-xl relative">
          <Link to="/me" onClick={() => !inContent && setInContent(true)}>
            <HiUser className="text-5xl md:text-2xl" />
          </Link>
          <Link to="/" onClick={() => !inContent && setInContent(true)}>
            <HiClipboardList className="text-5xl md:text-2xl" />
          </Link>
          <Link to="/" onClick={() => !inContent && setInContent(true)}>
            <HiCode className="text-5xl md:text-2xl" />
          </Link>
          <Link to="/" onClick={() => !inContent && setInContent(true)}>
            <HiChatAlt className="text-5xl md:text-2xl" />
          </Link>
        </ul>
      </nav>
      {/* desktop */}
      <nav className="hidden lg:flex w-full p-4 h-20 rounded-lg bg-gray-500 transition duration-200">
        <ul className="w-full flex h-full items-center justify-around text-xl relative">
          <Link to="/me">
            <HiUser className="text-5xl" />
          </Link>
          <Link to="/">
            <HiClipboardList className="text-5xl" />
          </Link>
          <Link to="/">
            <HiCode className="text-5xl" />
          </Link>
          <Link to="/">
            <HiChatAlt className="text-5xl" />
          </Link>
        </ul>
      </nav>
      <div className="lg:hidden absolute flex h-20 justify-center top-full translate-y-full w-full p-4 rounded-lg transition duration-200 z-10">
        <Link to="/" onClick={() => inContent && setInContent(false)}>
          <HiChevronDoubleUp className="text-2xl" />
        </Link>
      </div>
    </>
  );
}
