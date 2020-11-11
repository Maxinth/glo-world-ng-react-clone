import React, { useEffect, useState } from "react";
import ChromeReaderModeSharpIcon from "@material-ui/icons/ChromeReaderModeSharp";
import "./latestNews.css";
import data from "./latestNewsData";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
const LatestNews = () => {
  const [index, setIndex] = useState(0);
  const [block, setBlock] = useState(data[index]);
  const { date, firstParagraph, secondParagraph } = block;

  useEffect(() => {
    setBlock(data[index]);
  }, [index]);

  const increaseIndex = () => {
    if (index < 2) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };

  const decreaseIndex = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex((index) => index - 1);
    }
  };

  return (
    <section className="latestNews">
      <h3 className="latestNews__head">
        <ChromeReaderModeSharpIcon /> <span>Latest News</span> <hr />
        <span className="latestNews__nav">
          <ChevronLeftSharpIcon onClick={decreaseIndex} />
          <ChevronRightSharpIcon onClick={increaseIndex} />
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
