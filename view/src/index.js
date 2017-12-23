import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import img from './homeimage.jpg';

var sectionStyle = {
    backgroundImage: `url(${img})`
  };

ReactDOM.render(
    <Router style={ sectionStyle }>
        <App />
    </Router>
, document.getElementById('root'));
