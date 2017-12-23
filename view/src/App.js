import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer'
import './components/Footer.css';
import Header from './components/Header';
import './components/Header.css';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import Register from './components/Register';
import img from './homeimage.jpg';



class App extends Component {
  render() {
    return (
        <div s className="App">
          <Header />
              <Switch> 
                <Route exact path="/" component={Home}/> 
                <Route path="/about" component={About}/>  
                <Route path="/Login" component={Login}/>
                <Route path="/products" component={Products}/>
                <Route path="/Register" component={Register}/> 
              </Switch>  
          <Footer />
        </div>           
    );
  }
}

export default App;
