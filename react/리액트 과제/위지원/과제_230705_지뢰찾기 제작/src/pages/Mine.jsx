import React from "react";
import Gameend from "./Gameend";
import Gameover from "./Gameover";

const Mine = ({ temp, keys }) => {
  console.log("asd", temp);

  let gameTarget;
  function Click(temp) {
    if (temp.target.className == "box mine") {
      temp.target.className = "box mine pop";
      gameTarget = temp.target.className;
      setTimeout(() => {
        alert("게임오버");
      }, 100);
    } else {
      temp.target.className = "box on pop";
      gameTarget = temp.target.className;
    }
    console.log(gameTarget);
  }

  return (
    <>
      <div className={"box " + temp} onClick={Click}></div>
      <Gameend temp={gameTarget} />
      <Gameover temp={gameTarget} />
    </>
  );
};

export default Mine;
