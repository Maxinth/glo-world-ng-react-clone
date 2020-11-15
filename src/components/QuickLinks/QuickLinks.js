import React from "react";
import QuickContact from "./QuickContact";
import QuickNav from "./QuickNav";
import "./quickNav.css";
import Footer from "../Footer/Footer";

const QuickLinks = () => {
  return (
    <>
      <section className="quickLinks">
        <div className="quickLinks__content">
          <QuickNav
            items={{
              title: "Quick Links",
              list: [
                "instant-top-up",
                "glo-cafe",
                "personal",
                "business",
                "vas",
                "mobile-money",
                "e-top-up",
              ],
            }}
          />
          <QuickContact />
          <QuickNav
            items={{
              title: "About",
              list: [
                "about-us",
                "news",
                "careers",
                "find-a-GloWorld-Shop",
                "find-a-glo-zone",
                "sponsorship",
                "support",
              ],
            }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QuickLinks;
