import '../css/Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar(){
    return (
        <div>
            <div class="sidenav">
                <ul className="App-header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/class">Class</Link>
                    </li>
                    <li>
                        <Link to="/props">Props</Link>
                    </li> 
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/sidebar">Link5</Link>
                    </li>
                    <li>
                        <Link to="/header">Link6</Link>
                    </li>
                    <li>
                        <Link to="/sidebar">Link7</Link>
                    </li> 
                    <li>
                        <Link to="/header">Link8</Link>
                    </li>
                    <li>
                        <Link to="/sidebar">Link9</Link>
                    </li>
                    </ul>
                </div>
        </div>
    );
}
export default Sidebar;