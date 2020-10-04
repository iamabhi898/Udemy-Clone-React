import React from "react";
import "./App.css";
import HeaderPopup from "./headerPopup";
import HeaderPrimary from "./headerPrimary";
import AdImage from "./adImage";
import Feature1 from "./featureDiv1";
import Feature2 from "./featureDiv2";
import Recommendations from "./recommendations";
import FillerDiv from "./fillerDiv";
import TopCategories from "./topCategories";
import BecomeInstructor from "./becomeInstructor";
import TrustedCompanies from "./trustedCompanies";
import UdemyForBusiness from "./udemyForBusiness";
import VideoAdDiv from "./videoAdDiv";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <HeaderPopup />
      <HeaderPrimary />
      <AdImage />
      <Feature1 />
      <Recommendations />
      <Feature2 />
      <FillerDiv />
      <TopCategories />
      <BecomeInstructor />
      <TrustedCompanies />
      <UdemyForBusiness />
      <VideoAdDiv />
      <Footer />
    </div>
  );
}

export default App;
