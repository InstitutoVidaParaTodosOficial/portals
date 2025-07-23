import { useTranslations } from "next-intl"
import MayIPrayForYouSection from "./sections/MayIPrayForYouSection/MayIPrayForYouSection"

export default function HomePage() {
  const t = useTranslations()
  return (
    <>
      <h1>{t("welcome")}</h1>
      <MayIPrayForYouSection />
    </>
  )
}
