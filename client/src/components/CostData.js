import React from 'react';
import {Bar} from 'react-chartjs-2';
import API from '../util/API';

class CostData extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            state: '',
            acMonthly: [1,2,3,4]
        })
    }
    componentWillMount() {
        API.AddCost({
            state: "CO",
            jan: 10.97,
            feb: 10.97,
            Mar: 10.97,
            Apr: 10.97,
            May: 10.97,
            Jun: 10.97,
            Jul: 10.97,
            Aug: 10.97,
            Sep: 10.97,
            Nov: 10.97,
            Dev: 10.97,
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));    
        API.AvgMonthlyCost(this.state.state)
        .then((response)=> {
            console.log(response)
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
             <h4 className="text-muted">$ Saved </h4>
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

export default CostData