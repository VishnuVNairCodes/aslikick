import axios from "axios";
import { useEffect } from "react";
import { getRandomInt } from "../../utils";
import "./Quote.css";

const Quote = () => {
  const { text, author } = JSON.parse(localStorage.getItem("quote")) ?? {
    text: "Great spirits have always encountered violent opposition from mediocre minds.",
    author: "Albert Einstein",
  };

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get("https://type.fit/api/quotes");
        const currentQuote = data[getRandomInt(1643)];
        if (status === 200) {
          localStorage.setItem("quote", JSON.stringify(currentQuote));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  });

  return (
    <section className="quote-container">
      <p>
        <em>"{text}"</em> <span>{author}</span>
      </p>
    </section>
  );
};

export { Quote };
