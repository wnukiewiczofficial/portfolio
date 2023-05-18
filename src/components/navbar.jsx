import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HiUser,
  HiClipboardList,
  HiCode,
  HiChatAlt,
  HiChevronDoubleUp,
} from "react-icons/hi";

import { useSpring, animated } from "react-spring";

export default function NavBar({ cardRef, contentRef, navPopRef }) {
  const [inContent, setInContent] = useState();
  const navRef = useRef();
  const navMove = useSpring({
    x: "-50%",
    y: inContent ? "150%" : "-50%",
  });
  const navPop = useSpring({
    from: { scale: 0 },
    scale: 1,
    ref: navPopRef,
  });

  useEffect(() => {
    if (inContent) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inContent]);

  return (
    <>
      {/* mobile */}
      <animated.nav
        ref={navRef}
        style={{ ...navPop, ...navMove }}
        className="lg:hidden absolute h-20 bottom-0 left-1/2 w-5/6 rounded-2xl bg-themeTwo z-20"
      >
        <ul className="flex w-full h-full items-center justify-around text-sm font-semibold">
          <Link
            to="/me"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiUser className="text-4xl" />
            <span>Me</span>
          </Link>
          <Link
            to="/resume"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiClipboardList className="text-4xl" />
            <span>Resume</span>
          </Link>
          <Link
            to="/projects"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiCode className="text-4xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/contact"
            onClick={() => !inContent && setInContent(true)}
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
          >
            <HiChatAlt className="text-4xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </animated.nav>
      <div className="lg:hidden absolute flex h-20 justify-center items-center left-0 top-full translate-y-[150%] w-full p-4 transition duration-200 z-10">
        <Link to="/" onClick={() => inContent && setInContent(false)}>
          <HiChevronDoubleUp className="text-4xl bg-themeTwo rounded-full p-2" />
        </Link>
      </div>

      {/* desktop */}
      <animated.nav
        style={navPop}
        className="hidden lg:flex p-12 h-20 rounded-2xl bg-themeTwo transition duration-200"
      >
        <ul className="w-full flex gap-8 h-full items-center justify-between text-sm text-center font-semibold relative">
          <Link
            to="/me"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
            onClick={() => !inContent && setInContent(true)}
          >
            <HiUser className="text-5xl" />
            <span>Me</span>
          </Link>
          <Link
            to="/resume"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
            onClick={() => !inContent && setInContent(true)}
          >
            <HiClipboardList className="text-5xl" />
            <span>Resume</span>
          </Link>
          <Link
            to="/projects"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
            onClick={() => !inContent && setInContent(true)}
          >
            <HiCode className="text-5xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center gap-1 p-1 rounded-lg w-1/6"
            onClick={() => !inContent && setInContent(true)}
          >
            <HiChatAlt className="text-5xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </animated.nav>
    </>
  );
}
