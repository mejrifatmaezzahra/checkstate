import logo from './logo.svg';
import './App.css';
import React from "react";
import imag from './img.jpg'
import {Component} from "react";


export default class App extends Component {
  
  state = {
    fullName:"Mejri Fatma Ezzahra",
    bio:"coding !",
    profession:"Electrical Engineer",
    imageSrc: imag,
    visible: false,
    interval : null,
    count:0
    
  };

  componentDidMount(){
    this.interval = setInterval(()=>this.setState({count:this.state.count+1}),1000)};
  
  handleClick=()=>this.setState({
    visible:!(this.state.visible)});

    render() {
      return(
<React.Fragment>
         {this.state.visible ?(
           <div>
          <h1 style={{fontStyle:'italic' , color:'Darkred'}}>Hi my name is {this.state.fullName}</h1>
          <h2 style={{ color:'Red'}}>I am {this.state.bio} </h2>
          <h2 style={{ color:'Crimson'}} > I am  a graduated  {this.state.profession} </h2> 
          <img src={this.state.imageSrc}  width="100" height="200" alt={this.state.imageAlt}   />  
          <h3>Counter : {this.state.count} seconds</h3>
          </div>) : 
          <div>
          <h3>Counter : {this.state.count} seconds</h3>
          <h4 style={{ color:'DarkOrange'}} >Click Below to show the person's profile</h4>
          </div> }
          <button  onClick={this.handleClick}> Show/Hide
          </button>

       </React.Fragment>
      )
    }
  }
  