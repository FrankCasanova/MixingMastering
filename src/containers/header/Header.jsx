import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import mixing from "../../assets/mixingComp.mp4";
const Header = () => {
    return (
        <div className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Create Amazing Music with Professional Mixing and Mastering</h1>
                <p>We help artists and producers to achieve top-notch sound quality and elevate their music</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hour</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <video autoPlay playsInline loop muted src={mixing} type="video/mp4"></video>
            </div>
        </div>
    )
}

export default Header 