import React from "react";
import Title from "./Title";
import HamBtn from "./HamBtn";
import Day from "./Day";

const Header = () => {
  return (
    <div className="header">
      <Title title="7월" />
      <HamBtn />
      <Day />
    </div>
  );
};

export default Header;
