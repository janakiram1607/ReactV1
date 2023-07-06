import React, {Component} from 'react';
import '../css/Sidebar.css';
import PropsChild from './PropsChild';
/* function Props(){
    const module = window.location.pathname.replace(/\//g, "").toUpperCase();
    return (
        <div>
            <div class="main">
                <h2 style={{textAlign:'center'}}>{module}</h2>
            </div>  
        </div>
    );
} */
/* class Props extends Component(){
    render(){
        module = window.location.pathname.replace(/\//g, "").toUpperCase();
        return(
            <div>
                <div class="main">
                    <h2 style={{textAlign:'center'}}>{module}</h2>
                </div> 
            </div>
        );
    }
} */
class Props extends Component{
    render(){
        module = window.location.pathname.replace(/\//g, "").toUpperCase();
        const { parent = 'default' } = this.props;
        let propsArray = {
            name:"PropsChild JS",
            created:"2023-07-06",
            createdBy:"Jhony"
            };
        return(
            <div>
                <div class="main">
                    <h2 style={{textAlign:'center'}}>{module}</h2>                    
                    <h3>Fetching props from parent {parent} JS</h3>
                    <h3>Fetching props from child <PropsChild {...propsArray}/></h3>
                </div> 
            </div>
        );
    }
}
export default Props;