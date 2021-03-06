// import the REact and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a React component
const App = function() {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';


    return (
        <div>
            <label className="label" for="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    )
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);