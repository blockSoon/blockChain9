import React, { useEffect, useState } from "react";
import Container from "../components/Container";

const Header = () => {
  let getYear = new Date().getFullYear();
  let getMonth = new Date().getMonth() + 1;

  const [active, setActive] = useState(false);

  useEffect(() => {}, [active]);

  function ContainerOnOff() {
    const ContainerWrap = document.querySelector(".ContainerWrap");
    if (!active) {
      ContainerWrap.classList.add("active");
      setActive(true);
    } else {
      ContainerWrap.classList.remove("active");
      setActive(false);
    }
  }

  function DrawDays() {
    const Days = ["일", "월", "화", "수", "목", "금", "토"];
    return Days.map((days) => (
      <div className="days">
        <span>{days}</span>
      </div>
    ));
  }

  return (
    <div className="HeaderWrap">
      <div className="HeaderTop">
        <div className="btnBox">
          <div className="redBtn"></div>
          <div className="yellowBtn"></div>
          <div className="greenBtn"></div>
        </div>
      </div>
      <div className="HeaderMiddle">
        <div className="title">
          <span>
            {getYear}년 {getMonth}월
          </span>
        </div>
        <div className="hamber" onClick={ContainerOnOff}>
          <span className="hamberSpan"></span>
        </div>
      </div>
      <div className="HeaderBottom">
        <div className="BottomWrap">{DrawDays()}</div>
      </div>
      <Container Year={getYear} Month={getMonth} />
    </div>
  );
};

export { Header };
