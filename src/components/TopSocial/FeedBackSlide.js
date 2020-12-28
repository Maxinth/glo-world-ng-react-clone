import React from "react";

import "./feedBackSlide.css";
const FeedBackSlide = ({ feedBack, bgColor, showFeedBack }) => {
  const shiftTop = showFeedBack ? "2px" : "70px";
  const toggleOpacity = showFeedBack ? "1" : "0";
  // const topMarginFix = !showFeedBack ? "-1.2rem" : "unset";
  return (
    <div
      className="feedBackSlide"
      style={{
        backgroundColor: bgColor,
        opacity: toggleOpacity,
        top: shiftTop,
        // marginTop: topMarginFix,
      }}
    >
      {feedBack}
    </div>
  );
};

export default FeedBackSlide;

/*
====== toggleOpacity ======

The feedback slide is always on the page , its opacity is initially set to 0 - hiding it.
when showFeedBack is true due to a hover on one of the social icons, the opacity is made 1 - revealing it.



======== shiftTop =========
The feedback slide is positioned at a top offset of 70px when the opacity is 0 (hidden),
when showFeedBack is true , the top offset is changed to 30px. A transition has been added to 
the .feedBackSlide rule set in its file to smoothen out this transitions.

*/
