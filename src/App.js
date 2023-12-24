import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
// src/index.css or src/App.js
import "./styles/tailwind.css";

import { Container } from "./components/index";
import { Header, NavBar, Footer } from "./sections/index";
import { Home, AboutUs } from "./Pages";

const App = () => {
  return (
    <>
      <Router>
        <Header>
          <NavBar />
        </Header>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about_us" element={<AboutUs/>} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </>
  );
};
export default App;
