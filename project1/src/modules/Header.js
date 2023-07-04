import '../css/Header.css';
import logo from '../logo.png';
function Header(){
    return (
        <div className='container'>
            <div className='logo column'>
                <img src={logo}></img>
                <h1>Basic One page tutorial application using ReactJS</h1>
            </div>
        </div>
    );
}
export default Header;