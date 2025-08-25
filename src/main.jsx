import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from "./pages/HomePage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import BooksDetailsPage from "./pages/BooksDetails.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux';
import store from './store.js';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />} />
          <Route path="bookspage" element={<BooksPage />} />
          <Route path="/bookspage/:id" element={<BooksDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
           <Route path="Login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);