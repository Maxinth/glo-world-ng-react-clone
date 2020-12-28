import React, { useState, useEffect } from "react";
// import testImage from "../../assets/maxresdefault.jpg";
import "./slideShow.css";
import { useLocation } from "react-router-dom";
import slideData from "./slideShowData";
const SlideShow = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [data] = useState(slideData);

  const location = useLocation();

  useEffect(() => {
    const lastIndex = slideData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // run every five 5mins and consult the first useEffect to determine what gets displayed

  // NEW IMAGES ARE CREATED EACH TIME - FIX THIS

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="slideShow">
      <div
        className="slideShow__imgContainer"
        style={{ height: `${location.pathname !== "/ng" ? "unset" : "400px"}` }}
      >
        {/* show the image only when the homePage is visited */}
        {location.pathname === "/ng" && (
          <section className="slideShow__slides">
            {data.map((img, slideIndex) => {
              // const { img, id, title, goTo } = slide;
              let position = "nextSlide";
              if (slideIndex === index) {
                position = "activeSlide";
              }
              if (
                slideIndex === index - 1 ||
                (index === 0 && slideIndex === data.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article
                  className={`slideShow__slideImg ${position}`}
                  key={slideIndex}
                >
                  <img src={img} alt="slideShow" />
                  {/* <h1>hello</h1> */}
                </article>
              );
            })}
          </section>
        )}
        {children}
      </div>
    </div>
  );
};

export default SlideShow;
