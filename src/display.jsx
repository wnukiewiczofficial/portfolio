import { useRef } from "react";
import MyCard from "./components/mycard";
import NavBar from "./components/navbar";
import Me from "./routes/me";
import Resume from "./routes/resume";
import Projects from "./routes/projects";
import Contact from "./routes/contact";

import { Routes, Route } from "react-router";
import ParticleBg from "./components/particles";
import {
  useSpring,
  useSpringRef,
  animated,
  useTransition,
  useChain,
} from "react-spring";
import { useLocation } from "react-router";

export default function Display() {
  const cardRef = useRef();
  const contentRef = useRef();

  const cardPopRef = useSpringRef();
  const navPopRef = useSpringRef();
  const contentPopRef = useSpringRef();
  const cardPop = useSpring({ scale: 1, from: { scale: 0 }, ref: cardPopRef });
  const contentPop = useSpring({
    scale: 1,
    from: { scale: 0 },
    ref: contentPopRef,
  });

  // const location = useLocation();
  // const transitions = useTransition(location, {
  //   from: { x: "-200%" },
  //   enter: { x: "0%" },
  //   leave: { x: "200%" },
  // });

  useChain([cardPopRef, navPopRef, contentPopRef], [0, 0.6, 0.9]);

  return (
    <main
      className={
        "w-screen h-screen lg:flex lg:justify-center lg:p-8 text-white font-bai overflow-hidden relative"
      }
    >
      <div className="absolute w-full h-full top-0 left-0 -z-50">
        <ParticleBg />
      </div>
      <animated.header
        ref={cardRef}
        style={cardPop}
        className="lg:row-span-2 flex flex-col h-screen lg:h-5/6 p-6 pb-32 lg:pb-6 gap-6 justify-end items-center"
      >
        <MyCard />
      </animated.header>
      <div className="lg:w-4/6 h-screen lg:h-5/6 p-6 pt-52 lg:pt-0 lg:flex lg:flex-col lg:gap-4 lg:items-end lg:justify-end">
        <NavBar
          cardRef={cardRef}
          contentRef={contentRef}
          navPopRef={navPopRef}
        />
        <animated.section
          ref={contentRef}
          style={contentPop}
          className="w-full h-full bg-themeTwo rounded-3xl p-6 lg:pt-6 lg:h-4/6 overflow-hidden"
        >
          <Routes>
            <Route path="/" element={null} />
            <Route path="/me" element={<Me />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={null} />
          </Routes>
          {/* {transitions((styles, item) => (
            <animated.div style={styles} className="w-full h-full">
              
            </animated.div>
          ))} */}
        </animated.section>
      </div>
    </main>
  );
}
