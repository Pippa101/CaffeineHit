import { useEffect } from "react";
const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft]);
  return <h2>Time: {timeLeft}</h2>;
};

export default Timer;
