import React from "react";
import { Link } from "react-router-dom";

const GenerateList = ({ val = [] }) => {
  return (
    <ul className="subMenu">
      {val.map((data, index) => (
        <li key={index}>
          <Link to="#">{data}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GenerateList;
