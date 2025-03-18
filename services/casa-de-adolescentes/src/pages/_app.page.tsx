import type { AppContext, AppProps } from "next/app"
import "../styles/global.css"
import TopBar from "@/layout/TopBar"
import Footer from "@/layout/Footer"
import { useRouter } from "next/router"
import { NextIntlClientProvider } from "next-intl"

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
