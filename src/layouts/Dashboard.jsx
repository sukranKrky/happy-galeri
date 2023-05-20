import React from "react";
import Podcast from "./Podcast";
import Newcomer from "./Newcomer";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Footer from "./Footer";
import Rectangle from "../img/Rectangle 1.png";

function Dashboard() {
  return (
    <div className="container ">
      <div>
        <img className="rectangle" src={Rectangle} alt="" />

        <h1 className="header1"> Çocuklar İçin sanat eğitimi </h1>

        <p className="p1">
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
