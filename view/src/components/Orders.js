import React from 'react'


  const Orders = (props) => (
    <div>
      <h2>Orders Page</h2>
      {/* redirect user to login if checking out and not authenticated? state: passed so that if authenticated the user is routed back to proceed with checkout*/}
      <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />

    </div>
  )


  export default Orders;