import React from "react";
import "./SocialLink.css";
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa";
const SocialLink = () => {
  return (
    <div className="social-link">
      <ul className="social-icon">
        <li className="facebook">
          <a href="https://facebook.com/home">
            <FaFacebookF></FaFacebookF>
          </a>
        </li>
        <li className="twitter">
          <a href="https://twitter.com/home">
            <FaTwitter></FaTwitter>
          </a>
        </li>
        <li className="behance">
          <a href="https://www.behance.net/">
            <FaBehance></FaBehance>
          </a>
        </li>
        <li className="instagram">
          <a href="https://www.instagram.com/">
            <FaInstagram></FaInstagram>
          </a>
        </li>
        <li className="dribble">
          <a href="https://dribbble.com/">
            <FaDribbble></FaDribbble>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
