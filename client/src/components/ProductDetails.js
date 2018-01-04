import React from 'react'
import API from '../util/API';

  class ProductDetails extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        path: props.location.pathname,
        productDetails: []
      }
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
          return(
            <div className="text-left p-5" style={{ backgroundColor: 'white' }}>
                <img className= "img-responsive justify-content-sm-start" src={product.imgURL[0]} alt="prod" style={{ "height": 122, "width": 'auto'}}/>
                <button className="mx-auto btn btn-sm btn-success">Add to Cart</button>
              <div className="row mx-auto text-primary"> 
                    <div className="justify-content-sm-start">{product.name}</div> 
                    <div className="mx-auto">${product.price}</div> 
                  </div>
              <div className="pr-2">   
                <p className="text-muted">{product.briefDescription}</p>
                <p className="text-muted">{product.fullDescription}</p>  
                <p className="text-muted">Manufacturer: {product.manufacturer}</p> 
                <p className="text-muted">Module Type: {product.moduleType}</p> 
                <p className="text-muted">Current Inventory: {product.stock}</p> 
                <p className="text-muted">Efficiency: {product.efficiency}</p> 
                <p className="text-muted">Power Output: {product.power}</p> 
              </div>
            </div>
          )
        })  

       return(
       <div>
          <div className="container">
            {ProdDetail}
          </div>
        </div>
      )
   
  } 
  }
  export default ProductDetails;