import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./pages/about";
import { Vans } from "./pages/vans";
import {VanDetails} from "./pages/vanDetails"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./server"

// add to links from both home and about

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element ={<VanDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
