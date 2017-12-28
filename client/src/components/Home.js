import React from 'react';
import API from '../util/API';
import SolarData from './SolarData';
import CostData from './CostData';


class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      region: '',
      location: '',
      acMonthly: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.state.city === '') {
      API.LocationData()
        .then((res)=> {
            this.setState({
                city: res.data.city,
                region: res.data.region         
            })
            console.log(this.state.location)
          })
        .catch((error)=> {
            console.log(error)
        }) 
    }
  }
  handleChange(event) {
    this.setState({
      location: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    let input = document.getElementById('locaInput');
    input.innerHTML="Hello world";
    console.log(this.state.location.split(','));
    let loca = this.state.location.split(',');
    this.setState({
      city: loca[0].trim(),
      region: loca[1].trim()
    })     
  }
  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3 my-3">
          <form onSubmit={this.handleSubmit} >
              <div className="form-content">
                <div className="form-group">
                  <input onChange={this.handleChange} id='locaInput' className="text-muted" placeholder="Location" type="text" />
                  <button name="calculate" className="ml-1 btn btn-sm btn-success">Calculate</button>
                </div>    
              </div> 
          </form>
          <SolarData city={this.state.city} region={this.state.region} />
          <CostData location={this.state.state} />
          current city is:
          <div>{this.state.city}</div>
          current state: 
          <div>{this.state.region} </div>
      </div>
    )
  }
 
} 
  
  export default Home;