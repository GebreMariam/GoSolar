import React from 'react';
import CostData from './CostData';
import IpLocation from '../util/IpApiService';
import SolarService from '../util/SolarService';
import SolarData from './SolarData';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      acMonthly: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    IpLocation.LocationData()
        .then((response)=> {
            this.setState({
                location: `${response.data.city},${response.data.region}`,
                name: 'locationData'
            })
            console.log(this.state.location)
          })
        .catch((error)=> {
            console.log(error)
        })    
        // SolarService.SolarEnergy(this.state.location)
        // .then((response)=> {
        //     console.log(response.data)
        //     let ac_Monthly = response.data.outputs.ac_monthly;
        //     for (let i = 0; i<ac_Monthly.length; i++) {
        //         let item = Math.round(ac_Monthly[i]);
        //         ac_Monthly.splice(i,1,item);
        //         return ac_Monthly
        //     }
        //     this.setState({
        //         acMonthly: ac_Monthly
        //     })
        // })
        // .catch((error)=> {
        //     console.log(error)
        // })

      }    
locaCallback = () => {  
  return this.state.location
}
 
  handleChange(event) {
    this.setState({
      location: event.target.value
    })
    console.log(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      location: event.target.value
    })    
    console.log(this.state.location);
  }
  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3 my-3">
          <form onSubmit={this.handleSubmit} >
              <div className="form-content">
                <div className="form-group">
                  <input onChange={this.handleChange} className="text-muted" placeholder="Location" name='location' type="text" />
                  <button name="calculate" className="ml-1 btn btn-sm btn-success">Calculate</button>
                </div>    
              </div> 
          </form>
          <SolarData location={this.state.location} data={this.state.acMonthly}/>
          <div>{this.state.location}</div>
          <CostData />
      </div>
    )
  }
 
} 
  
  export default Home;