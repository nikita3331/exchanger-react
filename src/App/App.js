import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import Clock from "../Clock";
import { StyledContainer } from "./styled.js";

function App() {
  return (
    <>
      <StyledContainer>
        <Header content="Kalkulator Walut" />
        <main>
          <Clock />
          <Form />
        </main>
        <Footer content="Copyright © 2022 - MeggCreative" />
      </StyledContainer>
    </>
  );
}

export default App;
