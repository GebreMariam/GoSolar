import Axios from 'axios';

class SolarDataService {
    LocationData(value) {
        Axios.post("http://localhost:4040/solarData",{location: value})
        .then((response)=> {
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })
    }
}

export default SolarDataService