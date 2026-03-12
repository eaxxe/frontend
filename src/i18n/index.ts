import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enCommon from "./locales/en/common.json"
import enAuth from "./locales/en/auth.json"

import ruCommon from "./locales/ru/common.json"
import ruAuth from "./locales/ru/auth.json"

i18n.use(initReactI18next).init({
	resources: {
		en: {
			common: enCommon,
			auth: enAuth
		},
		ru: {
			common: ruCommon,
			auth: ruAuth
		}
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	}
})

export default i18n