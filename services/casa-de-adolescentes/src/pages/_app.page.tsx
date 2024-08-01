import type { AppProps } from "next/app"
import "../styles/global.css"
import TopBar from "@/layout/TopBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  )
}
