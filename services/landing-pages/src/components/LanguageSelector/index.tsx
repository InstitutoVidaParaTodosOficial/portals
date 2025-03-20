import { useTranslation } from "react-i18next"
import styled from "styled-components"

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px;
  }
`

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Select onChange={changeLanguage} value={i18n.language}>
      <option value="en">English</option>
      <option value="pt">Português</option>
    </Select>
  )
}
