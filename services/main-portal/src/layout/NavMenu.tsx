import { useRouter } from "next/router"

import styled from "styled-components"
import useFetchTranslation from "@/hooks/fetchTranslation"

const NavMenuWrapper = styled.nav``

const NavMenuItemsList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  list-style: none;

  li:hover {
    cursor: pointer;
  }
`

type MenuItem = {
  name: string
  path: string
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "about-us",
    path: "/about-us"
  },
  {
    name: "news-feed",
    path: "/news-feed"
  },
  {
    name: "projects",
    path: "/projects"
  },
  {
    name: "ministry",
    path: "/ministry"
  },
  {
    name: "agenda",
    path: "/agenda"
  },
  {
    name: "find-us",
    path: "/find-us"
  },
  {
    name: "donations",
    path: "/donations"
  }
]

export default function NavMenu() {
  const router = useRouter()
  const translations = useFetchTranslation({
    locale: router.locale,
    jsonFileName: "menu"
  })

  return (
    <NavMenuWrapper>
      <NavMenuItemsList>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <a onClick={() => router.push(item.path)}>{translations && translations[item.name]}</a>
          </li>
        ))}
      </NavMenuItemsList>
    </NavMenuWrapper>
  )
}
