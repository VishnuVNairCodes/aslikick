import { useEffect, useState } from "react";
import { AskTodayFocus } from "../AskTodayFocus";
import { ClockWithGreeting } from "../ClockWithGreeting";
import { TodayFocus } from "../TodayFocus";
import "./GreetUser.css";

const GreetUser = ({ userName }) => {
  const [mainFocusInput, setMainFocusInput] = useState("");
  const mainFocusOnInitialRender = localStorage.getItem("mainFocus") ?? "";
  const [mainFocus, setMainFocus] = useState(mainFocusOnInitialRender);

  useEffect(() => {
    localStorage.setItem("mainFocus", mainFocus);
  }, [mainFocus]);

  return (
    <main className="greeting-container">
      <ClockWithGreeting userName={userName} />
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
    </main>
  );
};

export { GreetUser };
