import React,{Component} from 'react';
import '../css/Sidebar.css';
import '../css/fragments.css';
class Fragments extends Component{
    render(){
        return(
            <div className="main">
            <table>
            <tr>
                <th>Student Name</th>
                <th>Contact No</th>
                <th>Country</th>
            </tr>
                <tr>
                    <ChildFragmentsClass />
                </tr>
            </table>
            </div>
        );
    }
}
class ChildFragmentsClass extends Component{
    render(){
        return(
            <>
            <td>Johny</td>
            <td>+91 9176444044</td>
            <td>India</td>
            </>
        );
    }
}
export default Fragments;