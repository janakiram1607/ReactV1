import '../css/Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar(){
    return (
        <div>
            <div class="sidenav">
                <ul className="App-header">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/class" >Class</Link></li>
                    <li><Link to="/bootstrap" >Bootstrap</Link></li>
                    <li><Link to="/crud">Crud</Link></li>
                    <li><Link to="/css_and_sass">Css_and_Sass</Link></li>
                    <li><Link to="/effects">Effect</Link></li> 
                    <li><Link to="/events">Events</Link></li> 
                    <li><Link to="/forms">Forms</Link></li> 
                    <li><Link to="/fragments">Fragments</Link></li>
                    <li><Link to="/hook">Hook</Link></li>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/props">Props</Link></li> 
                    <li><Link to="/redux">Redux</Link></li>
                    <li><Link to="/sendingmail">SendingMail</Link></li>
                    <li><Link to="/state">State</Link></li> 
                    <li><Link to="/othertopic">OtherTopic</Link></li> 
                    <li><Link to="/lifecycle">LifeCycle</Link></li> 
                    </ul>
                </div>
        </div>
    );
}
export default Sidebar;