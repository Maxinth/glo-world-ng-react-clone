import React from "react";
import "./moreDetails.css";
import { DetailsList } from "./DetailsList";
import BusinessList from "./BusinessList";
import VasList from "./VasList";

const MoreDetails = ({ personal, business, vas }) => {
  return (
    <section
      className={`moreDetails ${personal || business || vas ? "show" : "hide"}`}
    >
      {personal && <DetailsList />}
      {business && <BusinessList />}
      {vas && <VasList />}
    </section>
  );
};

export default MoreDetails;
