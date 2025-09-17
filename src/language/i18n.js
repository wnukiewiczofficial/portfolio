import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pl_PL from "./pl_PL.json";
import en_US from "./en_US.json";

const resources = {
    pl: { translation: pl_PL },
    en: { translation: en_US },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "pl", // default language
    interpolation: { escapeValue: false }
});

export default i18n;
