// src/components/Blog.js
import React from 'react';
// import './Blog.css';
import '../style/Blog.css'

const Blog = ({ title, author, date, image, content }) => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">{title}</h1>
      <div className="blog-meta">
        <span>By {author}</span> | <span>{date}</span>
      </div>
      {image && <img src={image} alt="Blog" className="blog-image" />}
      <div className="blog-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Blog;
