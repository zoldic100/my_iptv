import "./App.css";
// src/index.css or src/App.js
import "./styles/tailwind.css";

import { Header, Container, Footer,NavBar } from "./components/index";

const App = () => {
  return (
    <>
      <Header  >
      <NavBar/>
      </Header>
      <Container>
        page
      </Container>

      <Footer />
    </>
  );
};
export default App;
