import React, {Component} from 'react';
import { ReactDOM } from 'react';
import '../css/Sidebar.css';
/* function State(){
    const module = window.location.pathname.replace(/\//g, "").toUpperCase();
    return (
        <div>
            <div class="main">
                <h2 style={{textAlign:'center'}}>{module}</h2>
            </div>  
        </div>
    );
}
export default State; */

class State extends Component{
    constructor(){
        super();
        this.state = {initialVal:"Hello Welcome", count:0};
    }
    /* ChangeVal = ()=>{
       this.setState({initialVal:"Thanks for clicking"})
    } */
    render(){
        const module = window.location.pathname.replace(/\//g, "").toUpperCase();
        return (
            <div class="main">
                <h2 style={{textAlign:'center'}}>{module}</h2>
                <h3>{this.state.initialVal}</h3>
                <h4>{this.state.count >0 ? "Your like count is "+ this.state.count : ""} </h4>
                <button onClick={() =>this.setState({initialVal:"Thanks for your likes ", count:this.state.count + 1})}>Like</button>
            </div>
        );
    }
}
export default State;

/* class State extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div className='main'>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  export default State; */