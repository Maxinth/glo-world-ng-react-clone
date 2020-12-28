import React, { useEffect, useState, useCallback } from "react";
import ChromeReaderModeSharpIcon from "@material-ui/icons/ChromeReaderModeSharp";
import "./latestNews.css";
import data from "./latestNewsData";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
const LatestNews = () => {
  const [index, setIndex] = useState(0);
  const [block, setBlock] = useState(data[index]);
  const { date, firstParagraph, secondParagraph } = block;

  const increaseIndex = useCallback(() => {
    if (index >= data.length - 1) {
      return setIndex(0);
    } else {
      return setIndex((index) => index + 1);
    }
  }, [index]);

  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  };

  // useEffect to automatically change the index (in this case - increase it every 5s)
  useEffect(() => {
    let slider = setInterval(() => {
      increaseIndex(); // or decreaseIndex depending on the direction you wish to go
    }, 5000);
    // console.log(`current index = ${index}`);
    return () => {
      clearInterval(slider);
    };
  }, [index, increaseIndex]);

  // final useEffect to set the block either due to click or the interval of 5s
  useEffect(() => {
    setBlock(data[index]);
  }, [index]);

  return (
    <section className="latestNews">
      <h3 className="latestNews__head">
        <ChromeReaderModeSharpIcon /> <span>Latest News</span> <hr />
        <span className="latestNews__nav">
          <button onClick={decreaseIndex} className="latestNews__btn">
            <ChevronLeftSharpIcon />
          </button>
          <button onClick={increaseIndex} className="latestNews__btn">
            <ChevronRightSharpIcon />
          </button>
        </span>
      </h3>
      <div className="latestNews__now">
        <h6>{date}</h6>
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
      </div>
    </section>
  );
};

export default LatestNews;
