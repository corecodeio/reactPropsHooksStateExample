/*
import React, { Component } from 'react';
import './App.css';
import Name from '../components/Name/Name';

class App extends Component 
{

  state = {
    nombre: "",
    backgroundColor: "#000000",
    color: "#e24305"
  };

  nameChangeHandler = (event) =>
  {
    const newName = event.target.value;
    this.setState({nombre: newName});
  }

  backgroundColorChangeHandler = () =>
  {
    const newBackgroundColor = "#" +  Math.floor(Math.random()*16777215).toString(16);
    const newBackgroundColor2 = "#" +  Math.floor(Math.random()*16777215).toString(16);
    this.setState({backgroundColor: newBackgroundColor, color: newBackgroundColor2 });
    
  }

  render()
  {
    return(
      <div className="App">
        <Name 
          name={this.state.nombre} 
          onChange={this.nameChangeHandler} 
          bgColor={this.state.backgroundColor} 
          fcolor = {this.state.color} />
        <br/>
        <button onClick={this.backgroundColorChangeHandler}>Change color</button>
      </div>
    );
  }
}

export default App;

*/

import './App.css';
import Name from '../components/Name/Name';
import React, { useState } from 'react';

const App = () =>
{

  const [nameState, nameSetState] = useState({
    nombre: "",
    backgroundColor: "#000000",
    color: "#e24305"
  });

  const nameChangeHandler = (event) =>
  {
    const newState = {...nameState};
    const newName = event.target.value;
    newState.nombre = newName;
    nameSetState(newState);
  }

  const backgroundColorChangeHandler = () =>
  {
    const newBackgroundColor = "#" +  Math.floor(Math.random()*16777215).toString(16);
    const newBackgroundColor2 = "#" +  Math.floor(Math.random()*16777215).toString(16);
    const newState = {...nameState};
    newState.backgroundColor = newBackgroundColor;
    newState.color = newBackgroundColor2;
    nameSetState(newState);
  }

  return(
    <div className="App">
      <Name 
        name={nameState.nombre} 
        onChange={nameChangeHandler} 
        bgColor={nameState.backgroundColor} 
        fcolor = {nameState.color} />
      <br/>
      <button onClick={backgroundColorChangeHandler}>Change color</button>
    </div>
  ); 
}

export default App;