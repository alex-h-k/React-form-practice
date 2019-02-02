import React from 'react'
import FormChild from './FormChild'
import { HashRouter as Router, Route } from 'react-router-dom'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            location: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        console.log('submited')
        console.log(this.state)
        event.preventDefault();
        this.setState({submitted: true})
    
    } 
    handleChange(event){
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }
       render() {
           return (
               <Router>
            <div>
                <form >
                <label>Name: <input  onChange = {this.handleChange} name = 'name'/></label>
                <label>Location: <input onChange = {this.handleChange} name = 'location'/></label>
                <button onClick={this.handleSubmit} value = 'Submit'>Submit</button>
                </form>
                {this.state.submitted && <Route path = '/home' 
                render = {(props) => <FormChild {...props} name = {this.state.name} location = {this.state.location} /> }/>}
            </div>
            </Router>
           )

       }
    
}
export default Form