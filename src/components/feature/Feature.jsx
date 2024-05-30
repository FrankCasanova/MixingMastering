import React from "react";
import useIntersectionObserver from "../observer";
import "./feature.css";

const Feature = ( {title, text }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div ref={ref} className={`gpt3__features-container__feature ${isVisible ? 'animate' : ''}`}>
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature 