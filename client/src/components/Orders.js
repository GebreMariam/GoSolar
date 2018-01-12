import React from 'react'
// import { Redirect } from 'react-router-dom';
import API from '../util/API';
import { Link } from 'react-router-dom';

  class Orders extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user: "5a13cb9aa79a67182fa42942",
        orders: []
      }
    }
    componentWillMount() {
      API.Orders(this.state.user)
      .then((res) => {
        console.log(res.data[0]);
        let orders = [];
        for (let i = 0; i< res.data.length; i++) {
          orders.push(res.data[i])
        } 
        this.setState({
          orders: orders
        })        
        console.log(orders)
      }) 
      .catch((err) => { 
        console.log(err) 
      })
    }
    // ObjectId("5a13cb9aa79a67182fa42942")
    render() {
      console.log(this.state.orders)
      const Orders = this.state.orders.map((order) => {
        return(
          <div className="card text-left mx-4 col-sm border border-silver" key={order._id} style={{ backgroundColor: '' }}>
            <div className="card-body row" to={`/productDetails/${order._id}`} >
              <Link to={`/productDetails/${order._id}`} >
              <img className= "img-responsive" src={order.imgURL[0]} alt="prod" style={{ "height": 77, "width": 'auto'}}/>
              </Link>
                <div className="card-text col-sm text-left">{order.product}</div> 
                <span className="card-text col-sm justify-content-sm-end">${order.price}</span> 
            </div>
          </div>
        )
      })
      return (
        <div className="container">
          <h5 className="text-left text-gray">Orders </h5> <h5 >  </h5>
          <hr />
          {Orders}
          {/* redirect user to login if checking out and not authenticated? state: passed so that if authenticated the user is routed back to proceed with checkout*/}
          {/* <Redirect to={{pathname: '/login', state: {from: 'location'}}} />} /> */}
        </div>
      )
    }
  }

  export default Orders;