import React from 'react';



class NetworkCard extends React.Component {
    render(){
        return <div>
            <div>
                <h1>Network: {this.props.name}</h1>
            </div>
        </div>
    }
}

export default NetworkCard;