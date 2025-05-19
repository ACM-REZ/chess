import { BoardComponent } from "./components/BoardComponent";
import { useState, useEffect } from "react";
import { Board } from "./models/Board";
import "./App.css";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default App;
