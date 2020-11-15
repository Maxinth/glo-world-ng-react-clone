import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Footer = () => {
  return (
    <footer>
      <section className="footer__container">
        <div className="footer__leftDetails">
          <ul className="footer__nav">
            <li className="footer__navListItem">
              <Link to="/ng/technical-information" className="footer__navLinks">
                Technical Information
              </Link>
            </li>
            <li className="footer__navListItem">
              <Link to="/ng/privacy-policy" className="footer__navLinks">
                Privacy Policy
              </Link>
            </li>
            <li className="footer__navListItem">
              <Link to="/ng/terms-conditions" className="footer__navLinks last">
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <p>Copyright &copy; 2020 | Globacom</p>
        </div>
        <div className="footer__rightDetails">
          <a
            href="mailto:customercare@gloworld.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon />
          </a>
          <a
            href="https://www.twitter.com/GloWorld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/GloWorld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/Company/globacom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/globacomlimited"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/globacomlimited"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
