import React from 'react';
import './ShowCard.css'
const ShowCard = ({cart}) => {
    let totalPrice = 0;

    for (const product of cart){
       
        totalPrice = totalPrice+product.watchTime ;
        
    }
console.log(totalPrice)
    return (
        <div className='show-card'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Spent time on read : {totalPrice} min</p>
        </div>
    );
};

export default ShowCard;