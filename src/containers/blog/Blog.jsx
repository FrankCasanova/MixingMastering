import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
//import motion
import { motion } from 'framer-motion'
import {fadeIn} from '../../variants.js'
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <motion.div variants={fadeIn('right')}
      initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className="gpt3__blog-container_groupA">
      <Article imgUrl={blog01} date="Sep 26, 2021" text="Mixing vs. Mastering: The 5 Main Differences" url='https://blog.landr.com/mixing-vs-mastering/' />
      </motion.div>
      <motion.div variants={fadeIn('left')} 
      initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}}
      className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Mixing and Mastering: The Producers’ Guide to Finishing a Song"  url='https://blog.landr.com/mixing-and-mastering/'/>
        <Article imgUrl={blog03} date="Nov 02, 2022" text="How to get a loud mix while preserving dynamic range" url='https://www.izotope.com/en/learn/loud-mix.html#:~:text=Mixing%20techniques%20for%20loudness%20potential%201%201.%20Focus,Transient%20management%20...%205%205.%20Sibilance%20management%20' />
        <Article imgUrl={blog04} date="Jan 12, 2023" text="Crafting Loud Mixes That Sound Great" url='https://www.soundonsound.com/techniques/crafting-loud-mixes-sound-great' />
        <Article imgUrl={blog05} date="Aug 28, 2023" text="19 Essential Tips To Mix Sound Like A Pro" url='https://soundkickers.com/tips-to-mix-sound-like-a-pro/' />
      </motion.div>
    </div>
  </div>
);


export default Blog 