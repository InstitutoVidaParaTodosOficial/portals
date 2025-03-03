import { render, screen } from "@testing-library/react"
import EventCard from "./EventCard"
import { NextEvent } from "@/types/NextEvent"
import "@testing-library/jest-dom"

const mockEvent: NextEvent = {
  id: "1",
  title: "Sample Event",
  date: "2023-12-31",
  place: "Sample Place",
  link: "https://example.com",
  backgroundColor: "#ffffff",
  backgroundImage: "",
  textColor: "#000000",
  titleColor: "#ff0000"
}

describe("EventCard", () => {
  it("renders the event title", () => {
    render(<EventCard event={mockEvent} />)
    const titleElement = screen.getByText(/Sample Event/i)
    expect(titleElement).toBeInTheDocument()
  })

  it("renders the event date", () => {
    render(<EventCard event={mockEvent} />)
    const dateElement = screen.getByText(/DATA: 2023-12-31/i)
    expect(dateElement).toBeInTheDocument()
  })

  it("renders the event place", () => {
    render(<EventCard event={mockEvent} />)
    const placeElement = screen.getByText(/LOCAL: Sample Place/i)
    expect(placeElement).toBeInTheDocument()
  })

  it("renders the event link", () => {
    render(<EventCard event={mockEvent} />)
    const linkElement = screen.getByText(/Saiba Mais/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", "https://example.com")
  })

  it("applies the correct background color", () => {
    render(<EventCard event={mockEvent} />)
    const cardElement = screen.getByTestId("event-card-wrapper")
    expect(cardElement).toHaveStyle(`background-color: ${mockEvent.backgroundColor}`)
  })

  it("applies the correct text color", () => {
    render(<EventCard event={mockEvent} />)
    const contentElement = screen.getByTestId("content-wrapper")
    expect(contentElement).toHaveStyle(`color: ${mockEvent.textColor}`)
  })
})
