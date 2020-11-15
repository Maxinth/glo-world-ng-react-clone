import React, { useState, useEffect, useCallback } from "react";
// import testImage from "../../assets/maxresdefault.jpg";
import "./slideShow.css";
import { useLocation } from "react-router-dom";
import slideData from "./slideShowData";
const SlideShow = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [imgShown, setImageShown] = useState(slideData[index]);
  // console.log(slideData);
  const location = useLocation();

  const afterTimeOut = useCallback(() => {
    if (index < 3) {
      return setIndex(index + 1);
    } else {
      return setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      afterTimeOut();
      console.log(imgShown);
      setImageShown(slideData[index]);
    }, 7000);
  });

  useEffect(() => {
    slideData.map((img) => console.log(img));
  }, []);
  return (
    <div className="slideShow">
      <div
        className="slideShow__imgContainer"
        style={{ height: `${location.pathname !== "/ng" ? "unset" : "400px"}` }}
      >
        {/* show the image only when the homePage is visited */}
        {location.pathname === "/ng" && <img src={imgShown} alt="testImage" />}
        {children}
      </div>
    </div>
  );
};

export default SlideShow;
