import React from "react";
import "../../components/homeContent/udemyForBusiness.css";

function UdemyForBusiness() {
  return (
    <div className="udemyForBusiness">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
        <h2 className="heading">Udemy for Business</h2>
        <p className="about">
          Get unlimited access to 4,000+ of Udemy's top courses for your team.
        </p>
        <div className="startTeching button">Get Udemy for Business</div>
      </div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"
        alt="instructorImg"
        className="Img"
      ></img>
    </div>
  );
}

export default UdemyForBusiness;
