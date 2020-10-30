import React from 'react';
import AdImage from "../components/homeContent/adImage";
import Feature1 from "../components/homeContent/featureDiv/featureDiv1";
import Feature2 from "../components/homeContent/featureDiv/featureDiv2";
import Recommendations from "../components/homeContent/recommendations/recommendations";
import FillerDiv from "../components/homeContent/fillerDiv";
import TopCategories from "../components/homeContent/topCategories/topCategories";
import BecomeInstructor from "../components/homeContent/becomeInstructor";
import TrustedCompanies from "../components/homeContent/trustedCompanies";
import UdemyForBusiness from "../components/homeContent/udemyForBusiness";
import VideoAdDiv from "../components/homeContent/videoAdDiv";

function HomeContent() {
    return (
        <div>
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
        </div>
    );
}

export default HomeContent;