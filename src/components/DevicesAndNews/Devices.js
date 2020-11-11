import React from "react";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import "./devices.css";
import DevicesList from "./DevicesList";
import deviceData from "./devicesListData";

const Devices = () => {
  return (
    <section className="devices">
      <h3 className="devices__heading">
        <PhoneAndroidRoundedIcon /> <span>Devices & Mega Deals</span> <hr />
      </h3>
      <p className="devices__text">
        Enjoy great SIM and data plan deals and special offers bundled with any
        smartphone of your choice at any Gloworld Shop. Buy any featured device
        and get 6 months to 1 year free internet.
      </p>
      {deviceData.map((phone) => (
        <DevicesList {...phone} key={phone.name} />
      ))}
    </section>
  );
};

export default Devices;
