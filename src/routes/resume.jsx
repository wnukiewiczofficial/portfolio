import { useTranslation } from "react-i18next";

export default function Resume() {
	const { t } = useTranslation();

	const jobHistory = t("job_history", { returnObjects: true });

	return (
		<div className="w-full h-full text-center lg:text-left overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
			<h1 className="text-2xl lg:text-5xl font-bold text-themeOne">{t("LBL_EXPERIENCE")}</h1>

			<div className="m-2 lg:m-4 p-2 lg:p-4 flex flex-col gap-2 bg-additionalOne rounded-lg">
				{jobHistory.map((job, i) => {
					return (
						<div key={i}>
							<h2 className="text-themeOne font-semibold text-2xl">
								{job.position}
								<span className="text-lg text-white"> {`(${job.duration})`}</span>
							</h2>
							<p className="text-sm md:text-base lg:text-xl">{job.description}</p>{" "}
						</div>
					);
				})}
			</div>

			{/* O edukacji to trzeba jakośdosłownie tylko wspomnieć. Nie ma sensu wypisywać dokładnie co i jak, to jest w CV */}
			<h1 className="text-2xl lg:text-5xl font-bold text-themeOne">Education</h1>

			<div className="m-2 lg:m-4 p-2 lg:p-4 flex flex-col gap-2 bg-additionalOne rounded-lg">
				<h2 className="text-themeOne font-semibold text-2xl">
					Poznan University of Technology <span className="text-lg text-white">(2022 - Present)</span>
				</h2>
				<p className="text-sm md:text-base lg:text-xl">
					Major: <span className="text-themeOne font-semibold">Computer Science</span>
				</p>
				<p className="text-sm md:text-base lg:text-xl">
					Degree: <span className="text-themeOne font-semibold">Bachelor</span>
				</p>
			</div>

			<div className="m-2 lg:m-4 p-2 lg:p-4 flex flex-col gap-2 bg-additionalOne rounded-lg">
				<h2 className="text-themeOne font-semibold text-2xl">
					Electrical Engineering Technical School in Włocławek <span className="text-lg text-white">(2018- 2022)</span>
				</h2>
				<p className="text-sm md:text-base lg:text-xl">
					Major: <span className="text-themeOne font-semibold">Computer Science</span>
				</p>
				<p className="text-sm md:text-base lg:text-xl">
					Gained professional title: <span className="text-themeOne font-semibold">IT Technician</span>
				</p>
				<p className="text-sm md:text-base lg:text-xl">
					Professional Qualifications: <span className="text-themeOne font-semibold">E12</span>,
					<span className="text-themeOne font-semibold"> E13</span>,<span className="text-themeOne font-semibold"> E14</span>
				</p>
			</div>
		</div>
	);
}
