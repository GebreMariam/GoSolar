import Axios from 'axios';

export default  {
    LocationData: ()=> {
       return Axios.get("http://ip-api.com/json");
        }
    };
