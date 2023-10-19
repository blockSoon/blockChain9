import React from "react";

function DateArr(Year, Month) {
  let getArr = [];
  let nullArrBefore = [];
  let nullArrAfter = [];
  let getDay = 0;

  if (Month < 10) {
    getDay = new Date(`${Year}-0${Month}-01`).getDay();
  } else {
    getDay = new Date(`${Year}-${Month}-01`).getDay();
  }

  const getArrlength = new Date(Year, Month, 0).getDate();

  for (let i = 1; i < getArrlength + 1; i++) {
    getArr.push(i + " 일");
  }

  for (let j = 0; j < getDay; j++) {
    nullArrBefore.push(null);
  }

  const Arrlength = 42 - (getArr.length + nullArrBefore.length);

  for (let x = 0; x < Arrlength; x++) {
    nullArrAfter.push(null);
  }

  let Arr = [...nullArrBefore, ...getArr, ...nullArrAfter];

  return Arr.map((e) => (
    <div className="dates">
      <span>{e}</span>
    </div>
  ));
}

const Container = ({ Year, Month }) => {
  return <div className="ContainerWrap">{DateArr(Year, Month)}</div>;
};

export default Container;
