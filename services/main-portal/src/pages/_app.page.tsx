import type { AppProps, AppContext } from "next/app"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import "../global.css"
import "../styles/colors.css"
import "../styles/configuration.css"
import TopBar from "@/layout/TopBar"
import Footer from "@/layout/Footer"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider locale={router.locale} messages={pageProps.messages}>
      <TopBar />
      <Component {...pageProps} />
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
