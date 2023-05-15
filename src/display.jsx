import { useEffect, useRef, useState } from "react";
import MyCard from "./components/mycard";
import NavBar from "./components/navbar";
import Me from "./routes/me";
import { Routes, Route } from "react-router";

export default function Display() {
  const cardRef = useRef();
  const contentRef = useRef();

  return (
    <main
      className={
        "w-screen h-screen bg-blue-400 text-white overflow-hidden relative"
      }
    >
      <header
        ref={cardRef}
        className="flex flex-col h-full p-6 bg-red-500 gap-6 justify-center items-center"
      >
        <MyCard />
      </header>
      <NavBar cardRef={cardRef} contentRef={contentRef} />
      <section ref={contentRef} className="bg-gray-700 rounded-lg p-6 h-screen">
        <Routes>
          <Route path="/" element={null} />
          <Route path="/me" element={<Me />} />
          <Route path="*" element={null} />
        </Routes>
      </section>
    </main>
  );
}
