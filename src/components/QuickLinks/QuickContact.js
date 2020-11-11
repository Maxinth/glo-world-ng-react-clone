import React from "react";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import PhoneInTalkRoundedIcon from "@material-ui/icons/PhoneInTalkRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
const QuickContact = () => {
  return (
    <section className="quickNav quickContact">
      <h3>Contact Us</h3>
      <ul className="quickNav__body">
        <li className="quickContact__item">
          <HomeWorkRoundedIcon />
          <p>
            Globacom Limited, Mike Adenuga Towers, 1, Mike Adenuga Close, Off
            Adeola Odeku Street, Victoria Island, Lagos. Nigeria.
          </p>
        </li>
        <li className="quickContact__item">
          <PhoneInTalkRoundedIcon />
          <p>
            Toll Free Number (For prepaid lines on the Glo network): 121. Other
            Networks: +2348050020121.
          </p>
        </li>
        <li className="quickContact__item">
          <PhoneInTalkRoundedIcon />
          <p>
            Toll Free Number (For postpaid lines on the Glo network): 200. Other
            Networks: +2348050020200.
          </p>
        </li>

        <li className="quickContact__item">
          <MailRoundedIcon />
          <a href="mailto:customercare@gloworld.com">
            customercare@gloworld.com
          </a>
        </li>
        <li className="quickContact__item">
          <MailRoundedIcon />
          <a href="mailto:corporatecare@gloworld.com">
            corporatecare@gloworld.com
          </a>
        </li>

        <li className="quickContact__item">
          <RoomRoundedIcon />
          <a href="#">Find us on map</a>
        </li>
      </ul>
    </section>
  );
};

export default QuickContact;
