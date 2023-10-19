import React from "react";
import { Link } from "react-router-dom";

const Lose = () => {
  return (
    <div>
      <h1>게임오버</h1>
      <Link to={"/"}>다시하기</Link>
    </div>
  );
};

export default Lose;
