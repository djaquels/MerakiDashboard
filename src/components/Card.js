import React from 'react';

import './styles/Card.css';



const icons = {"camera" : <i class="fas fa-video"></i> ,
                "appliance":<i class="fas fa-blender-phone"></i>,
                "switch":<i class="fas fa-network-wired"></i>,
                "wireless":<i class="fas fa-wifi"></i>,
                "systems manager":<i class="fas fa-people-carry"></i>
};

class Card extends React.Component {
    render() {
        return(      
                    <div className="col-sm-3" >
                        <div className="card">
                            <div className="header">
                                <h1>{this.props.name}</h1>
                            </div>
                            <div className="id">
                                <p>{this.props.id}</p>
                            </div>
                            <div>
                                <span className={this.props.enabledMeraki.toString()}> Enabled </span>
                            </div>
                            <div className="timezone">
                             <p><i class="fas fa-globe-europe"></i> {this.props.timeZone}</p>
                            </div>
                            <div className="products">
                                <ul> {this.props.productTypes.length} Products
                            {this.props.productTypes.map( product => {
                                    return <li>{product} {icons[product]}</li>
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Card;