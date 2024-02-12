import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo.png";
import SocialLink from "../../../components/SocialLink/SocialLink";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div class="footer-area">
      <Container>
        <div className="footer-left">
          <div class="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div class="footer-text">
            <p>
              Task Manager is a project created for educational purposes. All
              rights reserved.
            </p>
          </div>
          <div class="footer-social">
            <SocialLink></SocialLink>
          </div>
        </div>
        <div>
          <div class="footer-right">
            <h3>
              Welcome to our comprehensive guide on creating a Todo List
              application
            </h3>
          </div>
          <div className="footer-contact">
            <div class="footer-single-content">
              <span>sent mail</span>
              <a href="">alhasanulbanna@gmail.com</a>
              <a href="">hasanul.bbanna@gmail.com</a>
            </div>
            <div class="footer-single-content">
              <span>make call</span>
              <a href="">+88 01723 00 11 22</a>
              <a href="">+88 01711 00 11 22</a>
            </div>
            <div class="footer-single-content">
              <span>get in touch</span>
              <a href="">South Keraniganj</a>
              <a href="">Dhaka-1310</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
