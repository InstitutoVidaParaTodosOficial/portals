import { useRouter } from "next/router"
import { useTranslations } from "next-intl"
import { useState } from "react"
import styled from "styled-components"

const NavMenuWrapper = styled.nav``

const NavMenuItemsList = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  list-style: none;

  li:hover {
    cursor: pointer;
  }
`

type MenuItem = {
  name: string
  path: string
  target?: HrefTarget
}

enum HrefTarget {
  BLANK = "_blank",
  SELF = "_self"
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "pedro-dong",
    path: "/pedro-dong"
  },
  {
    name: "kingdom-investors",
    path: "/kingdom-investors"
  },
  {
    name: "missionary",
    path: "/become-a-missionary"
  },
  {
    name: "immersion",
    path: "https://oquetemosvistoeouvido.com.br/",
    target: HrefTarget.BLANK
  }
]

const LANGUAGES = [
  { code: "pt", label: "Portuguese", flag: "🇧🇷" },
  { code: "es", label: "Spanish", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "French", flag: "🇫🇷" },
  { code: "ko", label: "Korean", flag: "🇰🇷" }
]

export default function NavMenu() {
  const router = useRouter()
  const t = useTranslations("nav-menu")
  const [selectedLang, setSelectedLang] = useState(router.locale || "en")

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    setSelectedLang(newLocale)
    router.push(router.asPath, router.asPath, { locale: newLocale })
  }

  const handleNavItemClick = (item: MenuItem) => {
    if (item.target === HrefTarget.BLANK) {
      window.open(item.path, item.target)
    } else {
      router.push(item.path)
    }
  }

  return (
    <NavMenuWrapper>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <NavMenuItemsList>
          {MENU_ITEMS.map((item, index) => (
            <li key={index}>
              <a onClick={() => handleNavItemClick(item)}>{t(item.name)}</a>
            </li>
          ))}
        </NavMenuItemsList>
        <select
          value={selectedLang}
          onChange={handleLanguageChange}
          style={{ height: 32, borderRadius: 4, paddingLeft: 8 }}
        >
          {LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
      </div>
    </NavMenuWrapper>
  )
}
