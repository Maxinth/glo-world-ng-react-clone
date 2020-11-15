import React from "react";
import "./quickNav.css";
import { Link } from "react-router-dom";
const QuickNav = ({ items }) => {
  const { title, list } = items;
  return (
    <section className="quickNav">
      <h3>{title}</h3>
      <ul className="quickNav__body">
        {list.map((listItem) => {
          let itemDisplayed = listItem === "glo-cafe" ? "self-care" : listItem;
          return (
            <li key={listItem}>
              <Link to={`/ng/${itemDisplayed}`}>
                {listItem.replaceAll("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default QuickNav;
