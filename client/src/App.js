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
  
  render() {
    return (
        <div className="App page divStyle">
          <div className="content">
            <Header />
                <Switch> 
                  <Route exact path="/" component={Home}/> 
                  <Route path="/about" component={About}/>  
                  <Route path="/Login" component={Login}/>
                  <Route path="/products" component={Products}/>
                  <Route path="/productDetails" component={ProductDetails}/>
                  <Route path="/Register" component={Register}/> 
                  <Route path="/Orders" component={Orders}/> 
                  <Route path="/Checkout" component={Checkout}/> 
                </Switch>
          </div>  
            <Footer />
        </div>           
    );
  }
}

export default App;
