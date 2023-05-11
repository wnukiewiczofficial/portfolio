import { BsGithub, BsLinkedin } from "react-icons/bs";
import imgMe from "./assets/me.jpg";

export default function MyCard() {
  return (
    <header className="w-96 flex flex-col gap-2 bg-gray-700 p-4 rounded-lg text-center place-items-center">
      <img src={imgMe} alt="Picture of me" className="rounded-xl -mt-12" />
      <div>
        <h1>Dawid Wnukiewicz</h1>
        <h2>Web developer</h2>
      </div>
      {/* ICONS */}
      <div className="flex gap-4 text-3xl justify-center bg-gray-600 rounded-lg p-2">
        <BsGithub />
        <BsLinkedin />
      </div>
      <div className="flex flex-col items-start w-full gap-4 bg-gray-600 rounded-lg p-2">
        <span>E-mail</span>
        <span>Location</span>
      </div>
    </header>
  );
}
