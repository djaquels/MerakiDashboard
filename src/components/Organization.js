import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Organization.css';

class Organization extends React.Component {
        render(){
            return <div className="organization"> 
                <div>
                    <h1>{this.props.name}</h1>
                    <Link to={this.props.url}>
                        <span className="font-weight-light linkd">Visit</span>
                    </Link>
                    <Link to="/network">
                        <span className="font-weight-light linkd ">Networks</span>
                    </Link>
                </div>
            </div>
        }
}

export default Organization;