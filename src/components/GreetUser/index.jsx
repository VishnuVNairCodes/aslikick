import { useClock } from "../../custom-hooks/useClock";
import "./GreetUser.css";

const GreetUser = ({ userName }) => {
  const { currentTimeInPreferredFormat: currentTime, greetingMsg } = useClock();
  return (
    <main className="greeting-container">
      <section>
        <p className="greeting-time">{currentTime}</p>
        <p className="greeting-msg">
          {greetingMsg}, {userName}
        </p>
      </section>
      <section className="focus-container">
        <p>What is your main focus for today?</p>
        <input className="focus-input" />
        {/* <div className="checkbox-container">
          <label>
            <input type="checkbox" class="checkbox" />
            TODAY
          </label>
        </div>
        <p className="focus">4th Project</p> */}
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
