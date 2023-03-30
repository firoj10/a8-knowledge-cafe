import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart]=useState([]);
    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);


      const handleAddToCart = (product) =>{
                const newCart = [...cart, product];
        setCart(newCart);
       
        }



    return (
        <div className="blog-container">
        <div className="singleBlog">
          {blogs.map((blog) => (
           <SingleBlog blog={blog}  handleAddToCart={handleAddToCart} ></SingleBlog>
          ))}
        
        </div>
        <div className='showCard'>
<ShowCard cart={cart}></ShowCard>
        </div>
      </div>
    );
};

export default Blogs;