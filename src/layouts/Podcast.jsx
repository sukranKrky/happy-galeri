import React from "react";
import image704 from "../img/image 704.png";
import image706 from "../img/image 706.png";
import image708 from "../img/image 708.png";
import image703 from "../img/image 703.png";
import image707 from "../img/image 707.png";
import image705 from "../img/image 705.png";
import rectangl2939 from "../img/Rectangle 2939.png";

function Podcast() {
  return (
    <div className="podcast">
      <h1>Podcast</h1>
      <p>
        bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
        yüzden en iyi şekilde .
      </p>
      <label htmlFor="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </label>
      <p className="spotifay">SPOTİFAY</p>

      <img src={image704} className="img704" alt="" />
      <img src={image706} className="img706" alt="" />
      <img src={image708} className="img708" alt="" />
      <img src={image704} className="img7044" alt="" />

      <img src={image703} className="img703" alt="" />
      <img src={image707} className="img707" alt="" />
      <img src={image707} className="img7077" alt="" />

      <img src={image705} className="img705" alt="" />

      <div className="category"  >
        <ul className="listEurop" >
         
          <li className="european">
            <img src={rectangl2939} alt="" />
            <h2>EUROPEAN</h2>
            <div className="detailBox">
                <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            </div>
          
          </li>
          <li className="european">
            <img src={rectangl2939} alt="" />
            <h2>EUROPEAN</h2>
            <div className="detailBox">
                <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            </div>
          
          </li>
          <li className="european">
            <img src={rectangl2939} alt="" />
            <h2>EUROPEAN</h2>
            <div className="detailBox">
                <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            </div>
          
          </li>
          <li className="european">
            <img src={rectangl2939} alt="" />
            <h2>EUROPEAN</h2>
            <div className="detailBox">
                <p>
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
