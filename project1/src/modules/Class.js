import React, {Component} from "react";
import Class1 from "./Class1";
class Class extends Component{
    render(){
        module = window.location.pathname.replace(/\//g, "").toUpperCase();
        return(
            <div>
                <div class="main">
                    <h2 style={{textAlign:'center'}}>{module}</h2>
                    <Class1 />
                </div> 
            </div>
        );
    }
}
export default Class;