import React from "react";
import { useNavigate } from "react-router-dom";

const Gameend = ({ gameTarget }) => {
  //   console.log("들어옴?");
  const navigate = useNavigate();

  if (gameTarget == "box on pop") {
    console.log("계속해");
  }
};

export default Gameend;
