import React from 'react'


  const Checkout = ({cartItems}) => {
    if(!cartItems) {
        return <div className="col-md-8">Loading...</div>
    }
    const cartList = cartItems.map(item => {
        return (
            <div className="row mx-auto text-primary"> 
                <div className="justify-content-sm-start">{item.name}</div> 
                <div className="mx-auto">${item.price}</div> 
            </div>
        )
    })
   return(
    <div>
      <h2>Checkout Page</h2>
      {cartList}
    </div>
   ) 
}

export default Checkout;