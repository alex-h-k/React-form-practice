import React, { Component } from 'react';
import './App.css';
import Child from './Child'
import Form from './Form'
import { HashRouter as Router, Route } from 'react-router-dom'


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
      <Router>
      
      <div className="App">
      <div className="Count">
       <button onClick = {this.increment}>Increase Count</button>
       <Route path = '/count' render={({props}) => <Child {...props} count = {this.state.count} />} />
      </div>
       <Route path = '/register' component={Form} />
       
      </div>
      </Router>
     
    );
  }
}

export default App;
