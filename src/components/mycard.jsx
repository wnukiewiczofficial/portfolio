import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { TbBrandFiverr } from "react-icons/tb";
import imgMe from "../assets/me.jpg";
import { Link, useLocation } from "react-router-dom";

export default function MyCard({ polish }) {
  const location = useLocation();
  return (
    <div className="h-auto w-5/6 md:w-3/4 flex flex-col gap-4 bg-themeTwo p-4 rounded-3xl text-center place-items-center overflow-y-scroll">
      <img
        src={imgMe}
        alt="Picture of me"
        className="w-4/6 max-w-xl rounded-full border-8 border-themeOne"
      />
      <Link
        to={polish ? location.pathname.substring(3) : `/pl${location.pathname}`}
        className="bg-themeOne p-2 rounded-2xl font-semibold hover:opacity-80 active:opacity-60 active:scale-90 transition"
      >
        {polish ? "Zmień na angielski 🇬🇧" : "Change to polish 🇵🇱"}
      </Link>
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Dawid Wnukiewicz</h1>
        <h2 className="lg:text-xl">Web developer</h2>
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
        <div className="w-full bg-additionalOne p-4 rounded-lg flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <HiMail className="md:text-xl lg:text-2xl" />
            <span>E-mail</span>
          </div>
          <span className="font-semibold text-xs md:text-sm">
            wnukiewiczofficial@yahoo.com
          </span>
        </div>
        <div className="w-full bg-additionalOne p-4 rounded-lg flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <HiLocationMarker className="md:text-xl lg:text-2xl" />
            <span>{polish ? "Lokalizacja" : "Location"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-xs md:text-sm">
              Poland, Poznań
            </span>
            <span>🇵🇱</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 lg:text-lg">
        <button className="bg-themeOne p-3 w-full rounded-xl hover:opacity-80 active:opacity-60 active:scale-90 transition">
          {polish ? "Pobierz CV 🇵🇱" : "Download CV 🇵🇱"}
        </button>
        <button className="bg-themeOne p-3 w-full rounded-xl hover:opacity-80 active:opacity-60 active:scale-90 transition">
          {polish ? "Pobierz CV 🇬🇧" : "Download CV 🇬🇧"}
        </button>
      </div>
    </div>
  );
}
