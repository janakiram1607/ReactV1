import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Summary from './Summary';
import Class from './Class';
import Hook from './Hook';
import Props from './Props';
import Events from './Events';
//import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Header/>
            <Sidebar/>
           <Routes>
                 <Route exact path='/' element={< Summary />}></Route>
                 <Route exact path='/class' element={< Class />}></Route>
                 <Route exact path='/props' element={< Props />}></Route>
                 <Route exact path='/events' element={< Events />}></Route>
                 <Route exact path='/props' element={< Props />}></Route>
                 <Route exact path='/hook' element={< Hook />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;