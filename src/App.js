import "./App.css";
// src/index.css or src/App.js
import "./styles/tailwind.css";

import {  Container } from "./components/index";
import { Header,NavBar,Hero,MostPoupular,GamingLabrary, Footer, } from "./sections/index";

const App = () => {
  return (
    <>
      <Header  >
      <NavBar/>
      </Header>
      <Container>
        <Hero/>
        <MostPoupular />
        <GamingLabrary/>
      </Container>

      <Footer />
    </>
  );
};
export default App;
