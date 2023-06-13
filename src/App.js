import "./App.css";
import StartPage from "./StartPage";
import GamePage from "./GamePage";
import { useState } from "react";

function App() {
  const [startGame, setStartGame] = useState(false);
  return (
    <div className="App">
      {startGame ? <GamePage /> : <StartPage setStartGame={setStartGame} />}
    </div>
  );
}

export default App;
