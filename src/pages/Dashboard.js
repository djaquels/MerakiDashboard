import React from 'react';

import api from '../api';
import Organization from '../components/Organization';


export default class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error:null,
            data : [],
        }

    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true,error:null, data:null})
        try {
            const data = await api.organizations.list();
            this.setState({loading:false,data:data,error:null});
        }catch(error){
            this.setState({loading:false,error:error});

        }
    }
    render(){

        if( this.state.loading == true){
            return 'Loading...';
        }
        if (this.state.error != null){
            return 'Error Something Bad Happened'
        }
        return <div className="container">
            <h1 className="center white">  Your Network </h1>
            <Organization name={this.state.data.name} url={this.state.data.url} ></Organization>
        </div>
    }
}