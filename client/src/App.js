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
import API from './util/API';


class App extends Component {

  state = {
      user: '',
      userId: '',
      product: [],
      cartItems: [111]
  };
  handleProductSelect = (product) => {
    let prod = product;
    this.setState({
      product: prod
    })
  }
handleSignIn = (user) => {
  API.Login(user)
  .then((res) => {
      console.log('SignIn get ', res.data)
      this.setState({
          user: res.data.firstName,
          userId: res.data._id
      })
  })
  .catch((err) =>{
      console.log(err);
  })
}
  render() {  
    let routerProps = {
      product: this.state.product,
      cartItems: this.state.cartItems,
      user: this.state.user,
      userId: this.state.userId,
      handleSignIn: this.handleSignIn
    }
    return (
      <div className="App page divStyle">
        <div className="content">
          <Header user={this.state.user} />
              <Switch> 
                <Route exact path="/" render={(routerProps) => (<Home {...routerProps} />)}  /> 
                <Route path="/about" component={About} />  
                <Route path="/Login" render={(routerProps) => (<Login {...routerProps} />)} />
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
