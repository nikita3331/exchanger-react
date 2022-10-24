import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import Clock from "../Clock";
import { StyledContainer } from "./styled.js";
import { useState, useEffect } from "react";

function App() {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");
  const fetchFromApi=()=>{
  console.log('do something')
  }
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=PLN")
      .then((response) => response.json())
      .then((dataRates) => {
        setRates(dataRates.rates);
        setDate(dataRates.date);
      });

    console.log(rates);
  }, []);

  return (
    <>
      <StyledContainer>
        <Header content="Kalkulator Walut" />
        <main>
          <Clock />
          <Form date={date} />
        </main>
        <Footer content="Copyright © 2022 - MeggCreative" />
      </StyledContainer>
    </>
  );
}

export default App;
