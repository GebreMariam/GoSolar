import React from 'react'


  class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [
                {_id: 12344323, name: 'Max Power', price: 11.33, qty: 2, imgURL: './img/csSolar2.png'}, 
                {_id: 333, name: 'GigaWatt 300W', price: 11.33, qty: 2, imgURL: './img/csSolar.png'}
            ], // props.cartItems
            OrderTotal: []
        }
      console.log(props)  
      }
    setTotal = () => {
      let cartItems = this.state.cartItems  
      let prodTotal = 0;
      let qty = 0;
        for (let i in cartItems) {
            console.log(cartItems[i]['price'])
            prodTotal += cartItems[i]['price'] * cartItems[i]['qty']
        }
      console.log(prodTotal)
      let shipping = 0.10 * prodTotal;
      let tax = 0.077 * (prodTotal + shipping);
      console.log(shipping);
      let orderTotal = (prodTotal + shipping + tax).toFixed(2);
      const OrderTotal = [{prodTotal: prodTotal, shipping: shipping, tax: tax, orderTotal: orderTotal  }]
     this.setState({
          OrderTotal: OrderTotal
      })
    } 
    componentWillMount() {
        this.setTotal()
       
    } 
       
    render() { 
        if(!this.state.cartItems) {
            return <div className="col-md-8">Loading...</div>
        } 
       
        const cartList = this.state.cartItems.map(item => {
            return (
                <div className="card m-3 border border-gray" key={item._id}>
                    <div className="row card-body py-10" >
                            <img src={item.imgURL} style={{"height": 55, "width": 'auto'}} className="card-img-left img-responsive" /> 
                            <span className="card-title pl-3 mb-1 justify-content-sm-bottom">{item.name}</span> 
                        <div className="col-sm text-right">

                            <label className="py-auto">Quantity:</label>
                            <span type="text" className="pr-4 form-group"> {item.qty}</span>
                            
                            <label>Price:</label>
                            <span className="px-2 form-group">${item.price.toFixed(2)}</span>
                            <input type="submit" className="mx-auto btn btn-sm btn-warning" value="Remove" /> 
                        </div>
                    </div>
                </div>
            )
        })
        const cartTotal = this.state.OrderTotal.map(line => {
            return (
                <div className="card m-3 col-sm border border-gray" key={0}>
                    <div className="row card-body py-10" >
                            {/* <img src={item.imgURL} style={{"height": 55, "width": 'auto'}} className="card-img-left img-responsive" />  */}
                            {/* <span className="card-title pl-3 mb-1 justify-content-sm-bottom">{item.name}</span>  */}
                        <div className="col-sm text-right">
                            <div className="">
                                <label className="text-right">Subtotal:</label>
                                <span className="pl-4 text-right"> ${line.prodTotal.toFixed(2)}</span>
                            </div>
                            <div className="">
                                <label className="text-right">Shipping:</label>
                                <span className="pl-4 text-right"> ${line.shipping.toFixed(2)}</span>
                            </div>
                            <div className="">
                               <label className="py-auto text-right">Tax:</label>
                               <span className="pl-4 text-right"> ${line.tax.toFixed(2)}</span>  
                            </div>
                            <hr />
                            <div>
                                <label>Order Total</label>
                                <span className="px-2 form-group">${line.orderTotal}</span> 
                            </div>
                           
                            <input type="submit" className="mx-auto btn btn-success" value="Place Order" /> 
                        </div>
                    </div>
                </div>
            )
        }) 
       return(
            <div className="container">
                <h5 className="text-right text-muted">Checkout ({cartList.length})</h5>
                <hr />
                <div className="row">
                    <div className="col-sm-7">
                     {cartList}
                    </div>
                    <div className="col-sm-4">
                     {cartTotal}
                    </div>
                </div>    
            </div>
        )  
    }
   
}

export default Checkout;