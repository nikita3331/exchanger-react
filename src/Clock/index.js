import { Container } from "./styled.js";
import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateContent = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const timeContent = date.toLocaleTimeString();

  return (
    <Container>
      Dzisiaj jest {dateContent}, {timeContent}
    </Container>
  );
};

export default Clock;
