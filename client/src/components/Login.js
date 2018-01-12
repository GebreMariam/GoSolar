import React from 'react'
import { Link } from 'react-router-dom';
import API from '../util/API';

  class Login extends React.Component {
      constructor() {
        super();
        this.state = {
            email: '',
            password: ''
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
        // console.log('email submitted: ' + this.state.email + '  password: ' +this.state.password);
        let user = {email: this.state.email, password: this.state.password}
        console.log(user);
        API.Login(user)
        .then((res) => {
            console.log('Login get ', res)
        })
        .catch((err) =>{
            console.log(err);
        })
        }
    render() {
        return(
            <div className="container col-sm-4 bg-default border border-silver my-4">
            <form onSubmit={this.handleSubmit} className="my-3"> 
                <div className="form-group">
                    <input name="email" type="text" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password"  onChange={this.handleChange} />
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
        ) 
    }
  }

  export default Login;