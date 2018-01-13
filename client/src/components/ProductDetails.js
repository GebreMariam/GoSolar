import React from 'react'
import { Link } from 'react-router-dom'
import API from '../util/API';

  class ProductDetails extends React.Component {
      constructor(props) {
        console.log(props)
        super(props)
        this.state = {
        id: window.location.pathname,
        productDetails: this.props.product,
        isHidden: true,
        cart: [{name: 'NAME', price: 123}]
      }           
    }
    componentWillMount() {
        this.loadDetails();
      if(this.state.cart.length > 0) {
        this.setState({ isHidden: false })
      };
    };
    loadDetails = () => {
      let prodId = this.state.id.split('/')
      API.ProductDetails(prodId[2])
      .then((res)=> {
        let detail = [];
        detail.push(res.data)
        this.setState({ productDetails: detail })
      })
      .catch((err)=> { console.log(err) });   
      };
 
    onAddToCart = (e)=> {
      e.preventDefault();
      console.log('ADDING TO CART ', this.refs.price.value , ' ' , this.refs.prodName.value)
      let cartItem = {};
        cartItem['prodName'] = this.refs.prodName.value;
        cartItem['qty'] = this.refs.qty.value;
        cartItem['price'] = this.refs.price.value;
        cartItem['url'] = this.refs.imgURL.value;
      let theCartItem = this.state.cart
        theCartItem.push(cartItem)
      this.setState({
        cart: theCartItem
      });      
      console.log('car after ADD ',this.state.cart)
      return false;
    };   
    render(props) {
        const ProdDetail = this.state.productDetails.map((product) => {
          console.log(product)
          let imgUrl = product.imgURL[0].toString();
          return(
            <form key={product._id} onSubmit={ ()=> this.onAddToCart(product) }style={{ backgroundColor: 'white' }}>

              <div className="row text-left p-2" >
                <div className="col-sm-12">
                  <img className= "img-responsive" src={imgUrl} ref='imgURL' alt="prod" style={{"width": 'auto'}}/>
                </div>
              </div>
                <div className="row mt-4">
                  <div className="col-md-12 align-middle">
                      <span className="col-sm text-left py-2" ref="prodName">{product.name}</span> 
                      <span className="col-sm py-2" ref="price"> ${product.price}</span> 
                      <span className="col-sm offset-sm-3" >Qty.</span>
                      <input type="number" className="col-sm-2 mx-2" ref="qty" min="1" max="55" /> 
                      <input type="submit" className="col-sm-2 btn btn-sm btn-success" value="Add to Cart"></input> 
                  </div>
                </div>
          <div className="row text-left p-5">   
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
            </form>
          )
        })  

       return(
       <div>
          <div className="container">
          <div className="row text-gray">
            <span className="text-left text-muted align-left col-sm"> 
              <h5>Product Details</h5>
            </span>   
            <span className="text-right col-sm">
              <Link to='/Checkout'  params= { {cartItems: this.state.cart} } >
                {!this.state.isHidden && <h4>Cart <span className="border rounded border-white"> {this.state.cart.length}</span></h4> }
              </Link>
            </span>
          </div>   
          <hr />
            <div>
              {ProdDetail}
            </div>
          </div>
        </div>
      )
   
  } 
  }
  export default ProductDetails;