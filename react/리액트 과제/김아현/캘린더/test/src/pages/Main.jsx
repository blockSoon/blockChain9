import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import ToggleBtn from "../components/ToggleBtn";

const Main = () => {

  return (
    <>
      <ToggleBtn />
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default Main;
