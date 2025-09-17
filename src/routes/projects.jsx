import ProjectCard from "../components/projectcard";

import PortfolioImage1 from "../assets/portfolio1.png";
import PortfolioImage2 from "../assets/portfolio2.png";
import ctxPlaygroundImage1 from "../assets/ctx.Playground1.png";
import ctxPlaygroundImage2 from "../assets/ctx.Playground2.png";
import ChardoRobImage1 from "../assets/chardorob1.png";
import ChardoRobImage2 from "../assets/chardorob2.png";
import ChatEmImage1 from "../assets/chatem1.png";
import ChatEmImage2 from "../assets/chatem2.png";
import PocketyImage1 from "../assets/pockety1.png";
import HaxballImage1 from "../assets/haxball1.png";
import HaxballImage2 from "../assets/haxball2.png";
import WeatherAppImage1 from "../assets/weatherapp1.png";
import WeatherAppImage2 from "../assets/weatherapp2.png";

export default function Projects() {
	return (
		<div className="w-full h-full text-center lg:text-left flex flex-col gap-6 overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
			<ProjectCard projectid="freelancer" />
			<ProjectCard
				projectid="ctxplayground"
				images={[ctxPlaygroundImage1, ctxPlaygroundImage2]}
				// github="https://github.com/wnukiewiczofficial/ctx.Playground"
				href="https://wnukiewiczofficial.github.io/ctx.Playground/"
			/>
			<ProjectCard priv projectid="pockety" images={[PocketyImage1]} />
			<ProjectCard finished={false} projectid="chatem" images={[ChatEmImage1, ChatEmImage2]} href="https://chatem.adaptable.app/" />
			<ProjectCard
				projectid="weatherapp"
				images={[WeatherAppImage1, WeatherAppImage2]}
				// github="https://github.com/wnukiewiczofficial/weatherapp"
				href="https://wnukiewiczofficial.github.io/weatherapp/"
			/>
			<ProjectCard projectid="portfolio" images={[PortfolioImage1, PortfolioImage2]} />
			<ProjectCard projectid="chardorob" images={[ChardoRobImage1, ChardoRobImage2]} href="https://chardorob-host.vercel.app/" />
			<ProjectCard
				projectid="haxball"
				images={[HaxballImage1, HaxballImage2]}
				// github="https://github.com/wnukiewiczofficial/haxballserver"
			/>
		</div>
	);
}
