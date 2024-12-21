import styled from "styled-components"

import { Anaheim } from "next/font/google"

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: "400"
})

const Container = styled.section`
  display: flex;
  align-items: center;
  background-color: #0a0b2f;
`

const Title = styled.div`
  color: white;
  padding: 16px;
  font-size: 40px;
  text-align: center;
`

export default function OurNumbersSection() {
  return (
    <Container>
      <Title>
        <h1>Como fazer Parte?</h1>
      </Title>

      <p className={anaheim.className}>
        Se você teve o coração de participar, não espere amanhã! <br />
        Preencha agora o formulário para ter experiências sobrenaturais com o Senhor! <br />
        Sua vida nunca mais será a mesma!
      </p>
    </Container>
  )
}
