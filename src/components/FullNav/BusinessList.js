import React from "react";
import "./detailsList.css";
import GenerateList from "../MobileNav/GenerateList";
import { mobileNavData } from "../MobileNav/mobileNavData";

const {
  corporatePackages,
  enterpriseSolutions,
  gateway,
  publicSector,
} = mobileNavData;

const CorporatePackages = () => {
  return (
    <article className="detailsList">
      <h4>Corporate Packages</h4>
      <ul className="detailsList__body">
        <GenerateList val={corporatePackages} />
      </ul>
    </article>
  );
};
const EnterpriseSolutions = () => {
  return (
    <article className="detailsList">
      <h4>Enterprise Solutions</h4>
      <ul className="detailsList__body">
        <GenerateList val={enterpriseSolutions} />
      </ul>
    </article>
  );
};
const Gateway = () => {
  return (
    <article className="detailsList">
      <h4>Gateway</h4>
      <ul className="detailsList__body">
        <GenerateList val={gateway} />
      </ul>
    </article>
  );
};
const PublicSector = () => {
  return (
    <article className="detailsList">
      <h4>Public Sector</h4>
      <ul className="detailsList__body">
        <GenerateList val={publicSector} />
      </ul>
    </article>
  );
};

const BusinessList = () => {
  return (
    <section className="dataList">
      <CorporatePackages />
      <EnterpriseSolutions />
      <Gateway />
      <PublicSector />
    </section>
  );
};

export default BusinessList;
