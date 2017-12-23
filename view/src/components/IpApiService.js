import Axios from 'axios';

class IpApiService {
    LocationData() {
        Axios.get("http://ip-api.com/json")
        .then((response)=> {
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })
    }
}

export default IpApiService