import React from "react";
import "./detailsList.css";
import GenerateList from "../MobileNav/GenerateList";
import { mobileNavData } from "../MobileNav/mobileNavData";

const {
  voiceData,
  dataPackages,
  devices,
  roaming,
  specialPacks,
} = mobileNavData;

const DataDetails = () => {
  return (
    <article className="detailsList">
      <h4>Data</h4>
      <ul className="detailsList__body">
        <GenerateList val={voiceData} />
      </ul>
    </article>
  );
};

const VoiceDetails = () => {
  return (
    <article className="detailsList noLeftBorder">
      <h4>Voice/SMS</h4>
      <ul className="detailsList__body">
        <GenerateList val={dataPackages} />
      </ul>
    </article>
  );
};

const DevicesList = () => {
  return (
    <article className="detailsList">
      <h4>Phones</h4>
      <ul className="detailsList__body">
        <GenerateList val={devices} />
      </ul>
    </article>
  );
};

const RoamingList = () => {
  return (
    <article className="detailsList">
      <h4>Roaming</h4>
      <ul className="detailsList__body">
        <GenerateList val={roaming} />
      </ul>
    </article>
  );
};

const SpecialPacksList = () => {
  return (
    <article className="detailsList">
      <h4>Special Packs and Offers</h4>
      <ul className="detailsList__body">
        <GenerateList val={specialPacks} />
      </ul>
    </article>
  );
};

const DetailsList = () => {
  return (
    <section className="dataList">
      <VoiceDetails />
      <DataDetails />
      <DevicesList />
      <RoamingList />
      <SpecialPacksList />
    </section>
  );
};

export { DetailsList };
