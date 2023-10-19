import React, { useState, useEffect } from "react";
import Mine from "./Mine";

const Tile = ({ mine = false, setResult, plusCount }) => {
  const [selected, setSelected] = useState(false);

  const clickTile = (e) => {
    if (mine) {
      // 지뢰 타일이라면 게임오버
      e.target.firstChild.classList.add("flex");

      setTimeout(() => {
        document
          .querySelectorAll(".mine")
          .forEach((el) => el.classList.add("flex"));
      }, 400);

      setTimeout(() => {
        document
          .querySelectorAll(".mine")
          .forEach((el) => el.classList.remove("flex"));
      }, 900);

      setTimeout(() => {
        setResult(false);
      }, 1000);
      
    } else {
      if (!selected) {
        setSelected(true);
        e.target.classList.remove("clickable");
        plusCount();
      } else {
        alert("이미 선택된 타일");
      }
    }
  };

  if (mine) {
    // 지뢰 타일이라면
    return (
      <div className="tile clickable" onClick={clickTile}>
        <Mine />
      </div>
    );
  } else {
    return <div className="tile clickable" onClick={clickTile}></div>;
  }
};

export default Tile;
