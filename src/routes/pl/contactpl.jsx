import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import ContactTab from "../../components/contacttab";

export default function ContactPL() {
  return (
    <div className="w-full h-full flex flex-col gap-4 text-center lg:text-left overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">Kontakt</h1>

      <div className="flex flex-col h-full lg:grid lg:grid-cols-2 gap-4">
        <ContactTab
          icon={<BsGithub />}
          label="Github"
          value="@ wnukiewiczofficial"
          href="https://github.com/wnukiewiczofficial"
        />
        <ContactTab
          icon={<SiFiverr />}
          label="Fiverr"
          value="@ dwnk_officially"
          href="https://www.fiverr.com/dwnk_officially"
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
      </div>
    </div>
  );
}
