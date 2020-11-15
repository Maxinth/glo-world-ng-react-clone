import React from "react";
import GenerateList from "../MobileNav/GenerateList";
import { mobileNavData } from "../MobileNav/mobileNavData";
import "./detailsList.css";
const { lifestyle } = mobileNavData;

const LifeStyle = () => {
  return (
    <article className="detailsList ">
      <h4>Lifestyle</h4>
      <ul className="detailsList__body ">
        <GenerateList val={lifestyle} />
      </ul>
    </article>
  );
};

const Vas = ({ title, detail }) => {
  return (
    <div className="vas">
      <h3>{title}</h3>
      <h4>{detail}</h4>
    </div>
  );
};
const VasList = () => {
  return (
    <section className="detailsList noLeftBorder vasList">
      <LifeStyle />

      <Vas title="entertainment" detail="Glo GameBox" />
      <Vas title="storage" detail="Glo Cloud" />
      <Vas title="education" detail="Busuu" />
    </section>
  );
};

export default VasList;
