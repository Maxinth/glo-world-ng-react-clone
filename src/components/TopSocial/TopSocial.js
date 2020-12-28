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

  const FeedBackInView = (id) => {
    setShowFeedBack(true);

    // render message based on target
    switch (id) {
      case "email":
        feedBack = "email us ";
        bgColor = "var(--glo-green)";
        break;
      case "twitter":
        feedBack = "follow us on twitter";
        // bgColor = "#66c2ff";
        bgColor = "#00acee";
        break;
      case "facebook":
        feedBack = "like us on facebook";
        bgColor = "#3b5998";
        break;
      case "linked-in":
        feedBack = "follow us on linkedin";
        bgColor = " #0E76A8";
        break;
      case "instagram":
        feedBack = "follow us on instagram";
        bgColor = "purple";
        break;
      case "youTube":
        feedBack = "subscribe on YouTube";
        bgColor = "#C4302B";
        break;
      default:
        console.log("it doesn't work");
        break;
    }
    console.log(`feedback = ${feedBack}, background = ${bgColor}`);
    return feedBack;
  };

  // function to reduce code duplication on prop event Handlers - see 149(comments)
  const mouseEnterAndLeave = (item) => ({
    onMouseEnter: () => FeedBackInView(item),
    onMouseLeave: () => setShowFeedBack(false),
  });

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
          {/* {showFeedBack && (
          <FeedBackSlide
            feedBack={feedBack}
            bgColor={bgColor}
            showFeedBack={showFeedBack}
          />
  )}  */}
          <div className="socialRight">
            <motion.span
              variant={iconVariant("red")}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <MailIcon
                // onMouseEnter={() => FeedBackInView("email")}
                // onMouseLeave={() => setShowFeedBack(false)}
                {...mouseEnterAndLeave("email")}
                id="email"
              />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <TwitterIcon {...mouseEnterAndLeave("twitter")} id="twitter" />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <FacebookIcon {...mouseEnterAndLeave("facebook")} id="facebook" />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <LinkedInIcon
                {...mouseEnterAndLeave("linked-in")}
                id="linked-in"
              />
            </motion.span>

            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <InstagramIcon
                {...mouseEnterAndLeave("instagram")}
                id="instagram"
              />
            </motion.span>
            <motion.span
              variant={iconVariant}
              initial={showFeedBack && "hidden"}
              animate="visible"
            >
              <YouTubeIcon {...mouseEnterAndLeave("youTube")} id="youTube" />
            </motion.span>
          </div>
        </header>
      </section>
      {/* {showFeedBack && ( */}
      <FeedBackSlide
        feedBack={feedBack}
        bgColor={bgColor}
        showFeedBack={showFeedBack}
      />
      {/* )} */}
    </>
  );
};

export default TopSocial;

/*

========= LINE 56 REDIRECTS HERE =======

{...mouseEnterAndLeave(item)} when called with the item in question returns and object whose
 items are spread and helps in not having to write
lines 154 and 155 on ALL on the items as handlers for the mouseEnter and mouseLeave events

 onMouseEnter={() => FeedBackInView("email")} --- this scenario takes 'email' as the item in question.
 onMouseLeave={() => setShowFeedBack(false)}



*/
