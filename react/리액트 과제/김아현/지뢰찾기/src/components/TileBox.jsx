import React, { useState, useEffect } from "react";
import Tile from "./Tile";

const TileBox = ({ arr, setResult }) => {
  let tileList = [];

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= arr.length - 3) {
      setResult(true);
    }
  }, [count]);

  function plusCount() {
    let pluscount = count + 1;
    setCount(pluscount);
  }

  function setTileList() {
    arr.forEach((el, index) => {
      if (el == 0) {
        tileList.push(<Tile setResult={setResult} plusCount={plusCount} />);
      } else {
        tileList.push(
          <Tile mine={true} setResult={setResult} plusCount={plusCount} />
        );
      }
    });

    return tileList;
  }

  return <div className="tile-box">{setTileList()}</div>;
};

export default TileBox;
