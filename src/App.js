import React, { Component } from 'react';
import './App.css';
import Child from './Child'
import Form from './Form'


class App extends Component {
  constructor(){
  super()
  this.state = {
    name: 'Alex',
    location: 'Wellington',
    count: 0
      }
    this.increment = this.increment.bind(this)
    }
    increment(){
      this.setState({count:this.state.count+1})
      console.log(this.state.count)
    }

  render() {
    return (
      <div className="App">
       <button onClick = {this.increment}>Increase Count</button>
       <Child count = {this.state.count}/>
       <Form />
       
      </div>
    );
  }
}

export default App;
