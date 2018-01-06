import React from 'react'
import API from '../util/API';

  class ProductDetails extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        path: props.location.pathname,
        productDetails: [],
        cart: []
      }
    }
    onAddToCart (item) {
      this.setState({
        cart: this.state.cart.push(item)
      })
    }
    componentWillMount() {
      console.log(this.state.path)
      API.ProductDetails(this.state.path)
      .then((res)=> {
        console.log('returned prod DETAIL ' ,res.data)
        let detail = [];
        detail.push(res.data)
        console.log(detail);
        this.setState({
          productDetails: detail
        })
        console.log(this.state.productDetails[0]);
      })
      .catch((err)=> {
          console.log(err) 
      });   
    }

    render() {
        const ProdDetail = this.state.productDetails.map((product) => {
          console.log(product.imgURL[0])
          return(
            <div className="row text-left p-5" key={product._id} style={{ backgroundColor: 'white' }}>
              <div className="col-sm">
                <img className= "img-responsive justify-content-sm-start" src={product.imgURL[0]} alt="prod" style={{ "height": 122, "width": 'auto'}}/>
              </div>
            
              <div className="col-sm mx-auto my-2 text-primary">
                  <div className="m-2 justify-content-sm-start">{product.name}</div> 
                  <div className="mx-auto">${product.price}</div>  
                  <div className="mx-3"> Qty.
                    <input type="number" className="m-2" name="qty" min="1" max="5" /> 
                    <button onClick={() => this.onAddToCart(product)} className="mx-auto btn btn-sm btn-success">Add to Cart</button> 
                  </div>
              </div>
              <div className="pr-2">   
                <p className="text-muted">{product.briefDescription}</p>
                <p className="text-muted">{product.fullDescription}</p>  
                <p className="text-muted">Manufacturer: {product.manufacturer}</p> 
                <p className="text-muted">Module Type: {product.moduleType}</p> 
                <p className="text-muted">Remaining Stock: {product.stock}</p> 
                <p className="text-muted">Efficiency: {product.efficiency}</p> 
                <p className="text-muted">Power Output: {product.power}</p> 
              </div>
            </div>
          )
        })  

       return(
       <div>
          <div className="container">
          <div className="row text-gray">
            <span className="text-left text-muted col-sm">
              <h5>Product Details</h5>
            </span>
            <span className="text-right pr-5 text-muted col-sm">
              <h4>Cart <badge> | {'length of some array'+ 4}</badge></h4>
            </span>
        </div>   
        <hr/>
            <form>
                {ProdDetail}
            </form>
          </div>
        </div>
      )
   
  } 
  }
  export default ProductDetails;