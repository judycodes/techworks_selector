//Function  (stateless functional component)
//no local state

import React from 'react'

const Shape = (props) => { //props are values located in app.js

    const shape = props.shape; //props.shape values are square, circle, triangle, and so on
    const selectShape = props.selectShape; //selectShape method in app.js stored as a value in this variable

    return (

        //onClick fires when shape is clicked by user on browser, calls an anonymous function 
        //this anonymous fn takes in shape name of figure clicked, changing state (value of shapeName) of selectedShape value in app.js, which is then displayed between span in .text h1 and in browser
        <div className = {shape} onClick = {() => selectShape(shape)} ></div>
        //can also be rewritten as <div className = {shape} onClick = {() => selectShape(shape)} />
    );
}

export default Shape;