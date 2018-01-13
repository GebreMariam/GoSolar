import React from 'react';
// import { FormattedNumber, IntlProvider } from 'react-intl';
import API from '../util/API';
import SolarData from './SolarData';
import CostData from './CostData';
import CarbonOffset from './CarbonOffset';

class Home extends React.Component{
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      city: '',
      region: '',
      location: '',
      costData: [], 
      acMonthly: [],
      costDollars: [],
      carbonData: [],
      cartItems: [],
      totalAc: 0,
      totalCarbon: 0,
      totalCost: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.GetCostData = this.GetCostData.bind(this);
    this.CalcCostDollars = this.CalcCostDollars.bind(this);
    this.CalcCarbonOffset = this.CalcCarbonOffset.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  getTotal = (accumulator, currentValue) => accumulator + currentValue;
  
  componentWillMount() {
    // console.log(this.state.region)
    if (this.state.region === '' ) {
      // console.log('CALL IP API')
        API.LocationData()
        .then((res)=> {
          // console.log(res.data.region)
            this.setState({
                city: res.data.city,
                region: res.data.region,
                location: `${res.data.city},${res.data.region}`
            })
          })        
        .then(() => {
          return this.GetSolarData(this.state.location);
        })  
        .then((ac_Monthly) => {
          return this.GetCostData(this.state.region, ac_Monthly);
        })
        .then((costArray) => {
          this.CalcCostDollars(costArray, this.state.acMonthly);
        })
        .then(() => {
          this.CalcCarbonOffset(this.state.acMonthly)
        })
        .catch((err)=> { console.log(err) })
      } else {             
        this.GetSolarData(this.state.location);  
            this.GetCostData(this.state.region);
        this.CalcCostDollars(this.state.costData, this.state.acMonthly);
      } 
  }

  ReChart = () => {    
    this.GetSolarData(this.state.location);
    this.GetCostData(this.state.region, this.state.acMonthly);
    this.CalcCostDollars(this.state.costData, this.state.acMonthly);
    this.CalcCarbonOffset(this.state.acMonthly)
  }

  GetSolarData = (cityState) => {
      // console.log('SOLAR DATA get ');
    return API.SolarEnergy(cityState)
          .then((res)=> {
            let ac_Monthly = res.data.outputs.ac_monthly;
            // console.log('PowerArray' ,ac_Monthly);
              for (let i = 0; i<ac_Monthly.length; i++) {
                  let item = Math.round(ac_Monthly[i]);
                  ac_Monthly.splice(i,1,item);
              }
              let totalAC = ac_Monthly.reduce(this.getTotal);
              this.setState({ 
                acMonthly: ac_Monthly,
                totalAC: totalAC
              }) 
              return ac_Monthly
            })
            .catch((err)=> { console.log(err) })
    }
  GetCostData = (state) => {
    console.log('GET COST DATA for ', state);
    return API.AvgMonthlyCost(state)
      .then((res)=> {
          let costArray = [];
            for (let i = 0; i < 12; i++) {
                let point = res.data[0][i+1][0].toFixed(2) / 100;
                costArray.push(point)
            }
            console.log('costArray is ', costArray);
          this.setState({ costData: costArray })
          return costArray
      })
      .catch((err) => {console.log(err)})
  }
  CalcCostDollars = (costArray, power) => {
    let costDollar =[];    
    for(let i = 0; i < costArray.length; i++) {
      let cost = (costArray[i] * power[i]).toFixed(2);
       costDollar.splice(i ,0, cost)
    }              
    let totalCost = costDollar.reduce(this.getTotal);
    // totalCost = totalCost.toFixed(0)
        this.setState({ 
          costDollars: costDollar,
          totalCost: totalCost
        })
  }

  CalcCarbonOffset = (power) => {
    // console.log('CALC -CARBON')
    let carbon;
    let carbonData = [];
    for(let i=0; i<power.length ; i++){
      carbon = (2.1 * power[i]).toFixed(0);
          carbonData.push(carbon);
  }
    let totalCarbon = carbonData.reduce(this.getTotal);
    this.setState({ 
      carbonData: carbonData,
      totalCarbon: totalCarbon
    })
    return carbonData
  }
  
  handleChange(event) {
    this.setState({ location: event.target.value })
    console.log(event.target.value)
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    let loca = this.state.location.split(',');
    console.log(loca)
    let city = loca[0].trim().toUpperCase()
    let region = loca[1].trim().toUpperCase()
    this.setState({
      city: city,
      region: region,
      location: `${city},${region}`
    })     
    this.ReChart()
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
          <div className="row">
            <div className="py-3 col-sm-7">  
              <SolarData city={this.state.city} region={this.state.region} solarData={this.state.acMonthly} />
              <p> solar data </p> 
           </div>
          </div>
          <div className="row">
            <div className="py-3 col-sm-7">
              <CostData city={this.state.city} region={this.state.region} costData={this.state.costDollars} />
              <p> cost data...</p>
            </div>
          </div>
          <div className="row">
            <div className="py-3 col-sm-7">
              <CarbonOffset city={this.state.city} region={this.state.region} carbonData={this.state.carbonData} />
              <p> carbon ofset</p>
            </div>
          </div>

        </div>
         
    )
  }
} 
  export default Home;