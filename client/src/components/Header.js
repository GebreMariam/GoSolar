//./components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../util/favicon.png';

const logo = './favicon.png';

class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            user: props.user,
            loginLink: '/login',
            isHidden: false
        }    
    }
    componentWillMount () {
        if(!this.state.user) {
            console.log(this.state.user);
            this.setState({
                user: "Login",
                loginLink: '/login',
                isHidden: false
            })
        } else {
            this.setState({
                user: `Welcome ${this.state.user}!`,
                loginLink: '/',
                isHidden: true
            })
        }
    }
    render() {
         return (
        <div className="header">
                <div>                
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand"><img src={logo} width={44}/> GoSolar</Link>
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
                            <li className="nav-item" id='logout'> {this.state.isHidden &&
                                <Link to="/logout" className="nav-link">Logout</Link> }
                            </li>
                            <li className="nav-item">
                                <Link to={this.state.loginLink} className="nav-link">{this.state.user}</Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>            
        </div>
         
        )
    }
       
    }
export default Header;