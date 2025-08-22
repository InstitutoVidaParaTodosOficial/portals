import { useState } from "react"
import { useRouter } from "next/router"

const LANGUAGES = [
  { code: "pt", label: "Portuguese" },
  { code: "es", label: "Spanish" },
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "ko", label: "Korean" }
]

export default function LanguageSelector() {
  const router = useRouter()

  const [selectedLang, setSelectedLang] = useState(router.locale || "en")

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    setSelectedLang(newLocale)
    router.push(router.asPath, router.asPath, { locale: newLocale })
  }

  return (
    <>
      <select
        value={selectedLang}
        onChange={handleLanguageChange}
        style={{ height: 32, borderRadius: 4, paddingLeft: 8 }}
      >
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </>
  )
}
