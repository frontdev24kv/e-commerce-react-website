import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import "./App.css";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
