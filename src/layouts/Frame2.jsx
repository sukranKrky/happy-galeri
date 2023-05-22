import React from "react";
import grup from "../img/toplum.png"
import arrow from "../img/arrow.png"
import sepet from "../img/sepet.png"
import sunum from "../img/sunum.png"
import bina from "../img/bina.png"
import arastırma from "../img/araştırma.png"
import engellı from "../img/engelli.png"


function Frame2() {
  return (
    <div className="frame2 relative  h-[60vh] top-[50px] ">
      <div className="frameTitle w-[630px] h-[35vh] mt-[100px] ml-[50px]  text-black ">
        <h1 class="absolute left-[100px] top-[135px]  font-light text-5xl leading-10 capitalize " >Ziyaret biçimini seç</h1>
        <p class="absolute left-[100px] top-48  font-light text-2xl  capitalize  ">bu muhteşem müzeyi nasıl keşfetmek istersin?</p>

      </div>
      <div className="frameRight absolute w-[220px] left-[745px] top-[50px]  ">
        <ul class="absolute">
          <li class="list-none relative mr-8 mb-14 flex items-center"><img className="icon w-6 mt-5" src={sepet} alt="" /> <span class=" absolute left-9 w-44 bottom-0">Aile ile ziyaret</span>  <img className="arrow absolute left-60 top-6 w-2" src={arrow} alt="" />        </li>
          <li class="list-none relative mr-8  mb-14 flex items-center"><img className="icon w-6 mt-5" src={grup} alt="" /> <span class=" absolute left-9 w-44 bottom-0">Grup Olarak ziyaret</span>  <img className="arrow absolute left-60 top-6 w-2"src={arrow} alt="" />        </li>
          <li class="list-none relative mr-8 mb-14 flex items-center"><img className="icon w-6 mt-5" src={arastırma} alt="" /> <span class=" absolute left-9 w-44 bottom-0">Araştırma için ziyaret</span>  <img className="arrow absolute left-60 top-6 w-2"src={arrow} alt="" />        </li>
          
        </ul>
        <ul className="ul2 absolute left-[20px]">
          <li class="list-none relative ml-80  mb-14 w-64 flex items-center"><img className="icon w-5 mt-5" src={engellı} alt="" /> <span  class=" absolute left-9 w-44 bottom-2">Engelinize göre ziyaret</span>  <img className="arrow absolute left-64 top-6 w-2" src={arrow} alt="" />        </li>
          <li class="list-none relative ml-80  mb-14 w-64 flex items-center"><img className="icon w-5  mt-5" src={sunum} alt="" /> <span class=" absolute left-9 w-54 bottom-2">Kurumsal eğitim için ziyaret</span>  <img className="arrow absolute left-64 top-6 w-2"src={arrow} alt="" />        </li>
          <li class="list-none relative ml-80  mb-14 w-64 flex items-center"><img className="icon w-5 mt-5" src={bina} alt="" /> <span class=" absolute left-9 w-54 bottom-2">Sponsor olmak için ziyaret</span>  <img className="arrow absolute left-64 top-6 w-2"src={arrow} alt="" />        </li>
          
        </ul>

      </div>

    </div>
  );
}

export default Frame2;
