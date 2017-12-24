import React from 'react'
import { Link } from 'react-router-dom';

  class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
          console.log(event.target)
          this.setState({email: event.target.email});
          this.setState({password: event.target.password});          
      }

      handleSubmit(event) {
        alert('Username (email) is ' + this.state.email + ' and password is ' + this.state.password);
        console.log(this.state.password);
        event.preventDefault();
      }
    render() {
        return(
            <div className="container col-sm-4 border border-secondary my-4">
            <form onSubmit={this.handleSubmit} className="my-3"> 
                <div className="form-group">
                    <input type="text"value={this.state.email} onChange={this.handleChange} className="form-control"  placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
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