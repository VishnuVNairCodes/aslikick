import { useState } from "react";
import "./GetUserName.css";

const GetUserName = ({ setUserName }) => {
  const [userNameInput, setUserNameInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
  };
  return (
    <form onSubmit={handleSubmit} className="get-user-name">
      <p>Hello, What's your name ?</p>
      <input
        value={userNameInput}
        onChange={(e) => setUserNameInput(e.target.value)}
        className="get-user-name-input"
      />
      <button type="submit" className="btn btn-primary-outline">
        Continue <i className="fa-solid fa-angle-right"></i>
      </button>
    </form>
  );
};

export { GetUserName };
