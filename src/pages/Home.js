import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import './styles/Home.css';
import logo from '../images/hippo.png';

export default class Homme extends Component {
    render() {
        return(
            <div className="container">
            <h1 className="center white">Welcome To Hippo Bank</h1>
            <h2 className="center white"> Manage all your financial obligations in a friendly manner.</h2>
            <form className="center-container">
                <label for="e-mail" className="register"> E-mail: </label>
                <input type="email" className="e-mail" name="e-mail" id="e-mail" required/>
                <button className=" btn btn-primary"> Sign up </button>
            </form>
            </div>
        )
    }
}