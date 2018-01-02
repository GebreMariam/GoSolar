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
      acMonthly: [],
      costData: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    if (this.state.region === '' || this.state.city === '') {
      console.log('CALL IP API')
        API.LocationData()
        .then((res)=> {
            this.setState({
                city: res.data.city,
                region: res.data.region,
                location: `${res.data.city},${res.data.region}`
            })
            console.log(this.state.region);
          })
        .then(() => {
        API.AvgMonthlyCost(this.state.region)
        .then((res)=> {
            console.log('RES COST ' ,res.data)
            let cost = res.data.Dec ///parse first twelve entries.
            this.setState({ costData: cost })
        })
        console.log('COST DATA ' , this.state.costData)
        .catch((err)=> {console.log(err) })    
        })  
        .catch((err)=> { console.log(err) }) 
        .then(() => {
        API.SolarEnergy(this.state.location)
        .then((res)=> {
          let ac_Monthly = res.data.outputs.ac_monthly;
          // console.log(res.data);
          for (let i = 0; i<ac_Monthly.length; i++) {
              let item = Math.round(ac_Monthly[i]);
              ac_Monthly.splice(i,1,item);
          }
            this.setState({ acMonthly: ac_Monthly })
            console.log('KWH DATA ', this.state.acMonthly)  
          })
          .catch((err)=> { console.log(err) })  
        })
         
      } else {
        API.SolarEnergy(this.state.location)
        .then((res)=> {
          let ac_Monthly = res.data.outputs.ac_monthly;
          // console.log(res.data);
            for (let i = 0; i<ac_Monthly.length; i++) {
                let item = Math.round(ac_Monthly[i]);
                ac_Monthly.splice(i,1,item);
            }
            this.setState({ acMonthly: ac_Monthly }) 
            // console.log(this.state.acMonthly)
          })
          .catch((err)=> { console.log(err) })
          API.AvgMonthlyCost(this.state.region)
          .then((res)=> {
              console.log(res.data)
              let cost = res.data[0]
              this.setState({ costData: cost })
          })
          .catch((err)=> {
              console.log(err)
          })    
    }
  }
  componentDidMount() {
    API.AvgMonthlyCost(this.state.region)
    .then((res)=> {
        console.log(res.data)
        let cost = res.data[0]
        this.setState({ costData: cost })
    })
    .catch((err)=> {
        console.log(err)
    })    
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.location.split(','));
    let loca = this.state.location.split(',');
    this.setState({
      city: loca[0].trim(),
      region: loca[1].trim(),
      location: `${loca[0].trim()},${loca[1].trim()}`
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
          <SolarData city={this.state.city} data={this.state.acMonthly} region={this.state.region} onChange={this.handleChange}/>
          <CostData region={this.state.region} data={this.state.costData} />
          cost data city is:
          <div>{this.state.costData}</div>
          current state: 
          <div>{this.state.region} </div>
      </div>
    )
  }
 
} 
  
  export default Home;