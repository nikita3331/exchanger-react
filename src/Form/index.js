import { useState, useRef } from "react";
import Result from "../Result";
import currencies from "../currencies.js";
import {
  StyledForm,
  StyledFieldset,
  StyledLabel,
  StyledLegend,
  StyledInput,
  StyledButton,
} from "./styled.js";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].id);
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const calculateResult = (amount, currency) => {
    const targetRate = currencies.find(({ id }) => id === currency).rate;

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
    <StyledForm onSubmit={onFormSubmit}>
      <StyledFieldset>
        <StyledLegend>Kwota w PLN jaką chcesz przeliczyć</StyledLegend>
        <p>
          <StyledLabel>
            Podaj kwotę *:
            <StyledInput
              ref={inputRef}
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </StyledLabel>
        </p>
      </StyledFieldset>
      <StyledFieldset>
        <StyledLegend>Waluta przeliczenia</StyledLegend>
        <p>
          <StyledLabel>
            Wybierz walutę:
            <StyledInput
              as="select"
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
            </StyledInput>
          </StyledLabel>
        </p>
      </StyledFieldset>
      <StyledButton onClick={focusInput}>Przelicz</StyledButton>
      <Result result={result} />
    </StyledForm>
  );
};

export default Form;
