import React from 'react';
import {Bar} from 'react-chartjs-2';

const CostData =(props) =>  {
    console.log(props)
        
    let chartStyle = {
            backgroundColor: 'rgba(255, 255, 255,0.8)'
        }

    let MonthlyCost = props.costData
    let data = () => {
        return({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
            datasets: [{
                label: 'Avg. Monthly Cost Savings',
                fontSize: 12,
                backgroundColor: 'rgba(143, 170, 19,0.6)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data:  MonthlyCost //work pending
           }]
        }) 
    }
        return (
            <div className='mt-3'>
                <h5 className="text-center text-success"> </h5>
                    <div style={chartStyle}>
                        <Bar
                        data={data()}
                        backgroundColor={'rgba(44,265,44,1)'}                 
                        width={111}
                        height={50}
                        fontSize={12}
                        options={{
                            maintainAspectRatio: true,
                            responsive: true
                        }}
                        />
                    </div>
             </div>
        )
    }

export default CostData