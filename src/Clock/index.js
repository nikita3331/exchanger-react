import { Container } from "./styled.js";
import { useCurrentDate } from "../useCurrentDate";

const Clock = () => {
  const { dateContent, timeContent } = useCurrentDate();

  return (
    <Container>
      Dzisiaj jest {dateContent}, {timeContent}
    </Container>
  );
};

export default Clock;
