import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import { Validator } from 'validator'

// import API from '../util/API';

  class Login extends React.Component {
      constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            email: '',
            password: '',
            user: props.user,
            handleSignIn: props.handleSignIn
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });          
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let user = {email: this.state.email, password: this.state.password}
        console.log(user);
        return this.state.handleSignIn(user);
        }
    render() {
        const {email, password } = this.state
        return(
            <div>
                <div className="alert alert-warning"> {this.state.user} </div>
            <div className="container col-sm-4 bg-default border border-silver my-4">
            <form onSubmit={this.handleSubmit} className="my-3"> 
                <div className="form-group">
                    <input name="email" value={email} type="text" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" onChange={this.handleChange} />
                </div>
                <div className="mx-2">
                <input type="submit" className="btn btn-primary" value="Log In"/>
                <small id="needAccount" className="form-text text-muted py-1">New to GoSolar?</small>
                <div>
                    <Link to="/register"><button type="submit" className="btn btn-success" id="register">Create an Account</button></Link>
                </div>
                </div>
            </form>
         </div>
         </div>
        ) 
    }
    // currentSrc: http://localhost:3000/img/gigaWatt.jpg
  }
  export default Login;