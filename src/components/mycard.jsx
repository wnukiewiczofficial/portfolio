import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { TbBrandFiverr } from "react-icons/tb";
import imgMe from "../assets/me.jpg";
import { Link, useLocation } from "react-router-dom";
import CVpl from "../assets/cv/CVpl.pdf";
import CVen from "../assets/cv/CVen.pdf";

export default function MyCard({ english }) {
  const location = useLocation();
  return (
    <div className="h-auto lg:h-full w-5/6 lg:w-full flex flex-col gap-4 bg-themeTwo shadow-lg shadow-themeTwo px-4 py-8 rounded-3xl text-center place-items-center justify-center overflow-y-scroll scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-wider text-themeOne">
          Dawid Wnukiewicz
        </h1>
        <h2 className="text-xl lg:text-2xl">Web developer</h2>
      </div>
      {/* ICONS */}
      <div className="flex gap-4 text-2xl lg:text-3xl justify-center bg-additionalOne rounded-lg p-2">
        <a
          href="https://github.com/wnukiewiczofficial"
          target="blank"
          className="hover:-translate-y-1 transition active:scale-75"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dawid-wnukiewicz-229627277"
          target="blank"
          className="hover:-translate-y-1 transition active:scale-75"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.fiverr.com/dwnk_officially"
          target="blank"
          className="hover:-translate-y-1 transition active:scale-75"
        >
          <TbBrandFiverr />
        </a>
      </div>
      <div className="flex flex-col items-start w-full gap-4 bg-themeTwo rounded-lg p-2">
        <div className="w-full bg-additionalOne p-2 gap-1 md:gap-0 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <HiMail className="md:text-xl lg:text-2xl" />
            <span>E-mail</span>
          </div>
          <span className="font-semibold text-xs md:text-sm">
            wnukiewiczofficial@yahoo.com
          </span>
        </div>
        <div className="w-full bg-additionalOne p-2 gap-1 md:gap-0 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <HiLocationMarker className="md:text-xl lg:text-2xl" />
            <span>{english ? "Location" : "Lokalizacja"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-xs md:text-sm">
              Poland, Poznań
            </span>
            <span>🇵🇱</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 text-lg lg:text-xl w-full p-2 justify-center">
        <a
          href={english ? CVen : CVpl}
          download={
            english ? "CV Dawid Wnukiewicz ENG" : "CV Dawid Wnukiewicz PL"
          }
          className="bg-themeOne px-4 lg:p-2 w-auto rounded-xl hover:opacity-80 active:opacity-60 active:scale-90 transition"
        >
          Curriculum Vitae
        </a>
      </div>
      <Link
        to={
          english ? location.pathname.substring(3) : `/en${location.pathname}`
        }
        className="bg-accent px-4 py-1 rounded-2xl shadow-inner shadow-themeTwo text-themeTwo text-sm hover:opacity-80 active:opacity-40 transition"
      >
        {english ? "Switch to polish" : "Zmień na angielski"}
      </Link>
    </div>
  );
}
