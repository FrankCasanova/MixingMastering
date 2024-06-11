import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
//import motion
import { motion } from 'framer-motion';
//import variants
import { fadeIn } from '../../variants';

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
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className='gpt3__features-heading'  id="gpt3__features-heading">
                <motion.h1 variants={fadeIn('right')}  initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className="gradient__text">Transform Your Music Today. Step into the Future of Sound with Our Professional Services.</motion.h1>
                <a href="#possibility"><motion.p variants={fadeIn('left')} initial="hidden" whileInView={"show15"} viewport={{once: true, amount: 0.2}}>Lets Get In Touch</motion.p></a>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((feature, index) => (
                    <motion.div variants={fadeIn('up')} initial="hidden" whileInView={`show1${index+2}`} viewport={{once: true, amount: 0.2}} className="gpt3__features-container_feature">
                    <Feature
                        title={feature.title}
                        text={feature.text}
                        key={index}
                    
                    />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Features;