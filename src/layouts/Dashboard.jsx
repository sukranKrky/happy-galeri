import React, { useEffect, useState } from "react";
import Podcast from "./Podcast";
import Newcomer from "./Newcomer";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Footer from "./Footer";
import Rectangle from "../img/Rectangle 1.png";

import axios from 'axios';

function Dashboard() {
//   const [data, setData]= useState()



//   useEffect(()=>{
//     axios.get("https://w3yz.com/api/ch#/data/productsklmklm")
//     .then(response => setData(response))
//     .catch(err=>console.log( {err}))
//   },[])
// console.log(data);



  return (
    <div class="container relative  h-3/4   ">
      <div>
        <img class="rectangle  relative  h-600 left-28 top-0 rounded-b-lg  " src={Rectangle} alt="" />

        <h1 class=" absolute w-2/5 h-24 left-48 top-52 font-normal text-5xl leading-snug capitalize text-white"> Çocuklar İçin sanat eğitimi </h1>

        <p class=" absolute w-5/12 h-28 left-48 top-96  font-light text-2xl  leading-8 capitalize text-white ">
          Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
          çocuklarınızla yaratın ve keşfedin
        </p>
      </div>
      <Frame1 />
      <Newcomer />
      <Podcast />
      <Frame2 />
   
    </div>
  );
}

export default Dashboard;
