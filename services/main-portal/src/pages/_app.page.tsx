import type { AppProps } from "next/app"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"

import TopBar from "@/layout/TopBar"
import Footer from "@/layout/Footer"
import "../global.css"
import "../styles/colors.css"
import NavMenu from "@/layout/NavMenu"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider locale={router.locale} messages={pageProps.messages}>
      <TopBar />
      <NavMenu />
      <Component {...pageProps} />
      <Footer />
    </NextIntlClientProvider>
  )
}
