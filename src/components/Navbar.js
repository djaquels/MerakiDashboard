import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Navbar.css';
import hippo from '../images/hippo.png';

class Navbar extends React.Component {
    render(){
       return(
        <div className="Navbar">
        <div className="container-fluid">
            <Link to="/">
                 <img className="logo" src={hippo}/>
                 <span className="font-weight-light">Hippo</span><span className="font-weight-bold">Bank</span>
            </Link>
            <div className="links">
                <Link to="/login">
                <span className="font-weight-light">Login</span>
                </Link>
                <Link to="/about">
                <span className="font-weight-light">About</span>
                </Link>
            </div>
        </div>
        </div>
       )
    }
}

export default Navbar;