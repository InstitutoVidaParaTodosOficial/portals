import type { AppProps, AppContext } from "next/app"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import "../global.css"
import "../styles/colors.css"
import { Colors } from "@/styles/types"
import TopBar from "@/layout/TopBar"
import Footer from "@/layout/Footer"
import NavMenu from "@/layout/NavMenu"
import ContactUs from "@/sections/contact-us/ContactUs"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider locale={router.locale} messages={pageProps.messages}>
      <TopBar />
      <NavMenu />
      <Component {...pageProps} />
      <ContactUs backgroundColor={Colors.secondaryColor} />
      <Footer />
    </NextIntlClientProvider>
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
