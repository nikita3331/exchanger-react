import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header content="Kalkulator Walut" />
      <main>
        <Form />
      </main>
      <Footer content="Copyright © 2022 - MeggCreative" />
    </div>
  );
}

export default App;
