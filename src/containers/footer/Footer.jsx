import React from "react";
import gpt3logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">

            <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to step into the future of music production?</h1>
            </div>

            <div className="gpt3__footer-btn">
                <a href="https://www.linkedin.com/in/frankcasanova-/" target="_blank"><p>Contact me</p></a>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3logo} alt="logo" />
                    <p>Frank Casanova, Huelva, Spain. All Rights Reserved</p>
                </div>
                {/* <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>About Us</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div> */}
                {/* <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div> */}
                <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                    <p>Frank Casanova, Huelva, Spain</p>
                    <p>+34-613-14-69-26</p>
                    <p>frankcasanova.info@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer 