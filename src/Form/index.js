import "./style.css";
import Result from "../Result";
import currencies from "../currencies.js";

const Form = () => {
  return (
    <form className="form">
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
            />
          </label>
        </p>
      </fieldset>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Waluta przeliczenia</legend>
        <p>
          <label className="form__label">
            Wybierz walutę:
            <select name="currency">
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
      <Result />
    </form>
  );
};

export default Form;
