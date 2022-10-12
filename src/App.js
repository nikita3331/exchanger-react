import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Clock from "./Clock";

function App() {
  return (
    <div className="container">
      <Header content="Kalkulator Walut" />
      <main>
        <Clock />
        <Form />
      </main>
      <Footer content="Copyright © 2022 - MeggCreative" />
    </div>
  );
}

export default App;
