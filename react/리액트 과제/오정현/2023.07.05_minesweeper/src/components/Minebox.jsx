import React, { useState, useEffect } from "react";

// ==================================================================
// 지뢰 생성
const makeMine = () => {
  let mineArr = [
    { index: 1, mine: "false" },
    { index: 2, mine: "false" },
    { index: 3, mine: "false" },
    { index: 4, mine: "false" },
    { index: 5, mine: "false" },
    { index: 6, mine: "false" },
    { index: 7, mine: "false" },
    { index: 8, mine: "false" },
    { index: 9, mine: "false" },
  ];
  let tempArr = [];
  for (let i = 0; i < 3; i++) {
    tempArr.push(mineArr.splice(Math.floor(Math.random() * mineArr.length), 1));
  }

  tempArr.forEach((e, i) => {
    e[0].mine = "true";
    mineArr.push(e[0]);
  });

  mineArr.sort((a, b) => a.index - b.index);
  return mineArr;
};
// ==================================================================

export default function Minebox({ onGameOver }) {
  const [mines, setMine] = useState(makeMine());
  const [gameState, setGameState] = useState("");

  useEffect(() => {
    boxClick(mines);
  }, [mines]);

  useEffect(() => {
    setMine(makeMine());
    // console.log(mines);
  }, [gameState]);

  useEffect(() => {
    if (gameState === "win" || gameState === "lose") {
      onGameOver();
    }
  }, [gameState, onGameOver]);

  // ==================================================================
  // 박스를 누르면 동작
  function boxClick(mines) {
    let cnt = 0;
    const minebox = document.querySelectorAll(".minebox");
    minebox.forEach((e, i) => {
      e.onclick = () => {
        if (mines[i].mine == "true") {
          alert("lose");
          setGameState("lose");
        } else {
          e.innerHTML = `<span>X</span>`;
          cnt++;
        }

        if (cnt >= 6) {
          alert("wind");
          setGameState("win");
        }
      };
    });
  }
  // ==================================================================

  return mines.map((e, i) => <div className="minebox">{e.index}</div>);
}
