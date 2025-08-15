import type { AppProps, AppContext } from "next/app"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { createGlobalStyle } from "styled-components"
import { Blinker } from "next/font/google"

import "../global.css"
import "../styles/colors.css"
import "../styles/configuration.css"
import TopBar from "@/layout/TopBar"
import Footer from "@/layout/Footer"
import { ProjectsStoreProvider } from "@/stores/ProjectsStoreContext"
import SocialMedia from "@/components/social-medias/SocialMedia"

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
        <TopBar />
        <Component {...pageProps} />
        <Footer />
        <SocialMedia borderRadiusPosition="left" />
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
