import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FeedBackSlide from "./FeedBackSlide";
import { motion } from "framer-motion";
import { iconVariant } from "../variants/varTopSocial";
import "./topSocial.css";

let feedBack, bgColor;
const TopSocial = () => {
  const [showFeedBack, setShowFeedBack] = useState(false);

  const FeedBackInView = (e) => {
    setShowFeedBack(true);

    // render message based on target
    switch (e.target.id) {
      case "email":
        feedBack = "email us ";
        bgColor = "#666666";
        break;
      case "twitter":
        feedBack = "follow us on twitter";
        bgColor = "#66c2ff";

        break;
      case "facebook":
        feedBack = "like us on facebook";
        bgColor = "#1445ca";
        break;
      case "linked-in":
        feedBack = "follow us on linkedin";
        bgColor = " brown";
        break;
      case "instagram":
        feedBack = "follow us on instagram";
        bgColor = "#7a7575";
        break;
      case "youTube":
        feedBack = "subscribe on YouTube";
        bgColor = "#e91515";
        break;
      default:
        console.log("it doesn't works");
        break;
    }
    return feedBack;
  };
  // console.log(feedBack);
  return (
    <>
      <section className="topSocial">
        <header className="topSocial__container">
          <div className="socialLeft">
            <span>Nigeria </span>
            <span className="socialLeft__inner">
              <SearchIcon /> <input type="search" placeholder="Search" />
            </span>
          </div>

          <div className="socialRight">
            <motion.span
              variant={iconVariant("red")}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <MailIcon
                onMouseEnter={(e) => FeedBackInView(e)}
                onMouseLeave={() => setShowFeedBack(false)}
                id="email"
              />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <TwitterIcon
                onMouseEnter={(e) => FeedBackInView(e)}
                onMouseLeave={() => setShowFeedBack(false)}
                id="twitter"
              />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <FacebookIcon
                onMouseEnter={(e) => FeedBackInView(e)}
                onMouseLeave={() => setShowFeedBack(false)}
                id="facebook"
              />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <LinkedInIcon
                onMouseEnter={(e) => FeedBackInView(e)}
                onMouseLeave={() => setShowFeedBack(false)}
                id="linked-in"
              />
            </motion.span>

            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <InstagramIcon
                onMouseEnter={(e) => FeedBackInView(e)}
                onMouseLeave={() => setShowFeedBack(false)}
                id="instagram"
              />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <YouTubeIcon
                onMouseEnter={(e) => FeedBackInView(e)}
                onMouseLeave={() => setShowFeedBack(false)}
                id="youTube"
              />
            </motion.span>
          </div>
        </header>
      </section>
      {showFeedBack && <FeedBackSlide feedBack={feedBack} bgColor={bgColor} />}
    </>
  );
};

export default TopSocial;
