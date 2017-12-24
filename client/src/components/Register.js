import React from 'react'


  class Register extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.firstname);
        this.setState({
          firstname: event.target.firstname,
          lastname: event.target.lastname,
          email: event.target.lastname,
          password: event.target.password
        })
      }
    handleSubmit(event) {
      alert(this.state.firstname);
      event.preventDefault();
    }
    
    render() {
      return(
         <div className="container col-sm-5 border border-secondary my-5 mx-auto">
      <form onSubmit={this.handleSubmit} className="my-3">
          <div className="form-group text-left">
              <label htmlFor="firstname">First Name</label>
              <input type="firstname" className="form-control" value={this.state.firstname} onChange={this.handleChange}  aria-describedby="firstname" placeholder="Enter First Name"/>
          </div>
          <div className="form-group text-left">
              <label htmlFor="lastname">Last Name</label>
              <input type="lastname" className="form-control" value={this.state.lastname} onChange={this.handleChange}   aria-describedby="emailHelp" placeholder="Enter Last Name"/>
          </div>
          <div className="form-group text-left">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange}   aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Don't worry, we'll never share your email with anyone else.</small>
          </div>
          <div className="form-group text-left">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange}   placeholder="Password"/>
          </div>
          <div className="form-group text-left">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="confirmpassword" className="form-control" value={this.state.confirmpassword} onChange={this.handleChange} placeholder="Confirm Password"/>
          </div>
          <button type="submit" className="btn btn-primary" id="register">Register</button>
      </form>
    </div>
  )
    }
  }
   


  export default Register;