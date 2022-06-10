import React from 'react'
import icon from "./logo-navbar.jpg";
import './main.css'

export default function Footer() {
  return (
    <footer id="footer-section">
    <div className="footer-container"> 
        <img src={icon} alt="Casa D Velas logotipo"/>
        <div className="social-logos">
            <a href="https://www.facebook.com/casadvelashome" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/casadvelas/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://api.whatsapp.com/send?phone=%2B543816436565" target="_blank"><i className="fab fa-whatsapp"></i></a>
        </div>
    </div>
    </footer>   
  )
}
