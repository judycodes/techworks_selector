import React, { Component } from 'react'
import Shape from './Shape';

//stateful/class component
class Selector extends Component {
  constructor(){
    super();
    this.state = {
      


    };
  }

//state and props are objects with key/value pairs

  render(){
    //shape = "shape" creating shape property with a value. This becomes a passing props in shape component on Shape.js
    return (
      <div className = "container">
        <div className ="navbar">
        <div>Selected: <span>shape</span></div>
        </div>
        
        <div className ="shape-list">
          <Shape shape="square" /> 
          <Shape shape="circle" />
          <Shape shape="triangle" />
        </div>
      </div>
    );
  }

}
export default Selector;