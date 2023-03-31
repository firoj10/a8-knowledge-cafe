import React from 'react';
import './BlogTitle.css'
const BlogTitle = ({s}) => {
    const {category}= s;
    return (
        <div className='blog-details'>
            <p>{category}</p>
        </div>
    );
};

export default BlogTitle;