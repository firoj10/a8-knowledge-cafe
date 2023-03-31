import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
        <div className='header'>
          
            <h2>Knowledge Cafe</h2>
            
            <div className='navItems'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
            </div>
        </div>
        <hr />
        </>
    );
};

export default Header;