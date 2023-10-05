import MeCard from "../components/mecard";
import {
  MdDesignServices,
  MdDesktopMac,
  MdStorage,
  MdBugReport,
} from "react-icons/md";

export default function Me() {
  return (
    <div className="w-full h-full text-center lg:text-left overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">About me</h1>
      <p className="m-2 lg:m-4 p-2 lg:p-4 text-sm md:text-base lg:text-xl bg-additionalOne rounded-lg">
        I am involved in creating websites, applications, and web games. I am
        also familiar with databases and other backend-related topics. I have an
        active profile on GitHub, where I share several of my projects. I have
        commercial experience working with clients from all over the world. I
        have worked as a freelancer, creating web applications and games.
        Currently, I am studying computer science at Poznań University of
        Technology, where I continue to learn and try out new things.
      </p>

      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        What I do
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 lg:p-4">
        <MeCard icon={<MdDesignServices />} title="UX-UI" />
        <MeCard icon={<MdDesktopMac />} title="Front-end" />
        <MeCard icon={<MdStorage />} title="Back-end" />
        <MeCard icon={<MdBugReport />} title="Testing" />
      </div>
    </div>
  );
}
