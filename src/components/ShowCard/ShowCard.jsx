import React from 'react';
import './ShowCard.css'
const ShowCard = ({cart}) => {
 
    let totalwatchTime = 0;
    for (const watchTime of cart){ 
        totalwatchTime = totalwatchTime+watchTime.watchTime ;
    }
    return (
        <div>
  <div className='show-card'>
            <h2 className='total-watchtime'>Spent time on read : { totalwatchTime} min</h2>
        </div>
      
        </div>
     

    );
};

export default ShowCard;