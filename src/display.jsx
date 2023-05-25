import { useRef } from "react";
import MyCard from "./components/mycard";
import NavBar from "./components/navbar";
import Me from "./routes/me";
import Resume from "./routes/resume";
import Projects from "./routes/projects";
import Contact from "./routes/contact";

import { Routes, Route } from "react-router";
import ParticleBg from "./components/particles";
import { useSpring, useSpringRef, animated, useChain } from "react-spring";

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

  useChain([cardPopRef, navPopRef, contentPopRef], [0, 0.6, 0.9]);

  return (
    <main className="w-screen h-screen lg:flex lg:justify-center lg:items-center text-white font-bai overflow-hidden relative">
      <div
        ref={cardRef}
        className="absolute w-full h-[200%] lg:h-full top-0 left-0 -z-50 bg-gradient-to-t lg:bg-gradient-to-r from-indigo-500 via-themeOne to-indigo-500"
      >
        <ParticleBg />
      </div>
      <animated.header
        style={cardPop}
        className="lg:row-span-2 flex flex-col h-screen lg:h-full pb-32 lg:pb-0 gap-6 justify-center items-center"
      >
        <MyCard />
      </animated.header>
      <div
        ref={contentRef}
        className="lg:w-4/6 h-screen p-6 pt-52 lg:pt-0 lg:flex lg:flex-col lg:gap-4 lg:items-end lg:justify-center"
      >
        <NavBar
          cardRef={cardRef}
          contentRef={contentRef}
          navPopRef={navPopRef}
        />
        <animated.section
          style={contentPop}
          className="w-full h-full bg-themeTwo rounded-3xl p-6 lg:pt-6 lg:h-4/6 overflow-hidden"
        >
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
                    My name is <span className="text-themeOne">Dawid</span>!
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">
                    Welcome to my portfolio
                  </h2>
                </div>
              }
            />
            <Route path="/me" element={<Me />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
                    My name is <span className="text-themeOne">Dawid</span>!
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">
                    Welcome to my portfolio
                  </h2>
                </div>
              }
            />
          </Routes>
        </animated.section>
      </div>
    </main>
  );
}
