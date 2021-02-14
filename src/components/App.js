import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';

import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard'
import Network from '../pages/Network'
function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/network" component={Network}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;