import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import BooksDetailsPage from "./pages/BooksDetails.jsx";


import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="bookspage" element={<BooksPage />} />
        <Route path="/bookspage/:id" element={<BooksDetailsPage />} />
      </Route>
    </Routes>

  </BrowserRouter>

);