import React from "react"
import { render, screen } from "@testing-library/react"
import QrCodesBooksPage from "./QrCodesBooks.page"
import userEvent from "@testing-library/user-event"
import "../../../__mocks__/react-i18next"

test("renders QrCodes Books with Image", () => {
  render(<QrCodesBooksPage />)
  const imageLogo = screen.getByAltText("Logo")
  expect(imageLogo).toBeInTheDocument()
})

test("renders with clickable items", () => {
  render(<QrCodesBooksPage />)
  const clickableItems = screen.getAllByRole("button")
  expect(clickableItems).toHaveLength(4)
})

test("clicking on a clickable item redirects to the correct link", () => {
  Object.defineProperty(window, "location", {
    value: {
      assign: jest.fn()
    },
    writable: true
  })

  render(<QrCodesBooksPage />)
  const clickableItem = screen.getByText("institute")
  userEvent.click(clickableItem)
  expect(window.location.href).toBe("https://www.instagram.com/institutovidaparatodos")
})
