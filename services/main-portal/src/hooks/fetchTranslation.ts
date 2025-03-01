import { useEffect, useState } from "react"
import {isNil} from 'lodash'

type Props = {
  locale: string | undefined
  jsonFileName: string | undefined
}

export default function useFetchTranslation({ locale, jsonFileName }: Props) {
  const [translations, setTranslations] = useState(null)

  useEffect(() => {
    if (isNil(locale) || isNil(jsonFileName)) return;

    fetch(`/locales/${locale}/${jsonFileName}.json`)
      .then(response => response.json())
      .then(data => setTranslations(data))
  }, [locale, jsonFileName])

  return translations
}