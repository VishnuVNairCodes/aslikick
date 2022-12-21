import "./GetUserName.css";

const GetUserName = () => {
  return (
    <main className="get-user-name">
      <p>Hello, What's your name ?</p>
      <input className="get-user-name-input" />
      <button className="btn btn-primary-outline">Continue</button>
    </main>
  );
};

export { GetUserName };
