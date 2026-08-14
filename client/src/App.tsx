import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import BgLayout from "./components/BgLayout";
// import About from "./components/About";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <BgLayout isDarkMode={isDarkMode}>
        <BrowserRouter>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route path="/" element={<Homepage isDarkMode={isDarkMode} />} />
            {/* <Route path="./components/About.tsx" element={<About />} /> */}
          </Routes>
          <Footer isDarkMode={isDarkMode} />
        </BrowserRouter>
      </BgLayout>
    </>
  );
}

export default App;
