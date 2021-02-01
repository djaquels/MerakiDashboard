import React from 'react';

import './styles/Card.css';


class Card extends React.Component {
    render() {
        return(
                <div className="row">
                    <div className="col-sm-6" >
                        <div className="card">
                            <div className="image">
                                <img src={this.props.image}/>
                            </div>
                            <div className="Header">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="Body">
                                <p>{this.props.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card;