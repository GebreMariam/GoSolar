import React from 'react'
import API from '../util/API';

  class Register extends React.Component {
    constructor (props) {
      super(props);
      console.log(props)
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
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
      API.SignUp(this.state)
      .then((res) => {
        console.log('SignUp form ', res)
      })
      .catch((err) =>{
        console.log(err);
      })
    } 
     
    render() {
      return(
        <div className="container col-sm-5 border border-secondary my-5 mx-auto">
          <form onSubmit={this.handleSubmit} className="my-3">
              <div className="form-group text-left">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" className="form-control" value={this.state.firstname} onChange={this.handleChange}/>
              </div>
              <div className="form-group text-left">
                  <label htmlFor="lastName">Last Name</label>
                  <input name="lastName" className="form-control" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name"/>
              </div>
              <div className="form-group text-left">
                  <label htmlFor="email">Email address</label>
                  <input name="email" className="form-control" value={this.state.email} onChange={this.handleChange}  placeholder="email"/>
                  <small id="emailHelp" className="form-text text-muted">Don't worry, we'll never share your email with anyone else.</small>
              </div>
              <div className="form-group text-left">
                  <label htmlFor="password">Password</label>
                  <input name="password" className="form-control" value={this.state.password} onChange={this.handleChange}   placeholder="Password"/>
              </div>
              <div className="form-group text-left">
                  <label htmlFor="">Confirm Password</label>
                  <input name="confirmPassword" className="form-control" value={this.state.confirmpassword} onChange={this.handleChange} placeholder="Confirm Password"/>
              </div>
              <button type="submit" className="btn btn-primary" id="register">Register</button>
          </form>
        </div>
  )
    }
  }
   


  export default Register;