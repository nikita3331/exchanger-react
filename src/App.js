import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header headerContent="Kalkulator Walut" />
      <main>
        <Form />
      </main>
      <Footer footerContent="Copyright © 2022 - MeggCreative" />
    </div>
  );
}

export default App;
