import React, { useState } from "react";

// 요일 하나하나의 값을 가지는 컴포넌트
const Week = ({ week3 }) => {
  console.log(week3);
  return <div className={"week " + week3}>{week3}</div>;
};

// 각 요일을 담은 컴포넌트
const Weeks = () => {
  const week2 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const weekR = [];
  for (let i = 0; i < week2.length; i++) {
    console.log(week2[i]);
    weekR.push(<Week week3={week2[i]} />);
  }
  //   console.log(weekR);
  return <div className="Weeks">{weekR}</div>;
};

// 각 날짜를 담는 컴포넌트
const Day = ({ day, color }) => {
  return (
    <div className={"day " + color}>
      {day}
      <Bar color={color} />
    </div>
  );
};

// 각 날짜마다 리본을 그리는 컴포넌트
const Bar = ({ color }) => {
  return <div className={"bar " + color}></div>;
};

// 각 날짜를 담은 컴포넌트
const Days = () => {
  const day2 = [];
  day2.push(
    <>
      <div className="day none"></div>
      <div className="day none"></div>
      <div className="day none"></div>
      <div className="day none"></div>
      <div className="day none"></div>
      <div className="day none"></div>
    </>
  );
  for (let i = 1; i <= 31; i++) {
    const color = i % 7;
    if (color == 1) {
      day2.push(<Day day={i} color={"blue"}></Day>);
    } else if (color == 2) {
      day2.push(<Day day={i} color={"red"}></Day>);
    } else {
      day2.push(<Day day={i} color={"black"}></Day>);
    }
  }

  return <div className="Days">{day2}</div>;
};

// 캘린더 날짜를 담은 컴포넌트
const Body = () => {
  return (
    <div className="bodys">
      <Weeks />
      <Days />
    </div>
  );
};

export default Body;
