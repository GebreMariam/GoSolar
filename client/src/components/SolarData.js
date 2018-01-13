import React from 'react';
import {Bar} from 'react-chartjs-2';

class SolarData extends React.Component {
    componentWillMount(){
        // console.log(this.props)
    }    
      
    render() {
        // console.log(this.props.data)
        let chartStyle = {
            backgroundColor: 'rgba(240,255,240,0.4)'
        }
        let MonthlyPower = this.props.solarData;
        let data = () => {
            return({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Kwh',
                        backgroundColor: 'rgba(196, 170, 19,0.7)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(155,99,32,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: MonthlyPower
                    }
                ]
            }) 
        }        
        return (
            <div>
            <h5 className="text-center text-Silver">Avg. Monthly Kwh {this.props.city}, {this.props.region} </h5> 
                <div style={chartStyle} className="rounded">
                    <Bar
                        data={data()}
                        width={100}
                        height={50}
                        options={{
                            maintainAspectRatio: true,
                            responsive: true
                        }}
                    />
                </div>
            </div>
        )
    }
   
}
export default SolarData