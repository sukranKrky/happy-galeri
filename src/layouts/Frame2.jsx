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
    <div className="frame2">
      <div className="frameTitle">
        <h1>Ziyaret biçimini seç</h1>
        <p>bu muhteşem müzeyi nasıl keşfetmek istersin?</p>
      </div>
      <div className="frameRight">
        <ul>
          <li><img className="icon" src={sepet} alt="" /> <span>Aile ile ziyaret</span>  <img className="arrow" src={arrow} alt="" />        </li>
          <li><img className="icon" src={grup} alt="" /> <span>Grup Olarak ziyaret</span>  <img className="arrow"src={arrow} alt="" />        </li>
          <li><img className="icon" src={arastırma} alt="" /> <span>Araştırma için ziyaret</span>  <img className="arrow"src={arrow} alt="" />        </li>
          
        </ul>
        <ul className="ul2">
          <li><img className="icon" src={engellı} alt="" /> <span>Engelinize göre ziyaret</span>  <img className="arrow" src={arrow} alt="" />        </li>
          <li><img className="icon" src={sunum} alt="" /> <span>Kurumsal eğitim için ziyaret</span>  <img className="arrow"src={arrow} alt="" />        </li>
          <li><img className="icon" src={bina} alt="" /> <span>Sponsor olmak için ziyaret</span>  <img className="arrow"src={arrow} alt="" />        </li>
          
        </ul>

      </div>

    </div>
  );
}

export default Frame2;
