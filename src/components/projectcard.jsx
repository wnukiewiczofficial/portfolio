import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import { useTranslation } from "react-i18next";

export default function ProjectCard({ projectid, tags, github, href, priv, finished = true, images = [] }) {
	const { t } = useTranslation();

	return (
		<div className={`${!finished && "opacity-50"} flex flex-col gap-4`}>
			<div className="flex gap-2 items-end">
				<h1 className="text-2xl lg:text-5xl font-bold text-themeOne">
					{t(`projects.${projectid}.title`)} {priv && <span className="text-base text-white">(private)</span>}
					{!finished && <span className="text-base text-white">(not finished)</span>}
				</h1>
				{github && (
					<a href={github} className="text-2xl md:text-3xl lg:text-4xl self-center" target="blank">
						<BsGithub />
					</a>
				)}
				{href && (
					<a href={href} className="text-2xl md:text-3xl lg:text-4xl self-center" target="blank">
						<BiLinkExternal />
					</a>
				)}
			</div>
			<div className="flex flex-col lg:flex-row gap-2">
				{images.map((img, i) => {
					return <img key={i} src={img} alt={"Image " + i} className="rounded-lg lg:w-1/2" />;
				})}
			</div>
			<p className="p-4 text-sm md:text-base lg:text-xl bg-additionalOne rounded-lg">{t(`projects.${projectid}.description`)}</p>
		</div>
	);
}
