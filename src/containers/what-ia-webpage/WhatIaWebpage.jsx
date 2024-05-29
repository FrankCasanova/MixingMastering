import React from "react";
import "./whatiawebpage.css";
import { Feature } from "../../components";

const WhatIaWebpage = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3" >
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Who are we?" text="We are passionate music producers dedicated to helping artists achieve the highest quality sound. We offer professional mixing and mastering services to bring your music to life." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore Our Services</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Mixing Services" text="Our mixing services ensure that your tracks are balanced and polished, ready to make an impact." />
                <Feature title="Mastering Services" text="Our mastering services give your music the final touch, ensuring it sounds great on all platforms." />
                <Feature title="Consultation" text="Get expert advice on your music production projects, tailored to your specific needs." />
            </div>
        </div>
    )
}

export default WhatIaWebpage 