import React, { Component } from 'react';
import '../css/Sidebar.css';
class Forms extends Component{
    constructor(){
        super();
        this.state = {uname:"", age:null, errormsg:""};
    }
    uservalue = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        let err = "";
        if(value!="" && !Number(value) && name=="uage"){
            this.setState({errormsg : "Invalid format please enter number"});
        }else{
            this.setState({errormsg : ""});
        }
        this.setState({[name]:value});
    }
    submitForm = (event)=>{
        event.preventDefault();
        alert(this.state.uname);
    }
    render(){
        return(
            <div className="main">
                <h2>Hello {this.state.uname}</h2>
                <form onSubmit={this.submitForm}>
                    <h4 style={{color:"blue"}}>{this.state.errormsg}</h4>
                    Enter Name: <input type="text" name="uname" onChange={this.uservalue}/>
                    Enter Age: <input type="text" name="uage" onChange={this.uservalue}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default Forms;