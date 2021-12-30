import React from "react";
import "./article.css";
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_arcticle">
      <div className="gpt3__blog-container_arcticle-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_arcticle-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
