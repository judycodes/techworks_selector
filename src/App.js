import React, { Component } from 'react'
import Shape from './Shape';

//stateful/class component
class Selector extends Component {
  constructor(){
    super();
    this.state = {
      selectedShape : ' Shape?', //initialized with a value and data type, which in this case is a string value for selectedShape (key)

      //counters for each shape figure, initialized at zero
      squareCount: 0,
      circleCount: 0,
      triangleCount: 0,
      trapeziumCount: 0,
      starCount: 0,
      ovalCount: 0
    
    };
  }

//=======[EVENTS]============  
//below allows for shape data to change due to value passed as parameter...this is a method
  handleSelectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName
    });

    //below keeps count of the number of times the shape was clicked
    if(shapeName == 'square') {
      this.setState({
        squareCount: this.state.squareCount + 1
      });
      } else if(shapeName == 'circle') {
        this.setState({
          circleCount: this.state.circleCount + 1
        });
        } else if(shapeName == 'triangle') {
          this.setState({
            triangleCount: this.state.triangleCount + 1
          });} else if(shapeName == 'trapezium') {
            this.setState({
              trapeziumCount: this.state.trapeziumCount + 1
            });
            } else if(shapeName == 'star') {
              this.setState({
                starCount: this.state.starCount + 1
              });
              } else {
                this.setState({
                  ovalCount: this.state.ovalCount + 1
                });
              } 
  }

  handleReset = () => {
    this.setState({
      squareCount: 0,
      circleCount: 0,
      triangleCount: 0,
      trapeziumCount: 0,
      starCount: 0,
      ovalCount: 0
    }, alert('Memory Wiped! Meet These Shapes Again!'))
  }

//in the Shape component in jsx below, the selectShape attribute is calling the above handleSelectShape method to change local state data
//this allows for this.state.selectedShape in 'This is called a shape?!' to change on click of various shape figures on browser page

//state and props are objects with key/value pairs

  handleSquareCount = () => {
    this.setState({squareCount: this.state.squareCount + 1})
  }

  //=======[RENDER]============
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
          <Shape shape="square" className="shape" selectShape = {this.handleSelectShape} /> 
          <Shape shape="circle" className="shape" selectShape = {this.handleSelectShape}/>
          <Shape shape="triangle" className="shape" selectShape = {this.handleSelectShape}/>
          </div>

          <div className="row">
          <Shape shape="trapezium" className="shape" selectShape = {this.handleSelectShape}/>
          <Shape shape="star" className="shape" selectShape = {this.handleSelectShape}/>
          <Shape shape="oval" className="shape" selectShape = {this.handleSelectShape}/>
          </div>

        </div>

        <div className="footer">
          <h1 className="text"> You have met {this.state.squareCount} square(s), {this.state.circleCount} circle(s), {this.state.triangleCount} triangle(s), {this.state.trapeziumCount} trapezium(s), {this.state.starCount} star(s), and {this.state.ovalCount} oval(s) today!</h1>

          <h1 class="text erase" onClick = {this.handleReset}>Neuralyzer</h1> 
        </div>

      </div>
    );
    
  }

}
export default Selector;