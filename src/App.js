import React, { Component } from 'react'
import Shape from './Shape';

//stateful/class component
class Selector extends Component {
  constructor(){
    super();
    this.state = {
      selectedShape : ' Shape?', //initalized with a value and data type, which in this case is a string value for selectedShape (key)
    };
  }

//below allows for shape data to change due to value passed as parameter...this is a method
  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })  
  }

//in the Shape component in jsx below, the selectShape attribute is calling the above selectShape method to change local state data
//this allows for this.state.selectedShape in 'This is called a shape?!' to change on click of various shape figures on browser page

//state and props are objects with key/value pairs

  render(){
    //shape = "shape/square/circle/triangle/etc" is a shape property/key with a value. This becomes props in Shape.js/functional component as a parameter to be passed through function
    
    return (
      <div className = "container">
        <div className ="navbar">
          <h1 className = "hello">HELLO</h1>
          <h2 className ="text">My Name Is <br />
          <span className = "figureName" >{this.state.selectedShape}</span>!</h2>
        </div>
        
        <div className ="shape-list">
          <div className="row">
          <Shape shape="square" className="shape" selectShape = {this.selectShape}/> 
          <Shape shape="circle" className="shape" selectShape = {this.selectShape}/>
          <Shape shape="triangle" className="shape" selectShape = {this.selectShape}/>
          </div>

          <div className="row">
          <Shape shape="trapezium" className="shape" selectShape = {this.selectShape}/>
          <Shape shape="star" className="shape" selectShape = {this.selectShape}/>
          <Shape shape="oval" className="shape" selectShape = {this.selectShape}/>
          </div>

        </div>
      </div>
    );
  }

}
export default Selector;