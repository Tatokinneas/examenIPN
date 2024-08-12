import useCountdown from "../hooks/useCountdown";

const Timer = ({ initialTime }) => {
  const [timeLeft, formattedTime] = useCountdown(initialTime);

  return <h2>{formattedTime}</h2>;
};

export default Timer;
