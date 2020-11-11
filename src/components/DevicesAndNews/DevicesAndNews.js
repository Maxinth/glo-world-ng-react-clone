import React from "react";
import Devices from "./Devices";
import LatestNews from "./LatestNews";
import "./devicesAndNews.css";

const DevicesAndNews = () => {
  return (
    <div className="devicesAndNews">
      <Devices />
      <LatestNews />
    </div>
  );
};

export default DevicesAndNews;
