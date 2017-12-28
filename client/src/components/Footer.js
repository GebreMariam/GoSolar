//./components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


// import style from "./Footer.css";

const Footer = (props) => {
    // console.log(props);
        return (
        <div className="footer">
                <nav className="navbar navbar-expand-lg clearfix navbar-light bg-light">
                    <a className="navbar-brand" href="/">GoSolar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/about" className="nav-link">Installers</Link> 
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Some Link</Link>
                        </li>
                        <li className="nav-item orders">
                        <Link to="/" className="nav-link">Other Link here</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Energy Storage</Link>
                        </li>
                    </ul>
                    </div>
                   
                </nav>        
            
        </div>
         
        )
    }
export default Footer;