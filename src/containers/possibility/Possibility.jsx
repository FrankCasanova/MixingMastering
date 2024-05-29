import React from "react";
import "./possibility.css";
import posibilityImage from "../../assets/possibility.png";

const Posibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={posibilityImage} alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>
                Unlock the full potential of your music with our expert mixing and mastering services.
                Our state-of-the-art studio and experienced professionals are here to bring your vision to life.
                Whether you're an independent artist or a seasoned producer, we can help you achieve the perfect sound.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Posibility 