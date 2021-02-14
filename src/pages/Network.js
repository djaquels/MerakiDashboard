import React from 'react'
import Organization from './styles/Network.css';
import api from '../api';
import NetworkCard from '../components/Card';
import Card from '../components/Card';

export default class Network extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            loading:true,
            error:null,
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true,error:null, data:null})
        try {
            const data = await api.networks.list();
            console.log(data);
            this.setState({loading:false,data:data});
        }catch(error){
            this.setState({loading:false,error:error});

        }
    }
    render(){
        if(this.state.loading == true){
            return 'Loading...';
        }
        return <div className="row">
                <h1 className="col-12 center white">  Your Network </h1>
                {this.state.data.map( item => <Card name={item.name} id={item.id}
                 enabledMeraki={item.disableMyMerakiCom} timeZone={item.timeZone}
                 productTypes={item.productTypes}
                 ></Card>)}
        </div>
            
    }
}