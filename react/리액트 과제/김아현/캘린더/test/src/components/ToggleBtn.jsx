import React, { useEffect, useState } from "react";

const ToggleBtn = () => {
  const [active, setActive] = useState(false);

  const calendarToggle = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      document.querySelector(".container").classList.add("active");
      document.querySelector(".toggle-btn").innerText = "닫기";
    } else {
      document.querySelector(".container").classList.remove("active");
      document.querySelector(".toggle-btn").innerText = "달력 보기";
    }
  }, [active]);

  return (
    <button className="toggle-btn" onClick={calendarToggle}>
      토글
    </button>
  );
};
export default ToggleBtn;
