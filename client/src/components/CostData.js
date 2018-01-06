import React from 'react';
import {Bar} from 'react-chartjs-2';

class CostData extends React.Component {
    componentDidMount(props) {   
        console.log(props)
    }
   
    render() { 
        let MonthlyCost = this.props.data
        let data = () => {
            return({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                {
                    label: '$ Saved',
                    backgroundColor: 'rgba(254,69,192,0.6)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data:  [1,2,3,4,5,6,7,8]//MonthlyCost.slice(0,11)
                }
                ]
            })
    }
        return (
             <div className='mt-3'>
             <h5 className="text-center text-black">Avg. Monthly Cost Savings</h5>
                 <Bar
                     data={data()}
                     width={111}
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