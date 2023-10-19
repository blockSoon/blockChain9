import React from "react";

const Day = () => {
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

  const dayRender = () => {
    const arr = [];
    for (let i = 0; i < dayArr.length; i++) {
      arr.push(<div className="day">{dayArr[i]}</div>);
    }
    return arr;
  };

  return <div className="day-div center-div">{dayRender()}</div>;
};

export default Day;
