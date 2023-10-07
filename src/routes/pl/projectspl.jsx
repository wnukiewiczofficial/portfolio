import ProjectCard from "../../components/projectcard";

import PortfolioImage1 from "../../assets/portfolio1.png";
import PortfolioImage2 from "../../assets/portfolio2.png";
import ctxPlaygroundImage1 from "../../assets/ctx.Playground1.png";
import ctxPlaygroundImage2 from "../../assets/ctx.Playground2.png";
import ChardoRobImage1 from "../../assets/chardorob1.png";
import ChardoRobImage2 from "../../assets/chardorob2.png";
import ChatEmImage1 from "../../assets/chatem1.png";
import ChatEmImage2 from "../../assets/chatem2.png";
import PocketyImage1 from "../../assets/pockety1.png";
import HaxballImage1 from "../../assets/haxball1.png";
import HaxballImage2 from "../../assets/haxball2.png";
import WeatherAppImage1 from "../../assets/weatherapp1.png";
import WeatherAppImage2 from "../../assets/weatherapp2.png";

export default function ProjectsPL() {
  return (
    <div className="w-full h-full text-center lg:text-left flex flex-col gap-6 overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <ProjectCard
        title="ctx.Playground"
        description="ctx.Playground to strona z oryginalnymi grami i programami. Znajdziesz tam wszystkie gry i programy, które osobiście stworzyłem. Każdy wpis jest grywalny, a niektóre są indywidualnie hostowane. Istnieją programy, które starannie wybrałem do włączenia, mimo że stworzyłem nawet więcej niż to, co jest obecnie prezentowane."
        images={[ctxPlaygroundImage1, ctxPlaygroundImage2]}
        // github="https://github.com/wnukiewiczofficial/ctx.Playground"
        href="https://wnukiewiczofficial.github.io/ctx.Playground/"
      />
      <ProjectCard
        priv
        title="Pockety"
        description="Pockety to aplikacja internetowa przeznaczona do zarządzania osobistymi listami zadań. Posiada zaawansowany backend z wieloma imponującymi funkcjami. Użytkownicy mogą tworzyć, usuwać i przeglądać listy zadań, a także sortować je według różnych kryteriów. Aplikacja oferuje również funkcję kosza do przywracania przypadkowo usuniętych elementów. Ponadto użytkownicy mogą modyfikować właściwości, takie jak kolor, termin, opis i priorytet swoich zadań. Pockety świadczy usługi zarejestrowanym użytkownikom i wykorzystuje uwierzytelnianie oparte na poczcie e-mail do ważnych działań. Co ważne, oferuje nawet wersję demonstracyjną, która nie opiera się na zapleczu ani nie przechowuje prawdziwych danych. Jednak ze względu na obawy związane z bezpieczeństwem aplikacja nie jest obecnie publikowana i pozostaje w toku."
        images={[PocketyImage1]}
      />
      <ProjectCard
        title="Portfolio website"
        description="Znajdujesz się obecnie na tej stronie. Strona Portfolio jest dla każdego, kto chce mnie lepiej poznać jako dewelopera. CV? Projekty? Kontakt? Wszystko znajdziesz tutaj."
        images={[PortfolioImage1, PortfolioImage2]}
      />
      <ProjectCard
        priv
        title="ChardoRob"
        description="ChardoRob to strona poświęcona winom domowej roboty. Osoba stojąca za tymi winami chciała zaprezentować i opisać każde z nich w Internecie. Jedną z godnych uwagi funkcji jest to, że każda butelka wina ma przypisany unikalny identyfikator QR. Gdy ktoś zeskanuje kod QR, zostanie bezpośrednio przekierowany do odpowiedniej sekcji wina na stronie internetowej ChardoRob."
        images={[ChardoRobImage1, ChardoRobImage2]}
      />
      <ProjectCard
        title="100+ web games and programs"
        description="W przeszłości stworzyłem wiele gier internetowych i programów wykorzystujących JavaScript. Pracowałem jednak również nad różnymi projektami przy użyciu różnych narzędzi i języków, w tym C++ z SDL2 i C# z Unity. Podczas gdy JavaScript był moim głównym celem, zapuściłem się w te inne technologie dla konkretnych projektów. Niektóre z najbardziej znaczących zostały zaprezentowane w ctx.Playground. Jednak ze względu na nieefektywność i złożoność zebrania ich wszystkich, wiele projektów zostało wykluczonych. Warto zauważyć, że większość z tych projektów została zrealizowana w ramach moich zleceń freelancerskich dla klientów."
      />
      <ProjectCard
        title="Haxball Game Room"
        description="Skrypt zarządzający pokojem w Haxball. Kiedyś grałem w tę grę, więc znalazłem sposób na stworzenie własnego zaawansowanego niestandardowego serwera z fajnymi funkcjami. Komendy, statystyki graczy, system afk. Skrypt musi być uruchomiony na usłudze Headless Haxball."
        images={[HaxballImage1, HaxballImage2]}
        // github="https://github.com/wnukiewiczofficial/haxballserver"
      />
      <ProjectCard
        title="Weather App"
        description="Ta aplikacja pogodowa zapewnia aktualizacje w czasie rzeczywistym dla bieżących warunków pogodowych w określonej lokalizacji. Chociaż projekt jest obecnie w stanie surowym, głównym celem jest zapewnienie dokładnych i aktualnych prognoz pogody."
        images={[WeatherAppImage1, WeatherAppImage2]}
        // github="https://github.com/wnukiewiczofficial/weatherapp"
      />
      {/* <ProjectCard
        finished={false}
        title="ChatEm"
        description="ChatEm to aplikacja internetowa przeznaczona do czatowania w czasie rzeczywistym z innymi użytkownikami. Charakteryzuje się prostym i podstawowym wyglądem, a aplikacja wykorzystuje websockets do komunikacji. Rozwój aplikacji jest obecnie w toku i nie jest jeszcze w pełni ukończony. Funkcja czatu jest jednak w pełni funkcjonalna i działa."
        images={[ChatEmImage1, ChatEmImage2]}
      /> */}
    </div>
  );
}
