import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);
    return (
        <div className="blog-container">
        <div className="singleBlog">
          {blogs.map((blog) => (
           <SingleBlog blog={blog} ></SingleBlog>
          ))}
       
        </div>
        <div className='showCard'>
<ShowCard></ShowCard>
        </div>
      </div>
    );
};

export default Blogs;