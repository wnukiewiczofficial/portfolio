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
        Zajmuję się tworzeniem stron internetowych, aplikacji oraz gier
        webowych. Nie obce są mi bazy danych oraz inne podobne backendowe
        tematy. Mam aktywny profil na GitHubie, gdzie udostępniam kilka moich
        projektów. Posiadam komercyjne doświadczenie w pracy z klientami z
        całego świata. Pracowałem jako freelancer i tworzyłem aplikacje i gry
        webowe. Aktualnie, studiuję informatykę na Politechnice Poznańskiej,
        gdzie się doszkalam i próbuję nowych rzeczy.
      </p>

      <h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
        Zakres czynności
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
