import { useEffect, useState } from "react";
import { useClock } from "../../custom-hooks/useClock";
import { AskTodayFocus } from "../AskTodayFocus";
import { TodayFocus } from "../TodayFocus";
import "./GreetUser.css";

const GreetUser = ({ userName }) => {
  const { currentTimeInPreferredFormat: currentTime, greetingMsg } = useClock();

  const [mainFocusInput, setMainFocusInput] = useState("");
  const mainFocusOnInitialRender = localStorage.getItem("mainFocus") ?? "";
  const [mainFocus, setMainFocus] = useState(mainFocusOnInitialRender);

  useEffect(() => {
    localStorage.setItem("mainFocus", mainFocus);
  }, [mainFocus]);

  return (
    <main className="greeting-container">
      <section>
        <p className="greeting-time">{currentTime}</p>
        <p className="greeting-msg">
          {greetingMsg}, {userName}
        </p>
      </section>
      <section className="focus-container">
        {mainFocus ? (
          <TodayFocus
            mainFocus={mainFocus}
            setMainFocus={setMainFocus}
            setMainFocusInput={setMainFocusInput}
          />
        ) : (
          <AskTodayFocus
            setMainFocus={setMainFocus}
            mainFocusInput={mainFocusInput}
            setMainFocusInput={setMainFocusInput}
          />
        )}
      </section>
      <section className="quote-container">
        <p>
          <em>"Proof of work is the way to go "</em> - <span>Swapnil</span>
        </p>
      </section>
    </main>
  );
};

export { GreetUser };
