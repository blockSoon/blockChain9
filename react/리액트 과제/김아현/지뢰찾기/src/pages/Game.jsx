import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import TileBox from "../components/TileBox";

const Game = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (result == false) {
      alert("게임 오버");
      navigate("/lose");
    } else if (result == true) {
      alert("게임 클리어");
      navigate("/win");
    }
  }, [result]);

  function setMine() {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    let randomSet = new Set();
    while (randomSet.size < 3) {
      let i = Math.floor(Math.random() * arr.length);
      randomSet.add(i);
      arr[i] = 1;
    }

    return arr;
  }

  return (
    <div>
      <Title />
      <TileBox arr={setMine()} setResult={setResult} />
    </div>
  );
};

export default Game;
