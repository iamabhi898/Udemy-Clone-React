import React from "react";
import "../../components/homeContent/trustedCompanies.css";

function TrustedCompanies() {
  return (
    <div className="trustedCompanies">
      <h2 className="heading">Trusted by companies of all sizes</h2>
      <div className="companiesLogos">
        <img
          alt="booking.com"
          className="booking-com companyLogo"
          src="https://s.udemycdn.com/partner-logos/booking-logo.svg"
        ></img>
        <img
          alt="volkswagen"
          className="volkswagen companyLogo"
          src="https://s.udemycdn.com/partner-logos/volkswagen-logo.svg"
        ></img>
        <img
          alt="mercedes-benz"
          className="mercedes-benz companyLogo"
          src="https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg"
        ></img>
        <img
          alt="adidas"
          className="adidas companyLogo"
          src="https://s.udemycdn.com/partner-logos/adidas-logo.svg"
        ></img>
        <img
          alt="eventbrite"
          className="eventbrite companyLogo"
          src="https://s.udemycdn.com/partner-logos/eventbrite-logo.svg"
        ></img>
      </div>
    </div>
  );
}

export default TrustedCompanies;
