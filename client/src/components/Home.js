import React from 'react';
import API from '../util/API';
import SolarData from './SolarData';
import CostData from './CostData';
import CarbonOffset from './CarbonOffset';

// const FormattedNumber = ReactIntl.FormattedNumber
let TotalStyle = {
  backgroundColor: 'rgba(142, 136, 112,0.3)'
}
let TotalStyle1 = {
  backgroundColor: 'rgba(232, 225, 197,0.8)'
}
let TotalStyle2 = {
  backgroundColor: 'rgba(206, 202, 185,0.8)'
}

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
  getTotal = (array) => {
    let total =0; 
    for (let i = 0; i<array.length ; i++){
      total = total + array[i];
    }
    total = total.toLocaleString()
    console.log(total)
    return total
  }
 
  componentWillMount() {
    // console.log(this.state.region)
    if (this.state.region === '' ) {
      // console.log('CALL IP API')
        API.LocationData()
        .then((res)=> {
          console.log(res.data)
            this.setState({
                city: res.data.city,
                region: res.data.region_code,
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
  
  ReChartOne = () => {    
    this.GetSolarData(this.state.location);
    setTimeout(this.GetCost(), 9000)
  }
  GetCost = () =>{
      this.GetCostData(this.state.region);
      setTimeout(this.ReChartTwo(), 5000)
  }
  ReChartTwo = () =>{
      this.CalcCostDollars(this.state.costData, this.state.acMonthly);
      this.ReChartThree()
  }
  ReChartThree = () => {
     this.CalcCarbonOffset(this.state.acMonthly)
  }
 
  GetSolarData = (cityState) => {
     let totalAC = 0; // console.log('SOLAR DATA get ');
    return API.SolarEnergy(cityState)
          .then((res)=> {
            let ac_Monthly = res.data.outputs.ac_monthly;
              for (let i = 0; i<ac_Monthly.length; i++) {
                  let item = Math.round(ac_Monthly[i]);
                  ac_Monthly.splice(i,1,item);
                  totalAC += parseInt(item)
              }
              this.setState({ 
                acMonthly: ac_Monthly,
                totalAC: totalAC.toLocaleString()
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
            for (let i = 1; i < 13; i++) {
                let point = res.data[0][i] / 100;
                costArray.push(point)
            }
          this.setState({ costData: costArray })
          return costArray
      })
      .catch((err) => {console.log(err)})
  }
  CalcCostDollars = (costArray, power) => {
    let costDollar =[];   
    let totalCost = 0; 
    for(let i = 0; i < costArray.length; i++) {
      let cost = (costArray[i] * power[i]).toFixed(0);
       costDollar.splice(i ,0, cost)
       totalCost += parseInt(cost);
    }              
        this.setState({ 
          costDollars: costDollar,
          totalCost: totalCost.toLocaleString()
        })
  }

  CalcCarbonOffset = (power) => {
    // console.log('CALC -CARBON')
    let totalCarbon = 0;
    let carbon;
    let carbonData = [];
    for(let i=0; i<power.length ; i++){
      carbon = (2.1 * power[i]).toFixed(0);
          carbonData.push(carbon);
          totalCarbon += parseInt(carbon);
  } 
    this.setState({ 
      carbonData: carbonData,
      totalCarbon: totalCarbon.toLocaleString()
    })
    return carbonData
  }
  
  handleChange(event) {
    this.setState({ location: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    let loca = this.state.location.split(',');
    let city = loca[0].trim().toUpperCase()
    let region = loca[1].trim().toUpperCase()
    this.setState({
      city: city,
      region: region,
      location: `${city},${region}`
    })     
    setTimeout(this.ReChartOne(), 1000)
  }

render() {
    return(
      <div className="container my-3">
         <blockquote className="text-left my-3">
                  <p>With a typical 4 kW residential solar power system, you can expect to offset nearly 200,000 pounds of CO2 over 25 years. If that sounds like a lot, it's because it is. That level of offset emissions is equal to planting about 2,316 trees. ... Using solar power, you're reducing your electricity demand on the grid.</p>
                  <footer className="text-muted text-right">Solar Source Guide <cite title="Source Title">The Environmental Benefits of Solar Power</cite></footer>
              </blockquote> 
          <form onSubmit={this.handleSubmit} className="col-sm-7">
              <div className="form-content">
                <div className="form-group">
                  <input onChange={this.handleChange} id='locaInput' className="rounded" placeholder="City, St" type="text" />
                  <button name="calculate" className="form-content btn btn-sm btn-success">Go Go!</button>
                </div>    
              </div> 
               <div className="text-muted my-2">Currently viewing data for {this.state.city}, {this.state.region}.</div>
          </form>
          
          <div className="row">
            <div className="py-3 col-sm-7">  
              <SolarData city={this.state.city} region={this.state.region} solarData={this.state.acMonthly} />
             </div> 
            <div className="col card rounded align-self-center m-0 py-3" style={TotalStyle}> 
              <h5 className="card-block text-left"> In the past decade, the efficiency of solar panels has nearly doubled while the total cost has been cut in half. In {this.state.location}, you can expect to harvest <strong>{ this.state.totalAC }</strong> Kwh of solar per a year.</h5>
            </div>
             
          </div>
          <div className="row">
            <div className="py-3 col-sm-7">
              <CostData city={this.state.city} region={this.state.region} costData={this.state.costDollars} />
            </div>
            <div className="col card rounded align-self-center m-0 py-3" style={TotalStyle1}> 
              <h5 className="card-block text-left"> Looking for a worthwhile investment? Depending where you live, the value of a home with solar panels can increase by $15,000 to $20,000...Today, a home owner can expect to save ${ this.state.totalCost } a year.</h5>
            </div>
          </div>
          <div className="row">
            <div className="py-3 col-sm-7">
              <CarbonOffset city={this.state.city} region={this.state.region} carbonData={this.state.carbonData} />
            </div>
            <div className="col card rounded align-self-center m-0 py-3" style={TotalStyle2}> 
              <h5 className="card-block text-left"> On average, electricity sources emit 1.222lbs CO2 per kWh (0.0005925 metric tons CO2 per kWh). With the typical residential solar panel system, you can expect to offset approximately<strong> { this.state.totalCarbon } </strong>lbs of CO2 annually!</h5>
            </div>
          </div>

        </div>
         
    )
  }
} 
  export default Home;