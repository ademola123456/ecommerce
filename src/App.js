import React from "react";
import "./App.css";
import ProductOverview from "./pages/productOverview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/:slug"
            element={<ProductOverview />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
