import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, url }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href={url} target='_blank'><p>Read Full Article</p></a>
    </div>
  </div>
);

export default Article;