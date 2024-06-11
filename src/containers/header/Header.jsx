import { motion } from "framer-motion";
//import variants
import {fadeIn} from "../../variants.js"
import "./header.css";
import people from "../../assets/people.png";
import mixing from "/mixingComp.mp4";
const Header = () => {
    
    return (
        <div className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <motion.h1 
                variants={fadeIn('right')} initial="hidden" whileInView={"show1"} viewport={{once: true, amount: 0.2}} className="gradient__text">Let's Create Amazing Music with Professional Mixing and Mastering</motion.h1>
                <motion.p variants={fadeIn('right')} initial="hidden" whileInView={"show15"} viewport={{once: true, amount: 0.2}}>We help artists and producers to achieve top-notch sound quality and elevate their music</motion.p>
                <div className="gpt3__header-content__input">
                    {/* <input type="email" placeholder="Your Email Address" /> */}
                    <a href="#brand"><motion.button variants={fadeIn('left')} initial="hidden" whileInView={"show2"} viewport={{once: true, amount: 0.2}} type="button">Get Started</motion.button></a>
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