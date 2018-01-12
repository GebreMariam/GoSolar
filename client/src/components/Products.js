import React from 'react';
import { Link } from 'react-router-dom'
import API from '../util/API';

  class Products extends React.Component{
    constructor(props) {
      super(props) 
      console.log(props)
      this.state = {
        products: [],
        cart: [],
        isHidden: true
      }
    }
    componentWillMount() {
      this.loadProducts();
     }  
     loadProducts = () => {
       API.Products()
      .then((res)=> { // console.log('PRODUCTS name ' ,res.data)
          let products = [];
          for (let i = 0; i < res.data.length; i++) {
            products.push(res.data[i])
          }
          this.setState({ products: products }) // console.log('products ', this.state.products[0].Power) //  console.log('products ', this.state.prod[0].name)
      })
      .catch((err)=> { console.log(err) });
      console.log(this.state.cart.length)
    }
   
      //toggle cart visibility
    componentDidMount() {
       if(this.state.cart.length > 0) {
        this.setState({
          isHidden: false
        })
      }
    }
     
    render() {
      const Prod = this.state.products.map((product)=> {     
        console.log(product) 
        return (
            <div key={product._id} className="text-left m-3 col-sm-3 border border-silver" style={{ backgroundColor: 'white' }}>
              <Link to={`/productDetails/${product._id}`} params={{ id: product._id }} >
              <img className= "img-responsive" src={product.imgURL[0]} alt="prod" style={{ "height": 122, "width": 'auto'}}/>
                <div className="row mx-auto text-primary"> 
                  <div className="justify-content-sm-start">{product.name}</div> 
                  <div className="mx-auto">${product.price}</div> 
                </div>
              </Link>
              <p className="text-muted">{product.fullDescription}</p> 
                <button className="mx-auto btn btn-small btn-success">Add to Cart</button>
            </div>
            )
      });
      return(
         <div className="container">
          <div className="row text-gray text-muted">
            <span className="text-left col-sm">
              <h4>Products</h4>
            </span>
            <span className="text-right col-sm">
              {!this.state.isHidden && <h4>Cart <span className="border rounded border-secondary"> {this.state.cart.length}</span></h4> }
            </span>
          </div>
         <hr/> 
         <br />           
          <div className="row justify-content-sm-center">{Prod}</div>
        </div>
      )
    }
  }

  export default Products;