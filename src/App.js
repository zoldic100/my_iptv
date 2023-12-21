import "./App.css";

import {Header, Container, Footer} from "./components/index";

const App = () => {
  return (
    <>
      <Header Header="nav from" text="props" />
      <Container >
        <h1>children</h1>
            <p> bla bla</p>
            <Header Header="container"  />

        <h2><i>grandchild</i> </h2>
       </Container>
      <Footer />

    </>
  );
};
export default App;