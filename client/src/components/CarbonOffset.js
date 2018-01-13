import React from 'react';
import {Bar} from 'react-chartjs-2';

const CarbonOffset =(props) =>  {
    // console.log(props)
        
    let chartStyle = {
            backgroundColor: 'rgba(255, 255, 255,0.8)'
        }

    let CarbonOffset = props.carbonData
    let data = () => {
        return({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
            datasets: [{
                label: 'lbs CO2 Offset',
                fontSize: 12,
                backgroundColor: 'rgba(43, 144, 11,.9)',
                borderColor: 'rgba(33,99,132,.1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(33,99,132,1)',
                data:  CarbonOffset //work pending
           }]
        }) 
    }
        return (
            <div className='mt-3'>
                <h5 className="text-center text-success" ><strong></strong></h5>
                    <div style={chartStyle}>
                        <Bar
                        data={data()}
                        backgroundColor={'rgba(255, 255, 255,1)'}                 
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

export default CarbonOffset;