import { useEffect, useState } from "react";
import { useClock } from "../../custom-hooks/useClock";
import "./GreetUser.css";

const GreetUser = ({ userName }) => {
  const { currentTimeInPreferredFormat: currentTime, greetingMsg } = useClock();

  const mainFocusOnInitialRender = localStorage.getItem("mainFocus") ?? "";
  const isMainFocusDoneOnInitialRender =
    localStorage.getItem("isMainFocusDone") ?? false;
  const [mainFocus, setMainFocus] = useState(mainFocusOnInitialRender);
  const [mainFocusInput, setMainFocusInput] = useState("");
  const [isMainFocusDone, setIsMainFocusDone] = useState(
    JSON.parse(isMainFocusDoneOnInitialRender)
  );

  const handleFocusSubmit = (e) => {
    e.preventDefault();
    setMainFocus(mainFocusInput);
  };

  useEffect(() => {
    localStorage.setItem("mainFocus", mainFocus);
    localStorage.setItem("isMainFocusDone", isMainFocusDone);
  }, [mainFocus, isMainFocusDone]);

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
          <>
            <p className="focus">TODAY</p>
            <div className="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  checked={isMainFocusDone}
                  onChange={() => setIsMainFocusDone((prev) => !prev)}
                  className="checkbox"
                />
                {isMainFocusDone ? <del>{mainFocus}</del> : <p>{mainFocus}</p>}
              </label>
            </div>
          </>
        ) : (
          <form onSubmit={handleFocusSubmit}>
            <p>What is your main focus for today?</p>
            <input
              value={mainFocusInput}
              onChange={(e) => setMainFocusInput(e.target.value)}
              className="focus-input"
            />
          </form>
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
