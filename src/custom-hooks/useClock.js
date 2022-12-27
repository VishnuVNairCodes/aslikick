import { useEffect, useState } from "react";
import { getCurrentTime } from "../utils";

const useClock = () => {
  const is24HourPreferred = false;
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentHours, currentMinutes] = currentTime.split(":");

  const getCurrentTimeInPreferredFormat = () => {
    if (currentHours === "12") {
      return currentTime;
    } else if (is24HourPreferred) {
      return currentTime;
    }
    return `${currentHours % 12}:${currentMinutes}`;
  };
  const currentTimeInPreferredFormat = getCurrentTimeInPreferredFormat();

  const getGreetingMsg = () => {
    if (currentHours >= 4 && currentHours < 12) {
      return "Good Morning";
    } else if (currentHours >= 12 && currentHours < 17) {
      return "Good Afternoon";
    } else if (currentHours >= 17 && currentHours < 21) {
      return "Good Evening";
    } else {
      return "Great Night";
    }
  };
  const greetingMsg = getGreetingMsg();

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
  });

  return { currentTimeInPreferredFormat, greetingMsg };
};

export { useClock };
