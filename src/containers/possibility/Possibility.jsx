import React from "react";
import "./possibility.css";
import posibilityImage from "../../assets/possibility.jpg";
//import montion
import {motion} from "framer-motion"
//import variants
import {fadeIn} from "../../variants.js"

const Posibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <motion.div variants={fadeIn("right")}
            initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className="gpt3__possibility-image">
                <img src={posibilityImage} alt="possibility"/>
            </motion.div>
            <div className="gpt3__possibility-content">
                <motion.h4 variants={fadeIn("left")}
                initial="hidden" whileInView={"show1"} viewport={{once: true, amount: 0.2}}>Request Early Access to Get Started</motion.h4>
                <motion.h1 variants={fadeIn("left")} initial="hidden" whileInView={"show13"} viewport={{once: true, amount: 0.2}} className="gradient__text">
                    The possibilities are beyond your imagination
                </motion.h1>
                <motion.p variants={fadeIn("left")}
                initial="hidden" whileInView={"show14"} viewport={{once: true, amount: 0.2}}>
                Unlock the full potential of your music with our expert mixing and mastering services.
                Our state-of-the-art studio and experienced professionals are here to bring your vision to life.
                Whether you're an independent artist or a seasoned producer, we can help you achieve the perfect sound.
                </motion.p>
                <a href="https://www.linkedin.com/in/frankcasanova-/" target="_blank"><motion.h4 variants={fadeIn("up")} initial="hidden" whileInView={"show2"} viewport={{once: true, amount: 0.2}}>Lets do this</motion.h4></a>
            </div>
        </div>
    )
}

export default Posibility 