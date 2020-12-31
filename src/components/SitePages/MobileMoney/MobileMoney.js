import React from "react";
import "./mobileMoney.css";
import SharedHeader from "../SharedContent/SharedHeader";
import mobileMoneyImg from "../../../assets/mobilemoney.jpg";
import { Link } from "react-router-dom";
import bankImg from "../../../assets/partner-banks.jpg";
import { motion } from "framer-motion";
import { pageEntryVariant, variantProps } from "../../variants/page";
import useDocumentTitle from "../UseTitle";

const MobileMoney = () => {
  useDocumentTitle("Mobile Money");
  return (
    <motion.section
      className="mobileMoney"
      variants={pageEntryVariant}
      {...variantProps}
    >
      <SharedHeader heading="Mobile Money" />
      <section className="shared__contentContainer">
        <section className="mobileMoney__imgContainer">
          <img src={mobileMoneyImg} alt="top up" />
        </section>
        <section className="mobileMoney__details">
          <p>
            <Link to="/ng/business/mobile-money/glo-xchange">Definition</Link>
          </p>
          <article className="detail">
            <h4>Mobile Money</h4>
            <p>
              “Mobile Money is a service whereby customers use their mobile
              phone device to send and receive monetary value – or more simply
              put, to transfer money electronically from one person to another
              using a mobile phone as Mobile Wallet”.
            </p>
          </article>
          <article className="detail">
            <h4>Glo Xchange</h4>
            <p>
              Is the First Super-Agency Network for licensed mobile money
              operators in Nigeria brand named the “Glo Xchange”. This is
              Globacoms’ Mobile Money Agent Network of outlets spread across the
              country where customers visit to carry out mobile money
              transactions such as customer registration, cash –in , cash-out,
              airtime purchase, bill payments etc
            </p>
          </article>
        </section>
        <ul className="mobileMoney__nav">
          <li>
            <Link to="/ng/business/mobile-money/cashless-and-financial-inclusion-opportunities">
              Cashless and Financial Inclusion Opportunities
            </Link>
          </li>
          <li>
            <Link to="/ng/business/mobile-money/how-it-works">
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/ng/business/mobile-money/benefits">Benefits</Link>
          </li>
        </ul>
        <div className="mobileMoney__AgentContainer">
          <section className="mobileMoney__agent">
            <h3>Mobile Money Agent</h3>
            <ul className="mobileMoney__AgentNav">
              <li>
                <Link to="/ng/business/mobile-money/mobile-money-agents">
                  Who is a Mobile Money Agent
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/why-become-a-mobile-money-agent">
                  Why become a Mobile Money Agent
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/become-an-agent">
                  How to become a Mobile Money Agent
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/become-an-agent">
                  Click to start the Application
                </Link>
              </li>
            </ul>
          </section>
          <section className="mobileMoney__agent">
            <h3>Becoming A Mobile Money Agent</h3>
            <ul className="mobileMoney__AgentNav">
              <li>
                <Link to="/ng/business/mobile-money/opportunity-to-increase-tarrif-and-revenue">
                  Opportunity to increase tarrif and revenue
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/global-network-and-brand">
                  Global network and brand
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/ongoing-support">
                  Ongoing support
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/regulatory-compliance">
                  Regulatory compliance
                </Link>
              </li>
              <li>
                <Link to="/ng/business/mobile-money/">
                  Click to start the Application process
                </Link>
              </li>
            </ul>
          </section>
          <section className="mobileMoney__banks">
            <h1>Our Mobile Money Partners</h1>
            <img src={bankImg} alt="mobile money partners" />
          </section>
        </div>
      </section>
    </motion.section>
  );
};

export default MobileMoney;
