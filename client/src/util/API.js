import Axios from 'axios';

export default {
    AvgMonthlyCost: (region) => {
      return Axios.get("/CostData/"+ region)
    },      
    LocationData: ()=> {
        return Axios.get("http://ip-api.com/json");
    },
    SolarEnergy: (location) => {
        Axios.get(`https://developer.nrel.gov/api/pvwatts/v5.json?api_key=qmVVrtllpIclFnaKUH3KayluRYB1bjnvZFOtgUAu&address=${location}&system_capacity=4&azimuth=145&tilt=44&array_type=2&module_type=1&losses=11`)
        .then((response)=> {
            // console.log(response.data)
            let ac_Monthly = response.data.outputs.ac_monthly;
            for (let i = 0; i<ac_Monthly.length; i++) {
                let item = Math.round(ac_Monthly[i]);
                ac_Monthly.splice(i,1,item);
            }
        // console.log(ac_Monthly);
        return ac_Monthly;
        })
        .catch((error)=> {
            console.log(error)
        })  
    }
    
}