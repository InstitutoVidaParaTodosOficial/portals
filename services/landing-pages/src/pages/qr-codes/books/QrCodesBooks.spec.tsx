import React from "react"
import { render, screen } from "@testing-library/react"
import QrCodesBooksPage from "./QrCodesBooks.page"

test("renders QrCodes Books", () => {
  render(<QrCodesBooksPage />)
  const linkElement = screen.getByText(/welcome/i)
  expect(linkElement).toBeInTheDocument()
})
