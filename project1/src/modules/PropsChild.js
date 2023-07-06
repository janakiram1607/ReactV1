import React, {Component} from "react";
import '../css/common.css';
class PropsChild extends Component {
    render(){
        const propsdetail = this.props
        return(
            <div>
                <span>
                <li>File Name:{propsdetail.name}</li>
                <li>Created:{propsdetail.created}</li>
                <li>CreatedBy:{propsdetail.createdBy}</li>
                </span>
            </div>
        );
    }
}
export default PropsChild;