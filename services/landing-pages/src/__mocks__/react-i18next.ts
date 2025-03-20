// __mocks__/react-i18next.ts
import { initReactI18next } from "react-i18next"

const useTranslation = (): { t: (key: string) => string; i18n: { changeLanguage: () => Promise<void> } } => {
  return {
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise<void>(() => {})
    }
  }
}

export { useTranslation, initReactI18next }
export * from "react-i18next"
