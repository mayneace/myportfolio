import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import BgLayout from "./components/BgLayout";
// import About from "./components/About";
import { useState } from "react";
import Footer from "./components/footer";
import Projectspage from "./pages/Projectspage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <BgLayout isDarkMode={isDarkMode}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route path="/" element={<Homepage isDarkMode={isDarkMode} />} />
            {/* <Route path="./components/About.tsx" element={<About />} /> */}
            <Route
              path="/Projectspage"
              element={<Projectspage isDarkMode={isDarkMode} />}
            />
          </Routes>
          <Footer isDarkMode={isDarkMode} />
        </BrowserRouter>
      </BgLayout>
    </>
  );
}

export default App;
