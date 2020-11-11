import React from "react";
import "./quickNav.css";
const QuickNav = ({ items }) => {
  const { title, list } = items;
  return (
    <section className="quickNav">
      <h3>{title}</h3>
      <ul className="quickNav__body">
        {list.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </section>
  );
};

export default QuickNav;
