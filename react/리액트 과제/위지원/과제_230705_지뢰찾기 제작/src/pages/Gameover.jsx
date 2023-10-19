import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Gameover = ({ gameTarget }) => {
  console.log({ gameTarget });
  const navigate = useNavigate();

  if (gameTarget === "box mine pop") {
    return navigate("/gameover");
  }
};
export default Gameover;
