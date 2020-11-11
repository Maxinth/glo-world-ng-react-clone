import React from "react";
import data from "./serviceData";
import Service from "./Service";
// import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import "./services.css";

const Services = () => {
  return (
    <section className="services">
      {data.map((datum) => (
        <Service {...datum} key={datum.firstLink} />
      ))}
    </section>
  );
};

export default Services;
