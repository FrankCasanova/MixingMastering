import React from 'react';
import useIntersectionObserver from '../../components/observer';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Enhance Your Mix Instantly',
        text: 'Our mixing services bring clarity and balance to your tracks, ensuring every element shines through. Experience the difference professional mixing can make.'
    },
    {
        title: 'Achieve Perfect Mastering',
        text: 'Our mastering services provide the final polish your music needs, making it sound great on all platforms. Let us help you achieve industry-standard sound quality.'
    },
    {
        title: 'Personalized Consultation',
        text: 'Receive expert advice tailored to your music production needs. Our consultations help you make informed decisions to enhance your sound.'
    },
    {
        title: 'Cutting-Edge Technology',
        text: 'Utilize the latest in music production technology to bring your creative vision to life. Our state-of-the-art equipment ensures top-notch results.'
    }
];

const Features = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className={`gpt3__features-heading ${isVisible ? 'animate' : ''}`} ref={ref} id="gpt3__features-heading">
                <h1 className="gradient__text">Transform Your Music Today. Step into the Future of Sound with Our Professional Services.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((feature, index) => (
                    <Feature
                        title={feature.title}
                        text={feature.text}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features;