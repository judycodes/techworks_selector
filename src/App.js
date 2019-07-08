import React, { Component } from 'react'
import Shape from './Shape';

//stateful/class component
class Selector extends Component {
  constructor(){
    super();
    this.state = {
      selectedShape : 'shape?', //initalized with a value and data type, which is string, for selectedShape


    };
  }

//below allows for shape data to change...this is a method
  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })  
  }
//in the Shape in jsx below, the selectShape attribute is calling the above selectShape method
//this allows for this.state.selectedShape in Selected: div to change on click

//state and props are objects with key/value pairs

  render(){
    //shape = "shape/square/circle/triangle" creating shape property with a value. This becomes a passing props in shape component on Shape.js
    
    return (
      <div className = "container">
        <div className ="navbar">
        <div>Selected: <span>{this.state.selectedShape}</span></div>
        </div>
        
        <div className ="shape-list">
          <Shape shape="square" selectShape = {this.selectShape}/> 
          <Shape shape="circle" selectShape = {this.selectShape}/>
          <Shape shape="triangle" selectShape = {this.selectShape}/>
        </div>
      </div>
    );
  }

}
export default Selector;