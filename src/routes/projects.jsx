import ProjectCard from "../components/projectcard";

import PortfolioImage1 from "../assets/portfolio1.png";
import PortfolioImage2 from "../assets/portfolio2.png";
import ctxPlaygroundImage1 from "../assets/ctx.Playground1.png";
import ctxPlaygroundImage2 from "../assets/ctx.Playground2.png";
import ChardoRobImage1 from "../assets/chardorob1.png";
import ChardoRobImage2 from "../assets/chardorob2.png";
import ChatEmImage1 from "../assets/chatem1.png";
import ChatEmImage2 from "../assets/chatem2.png";
// import PocketyImage1 from "../assets/pockety1.png";
import HaxballImage1 from "../assets/haxball1.png";
import HaxballImage2 from "../assets/haxball2.png";
import WeatherAppImage1 from "../assets/weatherapp1.png";
import WeatherAppImage2 from "../assets/weatherapp2.png";

export default function Projects() {
  return (
    <div className="w-full h-full text-center lg:text-left flex flex-col gap-6 overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
      <ProjectCard
        title="100+ web games and programs"
        description="In the past, I have created many online games and programs using JavaScript. In addition to web games and applications, I have worked on projects in C++ using SDL2, as well as C# based on the Unity engine. Throughout my life, I have already programmed many games and programs, both commercial and personal. Some of the most significant projects have been showcased on ctx.Playground. However, due to the sheer volume of games and the complexity of gathering them all, many games and programs have been excluded."
      />
      <ProjectCard
        title="ctx.Playground"
        description="ctx.Playground is a website featuring original games and programs. It showcases projects that I personally created. Each game is playable, and many of them are separately hosted. However, this website does not include literally all of my creations."
        images={[ctxPlaygroundImage1, ctxPlaygroundImage2]}
        // github="https://github.com/wnukiewiczofficial/ctx.Playground"
        href="https://wnukiewiczofficial.github.io/ctx.Playground/"
      />
      {/* <ProjectCard
        priv
        title="Pockety"
        description="Pockety is a web app designed for managing personal task lists. It boasts an advanced backend with numerous impressive features. Users can create, delete, and preview todos, as well as sort them by various criteria. The app also offers a trash feature for restoring accidentally removed items. Additionally, users can modify properties such as color, deadline, description, and priority of their todos. Pockety provides services to registered users and utilizes email-based authentication for important actions. Notably, it even offers a demo version that does not rely on a backend or store real data. However, due to security concerns, the app is currently unpublished and remains a work in progress."
        images={[PocketyImage1]}
      /> */}
      <ProjectCard
        finished={false}
        title="ChatEm"
        description="ChatEm is a web application designed for real-time chatting with other users. It features a simple and basic interface. The application is built on websockets. It has safeguards in place to prevent overload and unnecessary message retention. This chat is strictly meant for communication between users who are connected."
        images={[ChatEmImage1, ChatEmImage2]}
        href="https://chatem.adaptable.app/"
      />
      <ProjectCard
        title="Weather App"
        description="Web application allowing to check weather conditions. All data is retrieved using an external API. The application assists the user by displaying a list of all countries. The list can be filtered by searching for a specific location."
        images={[WeatherAppImage1, WeatherAppImage2]}
        // github="https://github.com/wnukiewiczofficial/weatherapp"
        href="https://wnukiewiczofficial.github.io/weatherapp/"
      />
      <ProjectCard
        title="Portfolio website"
        description="You are currently on this website. The Portfolio website is for anyone who wants to know me better as a developer. CV? Projects? Contact? Everything will be found here."
        images={[PortfolioImage1, PortfolioImage2]}
      />
      <ProjectCard
        title="ChardoRob"
        description="ChardoRob is a website dedicated to homemade wines. The individual behind these wines wanted to showcase and describe each of them on the internet. One noteworthy feature is that every wine bottle is assigned a unique QR ID. When someone scans the QR code, it directly navigates them to the corresponding wine section on the ChardoRob website."
        images={[ChardoRobImage1, ChardoRobImage2]}
        href="https://chardorob-host.vercel.app/"
      />

      <ProjectCard
        title="Haxball Game Room"
        description="A script that manages a haxball's game room. I once played this game so I found a way to create my own advanced custom server with cool features. Commands, player statistics, afk system. The script needs to be run on the Headless Haxball service."
        images={[HaxballImage1, HaxballImage2]}
        // github="https://github.com/wnukiewiczofficial/haxballserver"
      />
    </div>
  );
}
