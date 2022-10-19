import { Paragraph } from "./styled.js";

const Result = ({ result }) => {
  if (result === "") {
    return null;
  }
  return (
    <Paragraph>
      <span>
        Za {result.originalAmount} PLN otrzymasz {result.finalResult.toFixed(2)}{" "}
        {result.currency}
      </span>
    </Paragraph>
  );
};

export default Result;
