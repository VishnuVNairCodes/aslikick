import { useEffect, useState } from "react";
import { getCurrentTime } from "../utils/get-current-time";

const useClock = () => {
  const is24HourPreferred = false;
  const getCurrentTimeFormatted = () => getCurrentTime(is24HourPreferred);

  const [currentTime, setCurrentTime] = useState(getCurrentTimeFormatted());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getCurrentTimeFormatted());
    }, 1000);
  });

  return currentTime;
};

export { useClock };
