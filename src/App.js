import "./App.css";
import { GetUserName } from "./components/GetUserName";
import { GreetUser } from "./components/GreetUser";

function App() {
  return (
    <div className="app-container">
      <div className="app">
        {/* <GetUserName /> */}
        <GreetUser />
      </div>
    </div>
  );
}

export default App;
