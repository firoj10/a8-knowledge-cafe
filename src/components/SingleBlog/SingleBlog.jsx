import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
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
        <div className='author-details'>
        <h4 className='author-name'>{authorName}</h4>
        <p className='author-bio'>{publishDate}</p>
        </div>
        </div> 

       <div className='red-minute'>
       <p>{ReadTime}</p>
        <button className='feb-icon' onClick={()=>handleReadTime(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button>
       </div>
        </div>


        <h2>{category}</h2>
        
        <button className='btn' onClick={()=>handleAddToCart(props.blog)}>Mark as read</button>
        {/* <a onClick={()=>handleAddToCart(props.blog)} href="">show card</a> */}
        <div className='border'>
        <  hr/>
        </div>
        </div>
    );
};

export default SingleBlog;