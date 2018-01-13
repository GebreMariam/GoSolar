import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
      cartItems: [],
      product: [],
      loggedIn: false,
      error: ''
  };

handleSignIn = (user) => {
  API.Login(user)
  .then((res) => {
      console.log('SignIn get ', res.data)
      if(res.data.firstName) {
         this.setState({
          user: res.data.firstName,
          userId: res.data._id,
          loggedIn: true
      })  
       console.log(this.state.user , ' , ' , this.state.loggedIn) /// i am getting this
       return <Redirect to={Checkout} />;
      } 
  })
  .catch((err) =>{
      console.log(err);
  })
} 

routerProps = {
      product: this.state.product,
      cartItems: this.state.cartItems,
      user: this.state.user,
      userId: this.state.userId,
      handleSignIn: this.handleSignIn,
      loggedIn: this.loggedIn
    }
  render() {  
   
    return (
      <div className="App page divStyle">
        <div className="content">
          <Header user={this.state.user} />
              {/* <Switch>  */}
                <Route exact path="/" render={(routerProps) => (<Home {...this.routerProps} />)}  /> 
                <Route path="/about" component={About} />  
                <Route path="/Login" render={(routerProps) => (<Login  {...this.routerProps} />)} />
                <Route path="/products" render={(routeProps) =>(<Products {...this.routerProps} />)} />
                <Route path="/productDetails" render={(routeProps) =>(<ProductDetails {...this.routerProps} />)} />
                <Route path="/Register" component={Register} /> 
                <Route path="/Orders" component={Orders} /> 
                <Route path="/Checkout" render={() => (this.loggedIn ? (<Redirect to="/Checkout" />) : (<Login {...this.routerProps} />))} /> 
              {/* </Switch> */}
        </div>  
            <Footer />
        </div>           
    );
  }
}

export default App;
