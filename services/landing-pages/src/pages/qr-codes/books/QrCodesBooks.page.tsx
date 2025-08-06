import { useTranslation } from "react-i18next"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import LanguageSelector from "../../../components/LanguageSelector"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle, #071834, #627085);
  position: relative;
  padding: 16px;
  box-sizing: border-box;
`

const Card = styled.div`
  background-color: #2b2c33;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`

const ClickableCard = styled.button`
  padding: 16px;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`

const LanguageSelectorContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: 600px) {
    top: 8px;
    right: 8px;
  }
`

const CLICKABLE_ITEMS: MenuItem[] = [
  { i18nKey: "institute", link: "https://www.instagram.com/institutovidaparatodos" },
  { i18nKey: "publisher", link: "https://www.arvoredavida.org.br" },
  { i18nKey: "may_i_pray_for_you", link: "https://qrfacil.me/QqNKW4z5" },
  { i18nKey: "become-a-missionary", link: "https://wa.me/5511982081803" }
]

export default function QrCodesBooksPage() {
  const { t } = useTranslation("qr-codes-books")

  const onClickCard = (link: string) => {
    window.location.href = link
  }

  return (
    <Container>
      <LanguageSelectorContainer>
        <LanguageSelector />
      </LanguageSelectorContainer>

      <Card>
        <Image src="/profile_ivpt.png" alt="Logo" />

        {CLICKABLE_ITEMS.map((item, index) => (
          <ClickableCard key={index} onClick={() => onClickCard(item.link)}>
            {t(item.i18nKey)}
          </ClickableCard>
        ))}
      </Card>
    </Container>
  )
}
