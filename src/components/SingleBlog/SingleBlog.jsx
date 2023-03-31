import React from 'react';
import './SingleBlog.css'

const SingleBlog = (props) => {
    // console.log(blog.watchTime);
    const {coverImage,AuthorImage,authorName,publishDate,ReadTime,category}= props.blog;
    const handleAddToCart = props.handleAddToCart;
    const handleReadTime = props.handleReadTime;

    return (
        <div>
             <div className="poster-img ">
          <img className="w-75" src={coverImage} alt="" />
          </div>
          <div className="blogDetails">
          <div className="authorDetals">
          <img className="authorImage" src={AuthorImage} alt="" />
        <div>
        <h3>{authorName}</h3>
        <p>{publishDate}</p>
        </div>
        </div>      
        <p>{ReadTime}</p>
        <button onClick={()=>handleReadTime(props.blog)}></button>
        </div>
        <h2>{category}</h2>
        
        <button className='btn' onClick={()=>handleAddToCart(props.blog)}>show card</button>
        {/* <a onClick={()=>handleAddToCart(props.blog)} href="">show card</a> */}
        <hr/>
        </div>
    );
};

export default SingleBlog;