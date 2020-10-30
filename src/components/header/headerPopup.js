import React, { useState } from "react";
import "../../components/header/headerPopup.css";
import ClearIcon from "@material-ui/icons/Clear";

function HeaderPopup() {
  const [hidePopup, setHidePopup] = useState(false);

  return (
    <div className={`headerPopup ${hidePopup ? "hide" : ""}`}>
      <div className="dialogueBox">
        <span className="title">Start Solving your challenge now </span>
        <span className="offer">
          | Enroll today and learn risk-free with our 30-day money-back
          guarantee.
        </span>
      </div>
      <div
        className="cross"
        onClick={() => {
          setHidePopup(true);
        }}
      >
        <ClearIcon className="popupClearIcon" />
      </div>
    </div>
  );
}

export default HeaderPopup;
