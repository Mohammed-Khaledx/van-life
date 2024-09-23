import "./App.css";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// add to links from both home and about

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
