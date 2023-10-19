import Body from "./Body";

import React, { useState, useEffect } from "react";

// 상태값을 하나 지정해주고
// 상태 값이 변함에 따라 헤더와 푸터의 display 값을 변경해준다.

const ViewBtn = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    console.log("componentDidMount, componentDidUpdate");
    if (toggle == true) {
      document.querySelector(".header").style.display = "flex";
      document.querySelector(".bodys").style.display = "block";
    } else {
      document.querySelector(".header").style.display = "none";
      document.querySelector(".bodys").style.display = "none";
    }
  }, [toggle]);

  function Toggle() {
    // 버튼 클릭 시, 캘린더 영역 토글 동작
    console.log("나 캘린더 토글 버튼");
    setToggle(!toggle);
  }

  return (
    <button onClick={Toggle} className="Btn">
      Calendar
    </button>
  );
};

export default ViewBtn;
