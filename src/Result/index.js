import "./style.css";

const Result = ({ result }) => {
  if (result === "") {
    return null;
  }
  return (
    <p className="form__paragraph">
      <span>
        Za {result.originalAmount} PLN otrzymasz {result.finalResult.toFixed(2)}{" "}
        {result.currency}
      </span>
    </p>
  );
};

export default Result;
