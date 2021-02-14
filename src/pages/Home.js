import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import './styles/Home.css';
import logo from '../images/hippo.png';

export default class Homme extends Component {
    render() {
        return(
            <div className="container">
            <h1 className="center white">Welcome To Hippo Meraki </h1>
            <h2 className="center white"> The FrontEnd Page for your CISCO Meraki APIS Products</h2>
            <div className="center white">
            <Link to="/dashboard">
                <span className="btn btn-primary">show</span>
            </Link>
            </div>
            </div>
        )
    }
}