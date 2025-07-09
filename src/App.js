
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Saude from "./pages/Saude";
import Social from "./pages/Social";
import Juridico from "./pages/Juridico";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import "./App.css";

function App() {
  const [tema, setTema] = useState("escuro");

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prev) => (prev === "escuro" ? "claro" : "escuro"));
  };

  return (
    <div className="App">
      <button className="tema-toggle" onClick={alternarTema}>🌗</button>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/social" element={<Social />} />
        <Route path="/juridico" element={<Juridico />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
