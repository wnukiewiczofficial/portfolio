import MeCard from "../../components/mecard";
import {
  MdDesignServices,
  MdDesktopMac,
  MdStorage,
  MdBugReport,
} from "react-icons/md";

export default function MePL() {
  return (
    <div className="w-full h-full text-center lg:text-left overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">O mnie</h1>
      <p className="m-2 lg:m-4 p-2 lg:p-4 text-sm md:text-base lg:text-xl bg-additionalOne rounded-lg">
        Jestem obecnie studentem drugiego semestru na Politechnice Poznańskiej,
        gdzie studiuję informatykę. Pasjonuje mnie programowanie oraz rozwijanie
        nowych stron internetowych, aplikacji i gier. Moje zainteresowanie tym
        obszarem skłania mnie do spędzania wolnego czasu na pogłębianiu wiedzy i
        doskonaleniu umiejętności programistycznych. Mam również aktywny profil
        na GitHubie, gdzie udostępniam kilka moich projektów. Dodatkowo, pracuję
        jako programista freelancer, co pozwoliło mi zdobyć cenne doświadczenie
        w komercyjnym tworzeniu gier internetowych. Moim głównym celem jest
        specjalizacja w pełnym zakresie tworzenia aplikacji webowych oraz
        tworzenie płynnych i dynamicznych witryn internetowych.
      </p>

      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        Czym się zajmuję
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
