import Axios from 'axios';

export default {
    AvgMonthlyCost: (region) => {
      console.log(region)
      return Axios.get("/CostData/"+ region)
    },     
    Products: () => {
        return Axios.get("/products")
      },   
    ProductDetails: (id) => {
        // console.log(id)
        return Axios.get("/productDetails/" + id)
    },      
    LocationData: ()=> {
        // https://ipapi.co/8.8.8.8/json/
        // https://ip-api.com/json
        return Axios.get("https://ipapi.co/json");
    },
    SolarEnergy: (location) => {
        // console.log(location)
        return Axios.get(`https://developer.nrel.gov/api/pvwatts/v5.json?api_key=qmVVrtllpIclFnaKUH3KayluRYB1bjnvZFOtgUAu&address=${location}&system_capacity=4&azimuth=145&tilt=44&array_type=2&module_type=1&losses=11`)
    },     
    Orders: (user) => {
        // console.log('Getting Orders for User ' + user)
          return Axios.get("/orders/" + user)
    },
    CreateOrder: (order) => {
        console.log(order) 
        return Axios.post("/createOrder", order)
    },
    //user routes
    SignUp: (user) => {
        console.log('SignUp ',user)
        return Axios.post("auth/signup", user)
    },    
    Login: (user) => {
        console.log('User ', user)
          return Axios.post("auth/login", user)
    }
}