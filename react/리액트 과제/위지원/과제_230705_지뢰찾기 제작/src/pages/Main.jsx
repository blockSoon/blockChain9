import React from "react";
import Mine from "./Mine";
const Main = () => {
  const arr = ["mine", "on", "on", "mine", "on", "on", "mine", "on", "on"];

  function random(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const el = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[el]] = [arr[el], arr[i]];
    }
    return arr;
  }
  console.log(random(arr));

  function loop(value, index) {
    return <Mine keys={index} temp={value} />;
  }

  return <div className="div">{arr.map(loop)}</div>;
};

export default Main;
