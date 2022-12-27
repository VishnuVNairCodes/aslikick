import { useEffect, useState } from "react";
import "./App.css";
import { GetUserName } from "./components/GetUserName";
import { GreetUser } from "./components/GreetUser";

function App() {
  const userNameOnInitialRender = () => localStorage.getItem("userName") ?? "";

  const [userName, setUserName] = useState(userNameOnInitialRender());

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  return (
    <div className="app-container">
      <div className="app">
        {userName ? (
          <GreetUser userName={userName} />
        ) : (
          <GetUserName setUserName={setUserName} />
        )}
      </div>
    </div>
  );
}

export default App;
