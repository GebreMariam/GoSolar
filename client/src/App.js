import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Checkout from './components/Checkout';
import Footer from './components/Footer'
import './components/Footer.css';
import Header from './components/Header';
import './components/Header.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Register from './components/Register';


class App extends Component {

  state = {
      user: '',
      product: [],
      cartItems: [111]
  };
  handleProductSelect = (product) => {
    let prod = product;
    this.setState({
      product: prod
    })
  }

  
  render() {  
    let routerProps = {
      product: this.state.product,
      cartItems: this.state.cartItems
    }
    return (
        <div className="App page divStyle">
          <div className="content">
            <Header user={this.state.user}/>
                <Switch> 
                  <Route exact path="/" component={Home}  /> 
                  <Route path="/about" component={About} />  
                  <Route path="/Login" component={Login} />
                  <Route path="/products" render={(routeProps) =>(<Products {...routerProps} />)} />
                  <Route path="/productDetails" render={(routeProps) =>(<ProductDetails {...routerProps} />)} />
                  <Route path="/Register" component={Register} /> 
                  <Route path="/Orders" component={Orders} /> 
                  <Route to="checkOUT" path="/Checkout"  component={Checkout} /> 
                </Switch>
          </div>  
            <Footer />
        </div>           
    );
  }
}

export default App;
