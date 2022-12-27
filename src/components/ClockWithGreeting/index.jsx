import { useClock } from "../../custom-hooks";

import "./ClockWithGreeting.css";

const ClockWithGreeting = ({ userName }) => {
  const { currentTimeInPreferredFormat: currentTime, greetingMsg } = useClock();
  return (
    <section>
      <p className="clock-greeting-time">{currentTime}</p>
      <p className="clock-greeting-msg">
        {greetingMsg}, {userName}
      </p>
    </section>
  );
};

export { ClockWithGreeting };
