import { createBrowserRouter } from "react-router-dom"
import QrCodesBooksPage from "./pages/qr-codes/books/QrCodesBooks.page"

export const routes = createBrowserRouter([
  {
    path: "/qr-codes/books",
    element: <QrCodesBooksPage />
  }
])
