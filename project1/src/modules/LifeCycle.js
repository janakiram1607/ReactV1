import React, {Component} from 'react';
import '../css/Sidebar.css';

class LifeCycle extends Component{
    constructor(){
        super();
        this.state = {value:"Welcome", name:"Johny"}
    }
    /* ComponectWillMount will call before DOM loaded */
    componentWillMount(){
        alert();
    }
    changeValue = () =>{
        this.setState({value:"Value changed using onchange function"});
    }
    render(){
        const module = window.location.pathname.replace(/\//g, "").toUpperCase();
        return (
            <div className='main'>
                <h1 style={{textAlign:'center'}}>{module}</h1>
                <h3 id='myh3'>Hello {this.state.name}, {this.state.value}</h3>
                <button type='button' onClick={this.changeValue}>Change Value</button>
                <button type='button' onClick={this.deleteHeader}>Delete Header</button>
            </div>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({value:"Thank you"})
        },3000);
    }
    componentWillUpdate(){
        alert('Are you sure want to update?');
    }
    componentDidUpdate(){
        document.getElementById('myh3').innerHTML = "Value changed using componentDidUpdate";
    }
    shouldComponentUpdate(){
        return true;
    }
    deleteHeader = () =>{
        this.setState({value:false,name:false})
    }
    componentWillUnmount(){
        alert("Are you sure want to delete?");
    }
}
export default LifeCycle;