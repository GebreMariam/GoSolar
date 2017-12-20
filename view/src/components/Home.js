import React from 'react';
import Axios from 'axios';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      location: event.target.location
    })
    console.log(event.target.location);
  }
  handleSubmit(event) {
    console.log(this.state.location);
    event.preventDefault();
  }
  
  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3 my-3">
          <form onSubmit={this.handleSubmit} >
              <div className="form-content">
                <div className="form-group">
                  <input value={this.state.location} onChange={this.handleChange} className="text-muted" placeholder="Location" name='location' type="text" />
                  <button name="calcSolar" className="ml-1 btn btn-sm btn-success">Calculate</button>
                </div>    
              </div> 
          </form>
      </div>
    )
  }
 
} 
  
  export default Home;