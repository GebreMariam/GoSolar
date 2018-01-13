import React from 'react';
import {Bar} from 'react-chartjs-2';

class SolarData extends React.Component {
    componentWillMount(){
        // console.log(this.props)
    }    
      
    render() {
        // console.log(this.props.data)
        let chartStyle = {
            backgroundColor: 'rgba(255, 255, 255,0.8)'
        }
        let MonthlyPower = this.props.solarData;
        let data = () => {
            return({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Avg. Monthly Kwh',
                        fontSize: 12,
                        backgroundColor: 'rgba(196, 170, 19,0.9)',
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
            <h5 className="text-center text-success"> </h5> 
                <div style={chartStyle} className="rounded">
                    <Bar
                        data={data()}
                        width={100}
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
   
}
export default SolarData