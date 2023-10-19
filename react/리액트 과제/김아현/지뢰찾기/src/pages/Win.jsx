import React from "react";
import { Link } from "react-router-dom";

const Win = () => {
  return (
    <div>
      <h2>게임 승리</h2>
      <Link to={"/"}>다시하기</Link>
    </div>
  );
};

export default Win;
