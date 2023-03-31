import React from 'react';

const QAnswer = () => {
    return (
        <div>
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
           
        </div>
    );
};

export default QAnswer;
