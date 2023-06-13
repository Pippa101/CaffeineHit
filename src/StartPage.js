import logo from "./logo.svg";

const StartPage = ({ setStartGame }) => {
  return (
    <main className="main">
      {" "}
      <img src={logo} id="logo" alt="logo" />
      <p className="taunt">
        HA YOU THINK YOU’RE EDGY BECAUSE YOU CAN MAKE A COFFEE.
      </p>
      <p>WELL LET'S SEE...</p>
      <button id="startButton" onClick={() => setStartGame(true)}>
        START
      </button>
    </main>
  );
};

export default StartPage;
