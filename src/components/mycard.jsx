import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import imgMe from "../assets/me.jpg";

export default function MyCard() {
  return (
    <div className="h-auto w-full md:w-3/4 flex flex-col gap-4 bg-themeTwo p-4 rounded-3xl text-center place-items-center overflow-y-scroll">
      <img
        src={imgMe}
        alt="Picture of me"
        className="w-4/6 max-w-xl rounded-full border-8 border-themeOne"
      />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Dawid Wnukiewicz</h1>
        <h2 className="lg:text-xl">Web developer</h2>
      </div>
      {/* ICONS */}
      <div className="flex gap-4 text-2xl lg:text-3xl justify-center bg-additionalOne rounded-lg p-2">
        <a href="https://github.com/wnukiewiczofficial" target="blank">
          <BsGithub />
        </a>
        <BsLinkedin />
      </div>
      <div className="flex flex-col items-start w-full gap-4 bg-themeTwo rounded-lg p-2">
        <div className="w-full bg-additionalOne p-4 rounded-lg flex justify-between items-center">
          <div className="flex gap-2">
            <HiMail className="text-2xl" />
            <span>E-mail</span>
          </div>
          <span className="font-semibold text-xs md:text-sm">
            wnukiewiczofficial@yahoo.com
          </span>
        </div>
        <div className="w-full bg-additionalOne p-4 rounded-lg flex justify-between items-center">
          <div className="flex gap-2">
            <HiLocationMarker className="text-2xl" />
            <span>Location</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-xs md:text-sm">
              Poland, Poznań
            </span>
            <span>🇵🇱</span>
          </div>
        </div>
      </div>
      <button className="bg-themeOne p-3 rounded-xl text-sm md:text-base">
        Download CV
      </button>
    </div>
  );
}
