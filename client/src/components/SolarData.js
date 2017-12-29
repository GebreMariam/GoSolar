import React from 'react';
import {Bar} from 'react-chartjs-2';
import API from '../util/API';

const SolarData = (props) => {
    let location = props.city+', '+props.region
    console.log(location)
    API.SolarEnergy(props.city+', '+props.region) 
        const data = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Kwh',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [1,3,2,33,44,55,23,123]
                    }
                ]
    }
    return (
            <div>
            <h4 className="text-muted">KWh Gained {location} </h4>
                <Bar
                    data={data}
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
export default SolarData