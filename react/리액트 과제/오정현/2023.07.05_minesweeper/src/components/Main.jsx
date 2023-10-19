import React from "react";
import Minebox from "./Minebox";

export default function Main({ gameKey, onGameOver }) {
  return (
    <div className="main">
      <span>지뢰 찾기 게임</span>
      <div className="mainWrap">
        <Minebox key={gameKey} onGameOver={onGameOver} />
      </div>
    </div>
  );
}
