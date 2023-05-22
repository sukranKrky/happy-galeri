import React from "react";
import leftBtn from "../img/ChevronButton.png";
import rightBtn from "../img/rightButton.png";

function Newcomer() {
  return (
    <div className="newcomer relative w-[115%] h-[32rem]  bg-red-950 ">
      <h1 class="relative w-[520px] h-164 top-24 left-[480px]  font-light text-[50px] text-center capitalize text-white">Yeni gelen sanat eserlerini inceleyin</h1>
      <p  class="absolute w-[226px] h-49 left-20 top-[370px]  font-light text-2xl leading-12 text-center text-white">Özel Galerimiz</p>
      <div class="absolute left-[1200px] w-[125px] h-8 top-[370px]">
        <button className="btnLeft flex p-4 absolute w-3 h-3 bg-white rounded-full border-0">
          <img className="btnImg absolute right-3 ml-2 w-2 h-3 top-[0.6rem] z-20 " src={leftBtn} alt="" />
        </button>
        <div className="Dots relative inline-block w-[7rem] h-9 top-[-13px] ml-[31px] pt-4">
        <button className="active inline-block w-2 h-2 bg-white  rounded-full m-1 p-0 border-0 left-20"></button>
        <button className="Dots_dot  inline-block w-2 h-2 bg-white bg-opacity-50 rounded-full m-1 p-0 border-0 left-20"></button>
        <button className="Dots_dot  inline-block w-2 h-2 bg-white bg-opacity-50 rounded-full m-1 p-0 border-0 left-20"></button>
        <button className="Dots_dot  inline-block w-2 h-2 bg-white bg-opacity-50 rounded-full m-1 p-0 border-0 left-20"></button>
        <button className="Dots_dot  inline-block w-2 h-2 bg-white bg-opacity-50 rounded-full m-1 p-0 border-0 left-20"></button>
        <button className="Dots_dot  inline-block w-2 h-2 bg-white bg-opacity-50 rounded-full m-1 p-0 border-0 left-20"></button>
        
        </div>
        <button className="btnRight z-10  p-4 absolute  w-4 h-4 left-32 top-0 bg-white rounded-full border-0"/>
         
        
         <img  className="btnImg absolute left-[8rem] ml-3 w-2 h-3 top-[0.6rem] z-20 "  src={rightBtn} alt="" />
      </div>
    </div>
  );
}

export default Newcomer;
