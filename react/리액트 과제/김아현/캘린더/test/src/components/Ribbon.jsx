import React from "react";

const Ribbon = ({ last = false }) => {
  let cname = "";
  if (last) {
    cname = "ribbon last";
  } else {
    cname = "ribbon";
  }
  return <div className={cname}></div>;
};

export default Ribbon;
