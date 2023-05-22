import React, { useState } from "react";
import { useEffect } from "react";
import imageService from "../services/imageService";

function Podcast() {

  const [image1, setimage1] = useState()
  const [image2, setimage2] = useState()
  const [image3, setimage3] = useState()
  const [image4, setimage4] = useState()
  const [image5, setimage5] = useState()
  const [image6, setimage6] = useState()
  const [image7, setimage7] = useState()
  const [image8, setimage8] = useState()
  const [image9, setimage9] = useState()
  const [image10, setimage10] = useState()



  useEffect(() => {
    let service= new imageService();
    service.getImage(3).then(response=>setimage1(response))
    service.getImage(2).then(response=>setimage2(response))
    service.getImage(5).then(response=>setimage3(response))
    service.getImage(1).then(response=>setimage4(response))
    service.getImage(4).then(response=>setimage5(response))
    service.getImage(6).then(response=>setimage6(response))
    service.getImage(7).then(response=>setimage7(response))
    service.getImage(8).then(response=>setimage8(response))
    service.getImage(9).then(response=>setimage9(response))
    service.getImage(10).then(response=>setimage10(response))
    




    
  }, [])
  




  return (
    <div class="podcast  relative w-[95vw] h-[130vh] left-8 top-[130px] bg-gradient-to-br from-gray-300 to-gray-200 rounded-3xl">
      <h1 class="absolute w-56 h-20 left-11 top-32 font-inter font-light text-5xl leading-10 text-center capitalize text-black">
        Podcast
      </h1>
      <p class="absolute w-[500px] h-20 left-20 top-48 font-inter font-light text-2xl leading-8  capitalize text-black">
        bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
        yüzden en iyi şekilde .
      </p>
      <label class="absolute w-[480px] h-12 left-20 top-72 font-inter font-normal text-sm leading-5 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </label>
      <p class="spotifay absolute w-[568px] h-6 left-20 top-[400px] font-inter font-normal text-sm leading-6 text-gray-500">
        SPOTİFAY
      </p>
      <div class=" absolute left-[738px] top-32 w-36 grid gap-2 grid-cols-1">
        <img src={image7} className="img704" alt="" />
        <img src={image5} className="img706" alt="" />
      </div>
      <div class=" absolute left-[890px] top-32 w-36 grid gap-2 grid-cols-1">
        <img src={image8} className="img708" alt="" />
        <img src={image7} className="img7044 h-[125px] w-36" alt="" />
      </div>
      <div class=" absolute left-[1050px] top-32 w-72 grid gap-3 grid-cols-2">
        <img src={image10} className="img703 col-span-2" alt="" />
        <div className=" relative inline-flex gap-4 col-span-2 ">
          <img src={image9} className="img707  w-[135px]" alt="" />
          <img src={image9} className="img7077  w-[135px]" alt="" />
        </div>

        <img src={image3} className="img705  col-span-2" alt="" />
      </div>
      <div className="category text-white ">
        <ul className="listEurop  absolute flex w-[92vw] ml-8 mt-[570px] ">
          <li className="european   m-6 w-72 h-[96px] ">
            <img class="w-80 h-96 left-36" src={image1} alt="" />
            <h2 class="absolute ml-4  top-12  font-normal text-lg leading-10 tracking-wider text-white" >EUROPEAN</h2>
            <div className="detailBox  ">
              <p class="absolute w-64 h-20 ml-3 top-80   font-light text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </li>
          <li className="european   m-6 w-72 h-[96px] ">
            <img  class="w-80 h-96 left-36"src={image2} alt="" />
            <h2 class="absolute ml-4  top-12  font-normal text-lg leading-10 tracking-wider text-white">EUROPEAN</h2>
            <div className="detailBox">
              <p class="absolute w-64 h-20 ml-3 top-80    font-light text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </li>
          <li className="european   m-6 w-72 h-[96px]">
            <img  class="w-80 h-96 left-36"src={image4} alt="" />
            <h2 class="absolute ml-4  top-12  font-normal text-lg leading-10 tracking-wider text-white">EUROPEAN</h2>
            <div className="detailBox">
              <p class="absolute w-64 h-20 ml-3 top-80  font-light text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </li>
          <li className="european   m-6 w-72 h-[96px]">
            <img  class="w-80 h-96 left-36"src={image4} alt="" />
            <h2 class="absolute ml-4  top-12  font-normal text-lg leading-10 tracking-wider text-white">EUROPEAN</h2>
            <div className="detailBox">
              <p class="absolute w-64 h-20 ml-3 top-80  font-light text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Podcast;
