import React from "react";
import { google, slack, atlassian, dropbox, shopify } from './imports';
import {motion} from "framer-motion";
import {fadeIn} from "../../variants.js"
import "./brand.css";

const Brand = () => {

    

    return (
        
        <div id="brand"  className="gpt3__brand section__padding">
            <motion.div variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show1'} viewport={{once: true, amount: 0.2}}>
                <img src={google} />
            </motion.div>
            <motion.div variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show12'} viewport={{once: true, amount: 0.2}}>
                <img src={slack} />
            </motion.div>
            <motion.div variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show13'} viewport={{once: true, amount: 0.2}}>
                <img src={atlassian} />
            </motion.div>
            <motion.div variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show14'} viewport={{once: true, amount: 0.2}}>
                <img src={dropbox} />
            </motion.div>
            <motion.div variants={fadeIn('up')}
            initial="hidden"
            whileInView={'show15'} viewport={{once: true, amount: 0.2}}>
                <img src={shopify} />
            </motion.div>
        </div>
    )
}

export default Brand 