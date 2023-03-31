import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'
import BlogTitle from '../BlogTitle/BlogTitle';
import { ToastContainer, toast } from 'react-toastify';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart]=useState([]);
    const [singlecart, setSinglecartt]=useState([]);
    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);


      const handleAddToCart = (product) =>{
                const newCart = [...cart, product];
        setCart(newCart);
       
      }
      const handleReadTime = (product) =>{
        const getTitle = singlecart.find(sc=>sc.id===product.id);
        if(getTitle){
          toast(" Blog already exists")
          return;
        }
                const singleBlg = [...singlecart, product];
                setSinglecartt (singleBlg);
       
      }
    return (
        <div className="blog-container">
        <div className="singleBlog">
          {blogs.map((blog) => (
           <SingleBlog blog={blog}  handleAddToCart={handleAddToCart} handleReadTime={handleReadTime} ></SingleBlog>
          ))}
        
        </div>
        <div className='showCar'>
        
      <div>  {
             <ShowCard  cart={cart}  ></ShowCard>
              
        }</div>
     
         <div className='show_alldata'>
         <div className='card-details'>
          <h3>Bookmarked Blogs :{ singlecart.length} </h3>
          </div>
        {
         singlecart.map((s)=><BlogTitle s={s}></BlogTitle>)
        }
         </div>
    
 

        </div>
      </div>
    );
};

export default Blogs;