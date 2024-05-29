import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      <Article imgUrl={blog01} date="Sep 26, 2021" text="The Future of Music Production: Mixing and Mastering" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Top 10 Tips for Perfect Mixes" />
        <Article imgUrl={blog03} date="Nov 02, 2022" text="Mastering Techniques You Need to Know" />
        <Article imgUrl={blog04} date="Jan 12, 2023" text="Common Mixing Mistakes to Avoid" />
        <Article imgUrl={blog05} date="Aug 28, 2023" text="How to Get the Best Sound from Your Home Studio" />
      </div>
    </div>
  </div>
);


export default Blog 