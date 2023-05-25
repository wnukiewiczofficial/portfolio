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
  const [selected, setSelected] = useState(0);
  const navRef = useRef();
  const navMove = useSpring({
    x: "-50%",
    y: selected > 0 ? "150%" : "-25%",
  });
  const navPop = useSpring({
    from: { scale: 0 },
    scale: 1,
    ref: navPopRef,
  });

  useEffect(() => {
    if (selected > 0) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

  return (
    <>
      {/* mobile */}
      <animated.nav
        ref={navRef}
        style={{ ...navPop, ...navMove }}
        className="lg:hidden absolute h-20 bottom-0 left-1/2 w-5/6 rounded-2xl bg-themeTwo z-20"
      >
        <ul className="flex w-full h-full items-center justify-around gap-2 p-2 text-sm font-semibold">
          <Link
            to="/me"
            onClick={() => selected !== 1 && setSelected(1)}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl w-1/4 transition ${
              selected === 1 && "text-themeOne bg-additionalOne"
            }`}
          >
            <HiUser className="text-4xl" />
            <span>Me</span>
          </Link>
          <Link
            to="/resume"
            onClick={() => selected !== 2 && setSelected(2)}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl w-1/4 transition ${
              selected === 2 && "text-themeOne bg-additionalOne"
            }`}
          >
            <HiClipboardList className="text-4xl" />
            <span>Resume</span>
          </Link>
          <Link
            to="/projects"
            onClick={() => selected !== 3 && setSelected(3)}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl w-1/4 transition ${
              selected === 3 && "text-themeOne bg-additionalOne"
            }`}
          >
            <HiCode className="text-4xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/contact"
            onClick={() => selected !== 4 && setSelected(4)}
            className={`flex flex-col items-center gap-1 p-1 rounded-xl w-1/4 transition ${
              selected === 4 && "text-themeOne bg-additionalOne"
            }`}
          >
            <HiChatAlt className="text-4xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </animated.nav>
      <div className="lg:hidden absolute flex h-20 justify-center items-center left-0 top-full translate-y-[150%] w-full p-4 transition duration-200 z-10">
        <Link to="/" onClick={() => selected > 0 && setSelected(0)}>
          <HiChevronDoubleUp className="text-4xl bg-themeTwo rounded-full p-2" />
        </Link>
      </div>

      {/* desktop */}
      <animated.nav
        style={navPop}
        className="hidden lg:flex py-4 px-8 h-auto rounded-2xl bg-themeTwo transition duration-200"
      >
        <ul className="w-full flex gap-4 h-auto items-center justify-around text-sm text-center font-semibold relative">
          <Link
            to="/me"
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg hover:bg-additionalOne hover:text-themeOne hover:-translate-y-1 transition ${
              selected === 1 && "text-themeOne bg-additionalOne"
            }`}
            onClick={() => selected !== 1 && setSelected(1)}
          >
            <HiUser className="text-5xl" />
            <span>Me</span>
          </Link>
          <Link
            to="/resume"
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg hover:bg-additionalOne hover:text-themeOne hover:-translate-y-1 transition ${
              selected === 2 && "text-themeOne bg-additionalOne"
            }`}
            onClick={() => selected !== 2 && setSelected(2)}
          >
            <HiClipboardList className="text-5xl" />
            <span>Resume</span>
          </Link>
          <Link
            to="/projects"
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg hover:bg-additionalOne hover:text-themeOne hover:-translate-y-1 transition ${
              selected === 3 && "text-themeOne bg-additionalOne"
            }`}
            onClick={() => selected !== 3 && setSelected(3)}
          >
            <HiCode className="text-5xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/contact"
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg hover:bg-additionalOne hover:text-themeOne hover:-translate-y-1 transition ${
              selected === 4 && "text-themeOne bg-additionalOne"
            }`}
            onClick={() => selected !== 4 && setSelected(4)}
          >
            <HiChatAlt className="text-5xl" />
            <span>Contact</span>
          </Link>
        </ul>
      </animated.nav>
    </>
  );
}
