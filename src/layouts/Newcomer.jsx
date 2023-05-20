import React from "react";
import leftBtn from "../img/ChevronButton.png";
import rightBtn from "../img/rightButton.png";

function Newcomer() {
  return (
    <div className="newcomer">
      <h1>Yeni gelen sanat eserlerini inceleyin</h1>
      <p>Özel Galerimiz</p>
      <div className="buttonBlock">
        <button className="btnLeft">
          <img className="btnImg" src={leftBtn} alt="" />
        </button>
        <div className="Dots">
        <button className="active"></button>
        <button className="Dots_dot"></button>
        <button className="Dots_dot"></button>
        <button className="Dots_dot"></button>
        <button className="Dots_dot"></button>
        <button className="Dots_dot"></button>

        </div>
        <button className="btnRight">
          <img  className="btnImg" src={rightBtn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Newcomer;
