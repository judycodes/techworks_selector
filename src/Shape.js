//functional component

import React from 'react'

const Shape = (props) => { //sends shape property's values
//console.log(props.shape) should log in console: square, circle, triangle, which are values 
//{props.shape} makes dynamic css values based on shape property values 
    return (

        //props.shape is from shape property in app.js
        <div className = {props.shape}></div>
    );
}

export default Shape;