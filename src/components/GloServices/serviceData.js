import React from "react";
import PhoneEnabledSharpIcon from "@material-ui/icons/PhoneEnabledSharp";
import LocalAtmSharpIcon from "@material-ui/icons/LocalAtmSharp";
import WifiSharpIcon from "@material-ui/icons/WifiSharp";
import ShareSharpIcon from "@material-ui/icons/ShareSharp";
import CardGiftcardSharpIcon from "@material-ui/icons/CardGiftcardSharp";
import LoopSharpIcon from "@material-ui/icons/LoopSharp";

export default [
  {
    icon: <PhoneEnabledSharpIcon />,
    goTo: "/ng/login",
    firstLink: "Instant Top-Up",
    info: ` Recharge any Glo number from your mobile or desktop device with your
            local/intl credit/debit cards`,
    finalLinkText: "Top-Up Now",
  },
  {
    icon: <WifiSharpIcon />,
    goTo: "/ng/personal/data/data-plans",
    firstLink: "Buy Data",
    info: ` Buy from our variety of unmatched plans 
    to enjoy superfast speed that gives you the unfair advantage`,
    finalLinkText: "Buy Now",
  },
  {
    icon: <LocalAtmSharpIcon />,
    goTo: "/ng/vas/lifestyle/glo-borrow-me-data",
    firstLink: "Borrow Data",
    info: ` Buy from our variety of unmatched plans 
    to enjoy superfast speed that gives you the unfair advantage`,
    finalLinkText: "Borrow Now",
  },
  {
    icon: <ShareSharpIcon />,
    goTo: "/personal/data/data-sharing",
    firstLink: "Share Data",
    info: ` You can now share your data plans online
     with friends and family by simply clicking on this link`,
    finalLinkText: "Share Now",
  },
  {
    icon: <CardGiftcardSharpIcon />,
    goTo: "/",
    firstLink: "Gift Data",
    info: ` Put a smile on someone's face today, "Gift" a
     Glo data plan to show you care. You'll thank us later`,
    finalLinkText: "Gift Now",
  },
  {
    icon: <LoopSharpIcon />,
    goTo: "/ng/personal/voice-sms/easyshare",
    firstLink: " Easy Share",
    info: ` Send Glo airtime from your 
    current balance to anyone on the Glo network instantly at no cost`,
    finalLinkText: "Share Now",
  },
];
