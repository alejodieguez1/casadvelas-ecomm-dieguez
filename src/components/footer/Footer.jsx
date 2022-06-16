import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

let logo = require("../../assets/logo-white-bg.jpg");

export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="footer-container">
        <Link to="/">
          <img src={logo} alt="Casa D Velas Logotipo" />
        </Link>
        <div className="social-logos">
          <a href="https://www.facebook.com/casadvelashome" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/casadvelas/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=%2B543816436565"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
