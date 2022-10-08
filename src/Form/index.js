import { useState } from "react";
import "./style.css";
import Result from "../Result";
import currencies from "../currencies.js";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState({});

  const calculateResult = (amount, currency) => {
    const targetRate = currencies.find(
      (currencie) => currencie.id === currency
    ).rate;
    console.log(targetRate);
    console.log(currency);
    console.log(amount);

    setResult({
      originalAmount: +amount,
      finalResult: amount / targetRate,
      currency: currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kwota w PLN jaką chcesz przeliczyć
        </legend>
        <p>
          <label className="form__label">
            Podaj kwotę *:
            <input
              className="form__input"
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>
        </p>
      </fieldset>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Waluta przeliczenia</legend>
        <p>
          <label className="form__label">
            Wybierz walutę:
            <select
              name="currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              {currencies.map((currency) => {
                return (
                  <option key={currency.id} value={currency.id}>
                    {currency.name}
                  </option>
                );
              })}
            </select>
          </label>
        </p>
      </fieldset>
      <button className="form__button">Przelicz</button>
      <Result result={result} />
    </form>
  );
};

export default Form;
