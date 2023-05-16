import { useRef } from "react";
import MyCard from "./components/mycard";
import NavBar from "./components/navbar";
import Me from "./routes/me";
import Resume from "./routes/resume";
import Projects from "./routes/projects";
import Contact from "./routes/contact";

import { Routes, Route } from "react-router";
import ParticleBg from "./components/particles";
import { useSpring, animated, useTransition } from "react-spring";
import { useLocation } from "react-router";

export default function Display() {
  const cardRef = useRef();
  const contentRef = useRef();
  const popProps = useSpring({ scale: 1, from: { scale: 0 }, delay: 1000 });
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)", display: "none" },
    config: { duration: 500 },
  });

  return (
    <main
      className={
        "w-screen h-screen lg:flex lg:justify-center lg:p-8 text-white overflow-hidden relative"
      }
    >
      <div className="absolute w-full h-full top-0 left-0 -z-50">
        <ParticleBg />
      </div>
      <header
        ref={cardRef}
        className="lg:row-span-2 flex flex-col h-full p-6 gap-6 justify-center items-center"
      >
        <MyCard />
      </header>
      <div className="lg:w-1/2 h-screen lg:h-full p-6 pt-52 lg:pt-0 lg:flex lg:flex-col lg:gap-12 items-center justify-center">
        <NavBar cardRef={cardRef} contentRef={contentRef} />
        <animated.section
          ref={contentRef}
          style={popProps}
          className="w-full h-full bg-themeTwo rounded-3xl p-6 lg:pt-6  lg:h-4/6"
        >
          {transitions((styles, item) => (
            <animated.div style={styles}>
              <Routes location={item}>
                <Route path="/" element={null} />
                <Route path="/me" element={<Me />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={null} />
              </Routes>
            </animated.div>
          ))}
        </animated.section>
      </div>
    </main>
  );
}
