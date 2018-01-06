//./components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import About from './About';
// import Home from './Home';
// import Products from './Products';
// import Login from './Login';

const Header = (props) => {
    // console.log(props);
        return (
        <div className="header">
                <div>                
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">GoSolar</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-auto justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" id="orders" className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" id='logout' className="nav-link">Logout</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>            
        </div>
         
        )
    }
export default Header;