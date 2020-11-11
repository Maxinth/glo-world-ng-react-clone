import React from "react";
import QuickContact from "./QuickContact";
import QuickNav from "./QuickNav";
import "./quickNav.css";
const QuickLinks = () => {
  return (
    <section className="quickLinks">
      <div className="quickLinks__content">
        <QuickNav
          items={{
            title: "Quick Links",
            list: [
              "instant top-up",
              "glo-cafe",
              "personal",
              "business",
              "vas",
              "mobile money",
              "e top-up",
            ],
          }}
        />
        <QuickContact />
        <QuickNav
          items={{
            title: "About",
            list: [
              "About Us",
              "News",
              "Careers",
              "Find a GloWorld Shop",
              "Find a Glo Zone",
              "Sponsorship",
              "Support",
            ],
          }}
        />
      </div>
    </section>
  );
};

export default QuickLinks;
