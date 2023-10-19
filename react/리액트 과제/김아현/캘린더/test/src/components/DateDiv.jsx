import React from "react";
import Ribbon from "./Ribbon";
import Date from "./Date";

const DateDiv = () => {
  const render = () => {
    let dateDivArr = [];
    for (let i = 25; i < 31; i++) {
      dateDivArr.push(
        <div className="date-div">
          <Ribbon last={true} />
          <Date date={i} last={true} key={"06_" + i} />
        </div>
      );
    }

    for (let i = 1; i < 32; i++) {
      let color;
      if (i % 7 == 1) {
        color = "blue";
      } else if (i % 7 == 2) {
        color = "red";
      } else {
        color = "black";
      }
      dateDivArr.push(
        <div className="date-div">
          <Ribbon />
          <Date date={i} key={"07_" + i} color={color} />
        </div>
      );
    }
    return dateDivArr;
  };

  return <div className="dateDivArr center-div">{render()}</div>;
};

export default DateDiv;
