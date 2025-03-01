import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations()
  return <h1>{t("welcome")}</h1>
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`./i18n/${context.locale}.json`)).default
    }
  }
}
