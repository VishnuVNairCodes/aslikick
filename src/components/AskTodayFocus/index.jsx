import "./AskTodayFocus.css";

const AskTodayFocus = ({ setMainFocus, mainFocusInput, setMainFocusInput }) => {
  const handleFocusSubmit = (e) => {
    e.preventDefault();
    setMainFocus(mainFocusInput);
  };
  return (
    <form onSubmit={handleFocusSubmit}>
      <p>What is your main focus for today?</p>
      <input
        value={mainFocusInput}
        onChange={(e) => setMainFocusInput(e.target.value)}
        className="focus-input"
        autoFocus
      />
    </form>
  );
};

export { AskTodayFocus };
