import { createBrowserRouter, Navigate } from "react-router-dom"
import QrCodesBooksPage from "./pages/qr-codes/books/QrCodesBooks.page"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <QrCodesBooksPage />
  },
  {
    path: "*",
    element: <Navigate to="/" replace /> // Redireciona para a página inicial
  }
])
