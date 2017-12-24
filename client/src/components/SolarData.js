import React from 'react';
import Axios from 'axios';
import {Bar} from 'react-chartjs-2';
// import IpLocation from './IpApiService';

class SolarData extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            acMonthly: [],
            location: 'boulder,co'
        }
    }      
    componentWillMount() {
         this.SolarEnergy();                    
    }        
    SolarEnergy = () => {
        let query = `https://developer.nrel.gov/api/pvwatts/v5.json?api_key=qmVVrtllpIclFnaKUH3KayluRYB1bjnvZFOtgUAu&address=${this.state.location}&system_capacity=4&azimuth=145&tilt=44&array_type=2&module_type=1&losses=11`
        Axios.get(query)
        .then((response)=> {
            console.log(response.data)
            let ac_Monthly = response.data.outputs.ac_monthly;
            for (let i = 0; i<ac_Monthly.length; i++) {
                let item = Math.round(ac_Monthly[i]);
                ac_Monthly.splice(i,1,item);
            }
            this.setState({
                acMonthly: ac_Monthly
            })
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    data = () => {
        return(
           {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                {
                    label: 'Kwh',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.state.acMonthly
                }
                ]
            } 
        )
    }
    
    render() {
        return (
            <div>
            <h4 className="text-muted">KWh Gained</h4>
                <Bar
                    data={this.data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true
                    }}
                />
            </div>
        )
    }
}

export default SolarData