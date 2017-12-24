import React from 'react';
import Axios from 'axios';

class CostData extends React.Component {
    LocationData(value) {
        Axios.post("http://localhost:4040/solarData",{location: value})
        .then((response)=> {
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <p className="alert alert-secondary"> This is cost Data</p>
            </div>
        )
    }
  
}

export default CostData