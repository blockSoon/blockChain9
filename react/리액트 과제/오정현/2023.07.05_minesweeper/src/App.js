import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";

function App() {
  const [gameKey, setGameKey] = useState(0);

  const restartGame = () => {
    // 처음 시작할때 지뢰를 생성하기 위해 의도적으로 값을 변경함
    setGameKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {}, [gameKey]);

  return (
    <div className="App">
      <Main gameKey={gameKey} onGameOver={restartGame} />
    </div>
  );
}

export default App;
