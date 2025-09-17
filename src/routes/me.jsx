import MeCard from "../components/mecard";
import { MdDesignServices, MdDesktopMac, MdStorage, MdBugReport } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Me() {
	const { t } = useTranslation();

	return (
		<div className="w-full h-full text-center lg:text-left overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-white/0 scrollbar-thumb-accent">
			<h1 className="text-2xl lg:text-5xl font-bold text-themeOne">{t("LBL_ABOUT_ME")}</h1>
			<p className="m-2 lg:m-4 p-2 lg:p-4 text-sm md:text-base lg:text-xl bg-additionalOne rounded-lg">{t("INFO_ABOUT_ME")}</p>

			<h1 className="text-2xl lg:text-5xl font-bold text-themeOne">{t("LBL_WHAT_I_DO")}</h1>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 lg:p-4">
				<MeCard icon={<MdDesignServices />} title="UX-UI" />
				<MeCard icon={<MdDesktopMac />} title="Front-end" />
				<MeCard icon={<MdStorage />} title="Back-end" />
				<MeCard icon={<MdBugReport />} title="Testing" />
			</div>
		</div>
	);
}
