import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Summary from './Summary';
import Class from './Class';
import Hook from './Hook';
import Props from './Props';
import Events from './Events';
import Bootstrap from './Bootstrap';
import Crud from './Crud';
import Css_and_Sass from './Css_and_Sass';
import Effects from './Effects';
import Forms from './Forms';
import Fragments from './Fragments';
import List from './List';
import Redux from './Redux';
import State from './State';
import SendingMail from './SendingMail';
import OtherTopic from './OtherTopic';
import LifeCycle from './LifeCycle';
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
                 <Route exact path='/props' element={< Props parent={`App`}/>}></Route>
                 <Route exact path='/events' element={< Events />}></Route>
                 <Route exact path='/props' element={< Props />}></Route>
                 <Route exact path='/bootstrap' element={< Bootstrap />}></Route>
                 <Route exact path='/crud' element={< Crud />}></Route>
                 <Route exact path='/css_and_sass' element={< Css_and_Sass />}></Route>
                 <Route exact path='/effects' element={< Effects />}></Route>
                 <Route exact path='/forms' element={< Forms />}></Route>
                 <Route exact path='/fragments' element={< Fragments />}></Route>
                 <Route exact path='/list' element={< List />}></Route>
                 <Route exact path='/redux' element={< Redux />}></Route>
                 <Route exact path='/state' element={< State />}></Route>
                 <Route exact path='/hook' element={< Hook />}></Route>
                 <Route exact path='/sendingmail' element={< SendingMail />}></Route>
                 <Route exact path='/othertopic' element={< OtherTopic />}></Route>
                 <Route exact path='/lifecycle' element={< LifeCycle />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;