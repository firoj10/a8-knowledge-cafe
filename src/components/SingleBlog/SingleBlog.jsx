import React from 'react';
import './SingleBlog.css'

const SingleBlog = ({blog}) => {
    console.log(blog.category);
    return (
        <div>
             <div className="poster-img ">
          <img className="w-75" src={blog.coverImage} alt="" />
          </div>
          <div className="blogDetails">
          <div className="authorDetals">
          <img className="authorImage" src={blog.AuthorImage} alt="" />
        <div>
        <h3>{blog.authorName}</h3>
        <p>{blog.publishDate}</p>
        </div>
        </div>      
        <p>{blog.ReadTime}</p>
        </div>
        <h2>{blog.category}</h2>
        
        <button><a href="">Mark as read</a></button>
        <hr/>
        </div>
    );
};

export default SingleBlog;