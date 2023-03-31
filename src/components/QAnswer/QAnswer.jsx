import React from 'react';
import './QAnswer.css'

const QAnswer = () => {
    return (
        <div className='question-answer'>
            <h1>Blog component  following questions:</h1>
            <div>
                <h2>Props vs state</h2>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event.</p>
            <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components</p>
            </div>
            <div>
                <h2>How does useState work?</h2>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it</p>
            </div>
            <div>
                <h2>Purpose of useEffect other than fetching data.?</h2>
                <p>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers.</p>
            </div>
            <div>
                <h2>How Does React work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
           
        </div>
    );
};

export default QAnswer;
