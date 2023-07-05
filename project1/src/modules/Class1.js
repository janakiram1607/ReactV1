import React, {Component} from "react";
import '../css/common.css';
class Class1 extends Component{
    render(){
        return(
            <div className="childclasscomp">
                <h2 style={{textAlign:'center'}}>Fetching detail from Child Class Component</h2>
            </div>
        );
    }
}
export default Class1;