import ProjectCard from "../components/projectcard";

import PortfolioImage from "../assets/portfolio.png";
import ctxPlaygroundImage1 from "../assets/ctx.Playground1.png";
import ctxPlaygroundImage2 from "../assets/ctx.Playground2.png";
import ChardoRobImage1 from "../assets/chardorob1.png";
import ChardoRobImage2 from "../assets/chardorob2.png";
import ChatEmImage1 from "../assets/chatem1.png";
import ChatEmImage2 from "../assets/chatem2.png";
import PocketyImage1 from "../assets/pockety1.png";

export default function Projects() {
  return (
    <div className="w-full h-full text-center lg:text-left flex flex-col overflow-y-auto">
      <ProjectCard
        title="ctx.Playground"
        description="ctx.Playground is a website with original games and programs. You will find there all the games and programs I have personally created. Every entry is playable, with some being individually hosted. There are programs I have carefully selected for inclusion, despite having created even more than what is currently featured."
        images={[ctxPlaygroundImage1, ctxPlaygroundImage2]}
      />
      <ProjectCard
        priv
        title="Pockety"
        description="Pockety is a web app designed for managing personal task lists. It boasts an advanced backend with numerous impressive features. Users can create, delete, and preview todos, as well as sort them by various criteria. The app also offers a trash feature for restoring accidentally removed items. Additionally, users can modify properties such as color, deadline, description, and priority of their todos. Pockety provides services to registered users and utilizes email-based authentication for important actions. Notably, it even offers a demo version that does not rely on a backend or store real data. However, due to security concerns, the app is currently unpublished and remains a work in progress."
        images={[PocketyImage1]}
      />
      <ProjectCard
        title="Portfolio website"
        description="You are currently on this website. The Portfolio website is for anyone who wants to know me better as a developer. CV? Projects? Contact? Everything will be found here."
        images={[PortfolioImage]}
      />
      <ProjectCard
        priv
        title="ChardoRob"
        description="ChardoRob is a website dedicated to homemade wines. The individual behind these wines wanted to showcase and describe each of them on the internet. One noteworthy feature is that every wine bottle is assigned a unique QR ID. When someone scans the QR code, it directly navigates them to the corresponding wine section on the ChardoRob website."
        images={[ChardoRobImage1, ChardoRobImage2]}
      />
      <ProjectCard
        title="70+ web games and programs"
        description="In the past, I have developed numerous web games and programs using JavaScript. However, I have also worked on various projects using different tools and languages, including C++ with SDL2 and C# with Unity. While JavaScript has been my primary focus, I have ventured into these other technologies for specific projects. Some of the most significant ones have been showcased in the ctx.Playground. However, due to the inefficiency and complexity of collecting them all, many projects have been excluded. It is worth noting that a majority of these projects were completed as part of my freelancing orders for clients."
      />
      <ProjectCard
        finished={false}
        title="ChatEm"
        description="ChatEm is a web app designed for real-time chatting with other users. It features a simple and basic design, and the app utilizes websockets for communication. The development of the app is currently a work in progress, and it is not yet fully completed. However, the chat functionality is fully functional and operational."
        images={[ChatEmImage1, ChatEmImage2]}
      />
    </div>
  );
}
