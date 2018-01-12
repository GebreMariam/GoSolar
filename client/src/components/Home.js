import React from 'react';
import API from '../util/API';
import SolarData from './SolarData';
import CostData from './CostData';
import CarbonOffset from './CarbonOffset';

class Home extends React.Component{
  constructor() {
    super();
    this.state = {
      city: 'Boulder',
      region: 'CO',
      location: 'Boulder, CO',
      costData: [], 
      acMonthly: [],
      costDollars: [],
      carbonData: [],
      cartItems: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.GetCostData = this.GetCostData.bind(this);
    this.CalcCostDollars = this.CalcCostDollars.bind(this);
    this.CalcCarbonOffset = this.CalcCarbonOffset.bind(this);
  }
  componentWillMount() {
    // console.log(this.state.region)
    if (this.state.region === '' ) {
      console.log('CALL IP API')
        API.LocationData()
        .then((res)=> {
          console.log(res.data.region)
            this.setState({
                city: res.data.city,
                region: res.data.region,
                location: `${res.data.city},${res.data.region}`
            })
          })        
        .catch((err)=> { console.log(err) })
        .then(() => {
          this.GetSolarData(this.state.location);  
          this.GetCostData(this.state.region);
          this.CalcCostDollars(this.state.costData, this.state.acMonthly);

        })
      } else {
        this.GetSolarData(this.state.location);  
        this.GetCostData(this.state.region);
        this.CalcCostDollars(this.state.costData, this.state.acMonthly);
      } 
  }
  GetSolarData = (cityState) => {
      console.log('SOLAR DATA get ');
      API.SolarEnergy(cityState)
          .then((res)=> {
            let ac_Monthly = res.data.outputs.ac_monthly;
            console.log('PowerArray' ,ac_Monthly);
              for (let i = 0; i<ac_Monthly.length; i++) {
                  let item = Math.round(ac_Monthly[i]);
                  ac_Monthly.splice(i,1,item);
              }
              this.setState({ acMonthly: ac_Monthly }) 
            })
            .catch((err)=> { console.log(err) })
    }
  GetCostData = (state) => {
    console.log('GET COST DATA for ', state);
    API.AvgMonthlyCost(state)
      .then((res)=> {
          console.log(res.data)
          let costArray = [];
            for (let i = 0; i < 12; i++) {
                let point = res.data[0][i+1][0]
                costArray.push(point)
            }
            console.log('costArray is ', costArray);
          this.setState({ costData: costArray })
      })
      .catch((err) => {console.log(err)})
  }
  CalcCostDollars = (costArray, power) => {
    console.log('CALC - Dollars')
    let costDollar =[];    
    for(let i = 0; i < costArray.length; i++) {
      let cost = costArray[i];
      for(let j = 0; j < power.length; j++) {
        costDollar.push(cost * power[j])
        console.log(costDollar)
      }
    }              
    this.setState({ costDollars: costDollar})
  }
  CalcCarbonOffset = (power) => {
    console.log('CALC -CARBON')
    let carbon;
    let carbonData = [];
    for(let i=0; i<power.length ; i++){
      carbon = 2.1 * power[i];
      for (let j = 0; j < carbonData.length; j++) {
          carbonData.push(carbon);
      };
      console.log('CarbonData ' ,carbonData);
  }
    this.setState({ carbonData: carbonData})
  }
  handleChange(event) {
    this.setState({ location: event.target.value })
  }
  handleSubmit(event) {
    console.log(this.state)
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
      <div className="container my-3">
          <form onSubmit={this.handleSubmit} className="col-sm-7">
              <div className="form-content">
                <div className="form-group">
                  <input onChange={this.handleChange} id='locaInput' className="rounded" placeholder="Location" type="text" />
                  <button name="calculate" className="form-content btn btn-sm btn-success">Go Go!</button>
                </div>    
              </div> 
          </form>
          <div className="py-3 col-sm-7">
            <SolarData city={this.state.city} region={this.state.region} solarData={this.state.acMonthly} onChange={this.handleChange}/>
          </div>
          <div className="py-3 col-sm-7">
            <CostData city={this.state.city} region={this.state.region} costData={this.state.costDollars} onChange={this.handleChange}/>
          </div>
          <div className="py-3 col-sm-7">
            <CarbonOffset city={this.state.city} region={this.state.region} carbonData={this.state.carbonData} onChange={this.handleChange}/>
          </div>
          <div className="text-white">cost data : {this.state.costData}</div>
          
          <div className="text-white">current state: {this.state.region} </div>
      </div>
    )
  }
 
} 
  
  export default Home;