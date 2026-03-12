import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enCommon from "./locales/en/common.json"
import enAuth from "./locales/en/auth.json"

import deCommon from "./locales/de/common.json"
import deAuth from "./locales/de/auth.json"

i18n.use(initReactI18next).init({
	resources: {
		en: {
			common: enCommon,
			auth: enAuth
		},
		de: {
			common: deCommon,
			auth: deAuth
		}
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	}
})

export default i18n