import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import ContactTab from "../components/contacttab";

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col gap-4 text-center lg:text-left overflow-y-scroll">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">Contact</h1>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 content-center">
        <ContactTab
          icon={<BsGithub />}
          label="Github"
          value="@ wnukiewiczofficial"
          href="https://github.com/wnukiewiczofficial"
        />
        <ContactTab
          icon={<BsLinkedin />}
          label="Linkedin"
          value="@ dawid-wnukiewicz"
          href="https://www.linkedin.com/in/dawid-wnukiewicz-229627277/"
        />
        <ContactTab
          icon={<HiMail />}
          label="E-mail"
          value="wnukiewiczofficial@yahoo.com"
        />
        <ContactTab
          icon={<HiLocationMarker />}
          label="Location"
          value="Poland, Poznań 🇵🇱"
        />
      </div>
    </div>
  );
}
