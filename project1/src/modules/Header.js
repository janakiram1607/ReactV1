import '../css/Header.css';
import logo from '../logo.png';
function Header(){
    return (
        <div className='container'>
             <div className="logo column header">
                <img src={logo}></img>
                <div class="header-right">
                    <h1>Basic One page tutorial application using ReactJS</h1>
                </div>
            </div> 
        </div>
    );
}
export default Header;