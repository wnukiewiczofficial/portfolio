import { useRef } from "react";
import MyCard from "./components/mycard";
import NavBar from "./components/navbar";
import Me from "./routes/me";
import { Routes, Route } from "react-router";
import ParticleBg from "./components/particles";

export default function Display() {
  const cardRef = useRef();
  const contentRef = useRef();

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
        <section
          ref={contentRef}
          className="w-full h-full bg-themeTwo rounded-3xl p-6 lg:pt-6  lg:h-4/6"
        >
          <Routes>
            <Route path="/" element={null} />
            <Route path="/me" element={<Me />} />
            <Route path="*" element={null} />
          </Routes>
        </section>
      </div>
    </main>
  );
}
