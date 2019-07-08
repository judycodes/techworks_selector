//functional component

import React from 'react'

const Shape = (props) => { //sends shape property's values
//console.log(props.shape) should log in console: square, circle, triangle, which are values 
//{props.shape} makes dynamic css values based on shape property values when used/assigned to className 

    const shape = props.shape; //values are square, circle, triangle - given in jsx of app.js
    const selectShape = props.selectShape;

    return (

        //props.shape is from shape property in app.js
        //onClick fires when shape div is clicked on browser, calling an anonymous function 
        //this anonymous fn takes in shape name, changing state in jsx of app.js and as displayed in between span of browser
        <div className = {shape} onClick = {() => selectShape(shape)} ></div>
        //can be rewritten as <div className = {shape} onClick = {() => selectShape(shape)} />
    );
}

export default Shape;