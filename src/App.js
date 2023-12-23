import "./App.css";
// src/index.css or src/App.js
import "./styles/tailwind.css";

import {  Container } from "./components/index";
import { Header,NavBar,Hero,MostPoupular, Footer, } from "./sections/index";

const App = () => {
  return (
    <>
      <Header  >
      <NavBar/>
      </Header>
      <Container>
        <Hero/>
        <MostPoupular />
      </Container>

      <Footer />
    </>
  );
};
export default App;
