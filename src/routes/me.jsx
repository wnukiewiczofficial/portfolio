import Card from "../components/card";
import { MdDesignServices } from "react-icons/md";

export default function Me() {
  return (
    <div className="w-full h-full text-center lg:text-left">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">About me</h1>
      <p className=" p-2 lg:p-4 text-sm lg:text-base">
        Currently, I am a student at Poznań University of Technology, pursuing a
        degree in Computer Science. I am in my second semester and have a keen
        interest in coding and developing new websites, applications, and games.
        In my spare time, I love to immerse myself in programming and have
        several projects posted on my Github profile. Additionally, I work as a
        freelance developer and have garnered valuable experience in the
        commercial creation of web-based games. My ultimate goal is to
        specialize in full-stack web development and create seamless and dynamic
        web applications.
      </p>
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        What I do
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 lg:p-4">
        <Card icon={<MdDesignServices />} title="UX-UI" />
        <Card icon={<MdDesignServices />} title="UX-UI" />
        <Card icon={<MdDesignServices />} title="UX-UI" />
        <Card icon={<MdDesignServices />} title="UX-UI" />
      </div>
    </div>
  );
}
