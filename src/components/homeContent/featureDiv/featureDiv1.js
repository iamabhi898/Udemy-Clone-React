import React from "react";
import "./featureDiv1.css";
import FeatureCard from "./featureCard";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import StarsIcon from "@material-ui/icons/Star";

function Feature1() {
  return (
    <div className="featureDiv1">
      <FeatureCard
        icon={<OndemandVideoIcon className="icon" />}
        heading={"130,000 online courses"}
        para={"Enjoy a variety of fresh topics"}
      />
      <FeatureCard
        icon={<StarsIcon className="icon" />}
        heading={"Expert instruction"}
        para={"Find the right instructor for you"}
      />
      <FeatureCard
        icon={<AllInclusiveIcon className="icon" />}
        heading={"Lifetime access"}
        para={"Learn on your schedule"}
      />
    </div>
  );
}

export default Feature1;
