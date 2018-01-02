import React from 'react';
import API from '../util/API';


  class Products extends React.Component{
    constructor(props) {
      super(props) 
      this.state = {
        products: [],
        prod: 'BullShitsssss...'
      }
    }
    componentDidMount() {
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
      return(
         <div>
          <h2>Products....</h2>
            <li>{this.state.products[0].Power}</li>
        </div>
      )
    }
  }


  export default Products;