import { useEffect, useState } from "react";
import { getRandomInt } from "../../utils";
import "./TodayFocus.css";

const TodayFocus = ({ mainFocus, setMainFocus, setMainFocusInput }) => {
  const isMainFocusDoneOnInitialRender =
    localStorage.getItem("isMainFocusDone") ?? false;
  const [isMainFocusDone, setIsMainFocusDone] = useState(
    JSON.parse(isMainFocusDoneOnInitialRender)
  );
  const getTodayFocusDoneMessage = () => {
    const messages = [
      "Way to Go!",
      "Nice!",
      "Great Work!",
      "Kudos!",
      "Good job!",
    ];
    return messages[getRandomInt(5)];
  };

  const handleEditFocus = () => {
    setMainFocusInput(mainFocus);
    setMainFocus("");
  };
  const handleDeleteFocus = () => {
    setMainFocusInput("");
    setMainFocus("");
  };

  useEffect(() => {
    localStorage.setItem("isMainFocusDone", isMainFocusDone);
  }, [isMainFocusDone]);

  return (
    <>
      <p className="today-focus-heading">TODAY</p>
      <div className="today-focus checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={isMainFocusDone}
            onChange={() => setIsMainFocusDone((prev) => !prev)}
            className="checkbox"
          />
          {isMainFocusDone ? <del>{mainFocus}</del> : <p>{mainFocus}</p>}
        </label>
        <section className="today-focus-btn-container">
          <button onClick={handleEditFocus} className="btn-icon">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button onClick={handleDeleteFocus} className="btn-icon">
            <i className="fa-solid fa-trash"></i>
          </button>
        </section>
        {isMainFocusDone && (
          <p className="today-focus-done-msg">{getTodayFocusDoneMessage()}</p>
        )}
      </div>
    </>
  );
};

export { TodayFocus };
