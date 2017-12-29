import React from 'react';
import {Bar} from 'react-chartjs-2';
import API from '../util/API';

class CostData extends React.Component {
    constructor(props) {
        console.log(props);
        super(props)
        this.state = ({
            region: props.region,
            acMonthly: [1,2,3,4]
        })
    }
    componentWillMount() {   
        console.log(this.state.region)
        API.AvgMonthlyCost(this.state.region)
        .then((res)=> {
            console.log(res.data)
            let cost = res.data[0]
            console.log(this.state.acMonthly)
        })
        .catch((err)=> {
            console.log(err)
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