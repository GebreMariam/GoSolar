import React from 'react';
import SolarDataService from './SolarDataService';
import IpApiService from './IpApiService';

const myChart = new Chart(sunChart, {
  type: 'line-chart',
  data: {
      labels: ["Jan", "Feb", "April", "March", "May", "June","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [{
          label: 'Kwh AC Output',
          data: [8,9,9],
          borderColor:rgba(255, 99, 132, 0.2),
          borderWidth: 1
      }]
  },
  options: {
      title: {
          display: true
      },
          yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Kwh'
              },
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  });

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      ipAPI: ''
    }
    this.SolarData = new SolarDataService();
    this.IpLocation = new IpApiService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // IpApiService()
    

  handleChange(event) {
    this.setState({
      location: event.target.value
    })
    console.log(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();    
    console.log(this.state.location);
    this.SolarData.LocationData(this.state.location);
  }
  
  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3 my-3">
          <form onSubmit={this.handleSubmit} >
              <div className="form-content">
                <div className="form-group">
                  <input value={this.state.location} onChange={this.handleChange} className="text-muted" placeholder="Location" name='location' type="text" />
                  <button name="calcSolar" className="ml-1 btn btn-sm btn-success">Calculate</button>
                  <textarea value={this.state.ipAPI} onChange={this.handleChange} />

                </div>    
              </div> 
          </form>
          <div class="row">
        <div class="col m7">
            <canvas id="myChart" width="700" height="400"></canvas> 
        </div>
        <span class="col m4">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Vestibulum lectus mauris ultrices eros in.
            </p>
        </span>
       </div>
      </div>
    )
  }
 
} 
  
  export default Home;