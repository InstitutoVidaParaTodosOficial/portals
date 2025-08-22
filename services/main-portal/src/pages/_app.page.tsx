import type { AppProps, AppContext } from "next/app"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Blinker } from "next/font/google"

import "../global.css"
import "../styles/colors.css"
import "../styles/configuration.css"
import DesktopTopBar from "@/layout/menu/DesktopTopBar"
import Footer from "@/layout/Footer"
import { ProjectsStoreProvider } from "@/stores/ProjectsStoreContext"
import SocialMedia from "@/components/social-medias/SocialMedia"
import MobileTopBar from "@/layout/menu/MobileTopBar"

const blinker = Blinker({
  subsets: ["latin"],
  weight: "400",
  style: "normal"
})

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${blinker.style.fontFamily}, sans-serif;
  }
`

const SocialMediaWrapper = styled.div`
  @media (max-width: 1048px) {
    display: none;
  }
`

const DesktopTopBarWrapper = styled.div`
  @media (max-width: 1048px) {
    display: none;
  }
`

const MobileTopBarWrapper = styled.div`
  @media (min-width: 1048px) {
    display: none;
  }
`

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      setTimeZone(tz)
    }
  }, [])

  if (!timeZone) return null // Optionally, show a loader here

  return (
    <ProjectsStoreProvider>
      <NextIntlClientProvider locale={router.locale} messages={pageProps.messages} timeZone={timeZone}>
        <GlobalStyle />

        {/*top bars*/}
        <DesktopTopBarWrapper>
          <DesktopTopBar />
        </DesktopTopBarWrapper>
        <MobileTopBarWrapper>
          <MobileTopBar />
        </MobileTopBarWrapper>

        <Component {...pageProps} />

        <Footer />

        <SocialMediaWrapper>
          <SocialMedia borderRadiusPosition="left" />
        </SocialMediaWrapper>
      </NextIntlClientProvider>
    </ProjectsStoreProvider>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext
  const locale = ctx.locale || "en"
  const messages = (await import(`../i18n/${locale}.json`)).default

  return {
    pageProps: {
      messages
    }
  }
}

export default App
