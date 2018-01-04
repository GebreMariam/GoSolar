import React from 'react';
import { Link } from 'react-router-dom'
import API from '../util/API';


  class Products extends React.Component{
    constructor(props) {
      super(props) 
      this.state = {
        products: [],
        prod: 'BullShitsssss...'
      }
    }
    componentWillMount() {
      API.Products()
      .then((res)=> {
          console.log('PRODUCTS name ' ,res.data[0])
          let products = [];
          for (let i = 0; i < res.data.length; i++) {
            products.push(res.data[i])
          }
          this.setState({
            products: products,
            prod: res.data

          }) 
       console.log('products ', this.state.products[0].Power)
       console.log('products ', this.state.prod[0].name)

      })
      .catch((err)=> {
        console.log(err) 
      })      
    }

    render() {
      const Prod = this.state.products.map((product)=> {
        return (
              
          <div className="text-left m-3 col-sm-3 border border-silver" style={{ backgroundColor: 'white' }}>
            <Link to={`/productDetails/${product._id}`} ><img className= "img-responsive" src={product.imgURL[0]} alt="prod" style={{ "height": 122, "width": 'auto'}}/>
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
         <div className="">
              <span>Products.... </span>
            <div className="row justify-content-sm-center">{Prod}</div>
        </div>
      )
    }
  }


  export default Products;