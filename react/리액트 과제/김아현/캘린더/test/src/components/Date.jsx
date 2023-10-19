import React from "react";

const Date = ({ date, last = false, color }) => {
  if (last) {
    return <div className={"date last-date " + color}>{date}</div>;
  }
  return <div className={"date " + color}>{date}</div>;
};

export default Date;
