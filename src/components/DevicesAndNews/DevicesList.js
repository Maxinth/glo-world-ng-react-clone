import React, { useState } from "react";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import { motion } from "framer-motion";
import { deviceListVariant } from "../variants/varDeviceList";
import RemoveIcon from "@material-ui/icons/Remove";

const DevicesList = ({ name, phoneImage, status, inView }) => {
  const [showImage, setShowImage] = useState(inView);
  return (
    <article className="devicesPhones" onClick={() => setShowImage(!showImage)}>
      <div
        className={`devicesPhones__inner ${
          name === "SamSung Galaxy S9" && "bt"
        }`}
      >
        <span className="devicesPhones__title">
          <PhoneIphoneOutlinedIcon /> <span>{name}</span>
        </span>

        {!showImage ? (
          <AddSharpIcon className="devicesPhones__open" />
        ) : (
          <RemoveIcon className="devicePhones__close" />
        )}
      </div>
      {showImage && (
        <motion.section
          variants={deviceListVariant}
          initial="hidden"
          animate="visible"
          className="devicesPhones__image "
        >
          <div>
            <img src={phoneImage} alt={name} />
          </div>
          <p>{status}</p>
        </motion.section>
      )}
    </article>
  );
};

export default DevicesList;
