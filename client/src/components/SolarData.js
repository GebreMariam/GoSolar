import React from 'react';
import {Bar} from 'react-chartjs-2';

class SolarData extends React.Component {
    componentWillMount(){
        // console.log(this.props)
    }    
      
    render() {
        // console.log(this.props.data)
        let MonthlyPower = this.props.data;
        let data = () => {
            return({
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Kwh',
                        backgroundColor: 'rgba(255,29,132,0.7)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(155,99,32,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: MonthlyPower.slice(0,11)
                    }
                ]
            }) 
        }        
        return (
            <div>
            <h5 className="text-center text-black">Avg. Monthly Kwh - <strong>{this.props.city}, {this.props.region} </strong></h5> 
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
        )
    }
   
}
export default SolarData