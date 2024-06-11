
import "./whatiawebpage.css";
import { Feature } from "../../components";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js"

const WhatIaWebpage = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3" >
            <motion.div variants={fadeIn("down")} initial="hidden" whileInView={"show"} viewport={{ once: true }} className="gpt3__whatgpt3-feature">
                <Feature title="Who are we?" text="We are passionate music producers dedicated to helping artists achieve the highest quality sound. We offer professional mixing and mastering services to bring your music to life." />
            </motion.div>
            <div className="gpt3__whatgpt3-heading">
                <motion.h1 variants={fadeIn("right")}
                    initial="hidden"
                    whileInView={"show2"} viewport={{ once: true }}
                    className="gradient__text">The possibilities are beyond your imagination</motion.h1>
                <a href="#features"><motion.p variants={fadeIn("left")} initial="hidden" whileInView={"show2"} viewport={{ once: true }}>Explore Our Services</motion.p></a>
            </div>
            <div className="gpt3__whatgpt3-container">
                <motion.div variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show1'} viewport={{ once: true }}>
                    <Feature title="Mixing Services" text="Our mixing services ensure that your tracks are balanced and polished, ready to make an impact." />
                </motion.div>
                <motion.div variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show12'} viewport={{ once: true }}>
                    <Feature title="Mastering Services" text="Our mastering services give your music the final touch, ensuring it sounds great on all platforms." />
                </motion.div>
                <motion.div variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show13'} viewport={{ once: true }}>
                    <Feature title="Consultation" text="Get expert advice on your music production projects, tailored to your specific needs." />
                </motion.div>
            </div>
        </div>
    )
}

export default WhatIaWebpage 