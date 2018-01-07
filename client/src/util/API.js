import Axios from 'axios';

export default {
    AvgMonthlyCost: (region) => {
      console.log(region)
      return Axios.get("/CostData/"+ region)
    },     
    Products: () => {
        return Axios.get("/products")
      },

    //   ProductDetails: (path) => {
    //     console.log(`api/productDetails/${path}`)
    //     path = `api/productDetails/${path}`;
    //     return Axios.get( path)
    // },      

    ProductDetails: (id) => {
        console.log(id)
        return Axios.get("/productDetails/" + id)
    },      
    LocationData: ()=> {
        return Axios.get("http://ip-api.com/json");
    },
    SolarEnergy: (location) => {
        console.log(location)
        return Axios.get(`https://developer.nrel.gov/api/pvwatts/v5.json?api_key=qmVVrtllpIclFnaKUH3KayluRYB1bjnvZFOtgUAu&address=${location}&system_capacity=4&azimuth=145&tilt=44&array_type=2&module_type=1&losses=11`)
    },     
    Orders: (user) => {
        console.log('Getting Orders for User ' + user)
          return Axios.get("/orders/" + user)
    },
    //user routes
    SignUp: (user) => {
        console.log(user)
        return Axios.post("auth/signup")
    },    
    Login: (user) => {
        console.log('login email ' + user.email)
          return Axios.post("auth/login")
    }
}