import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from "i18next-http-backend"

i18n
  .use(HttpApi) // Carrega traduções via HTTP
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Inicializa o react-i18next
  .init({
    fallbackLng: "en", // Idioma padrão
    debug: true, // Ative para depuração
    backend: {
      loadPath: "/locales/{{lng}}/translation.json" // Caminho para os arquivos de tradução
    },
    interpolation: {
      escapeValue: false // React já faz a sanitização
    }
  })

export default i18n
