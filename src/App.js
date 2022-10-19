import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Clock from "./Clock";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: { silver: "#ccc", twilightBlue: "#F0FFFF", gallery: "#eee" },
  breakpoints: {
    mobile: 767,
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Header content="Kalkulator Walut" />
          <main>
            <Clock />
            <Form />
          </main>
          <Footer content="Copyright © 2022 - MeggCreative" />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
