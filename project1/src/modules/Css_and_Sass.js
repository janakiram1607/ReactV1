import '../css/css_and_sass.css';
import '../css/common.css';
function Css_and_Sass(){
    const module = window.location.pathname.replace(/\//g, "").toUpperCase();
    const insytle = {
        color:"blue",
        fontFamily: 'Arial',
        textAlign:'center'
    }
    return (
        <div className='container-div'>
            <div class="main">
                <h2 style={{textAlign:"center"}}>{module}</h2>
                <div className='cssBlock'>
                    <h4 style={insytle}>Possible ways of Adding css in ReactJS</h4>
                    <span>
                        <li>Inline Styling</li>
                        <li>Css Stylesheets</li>
                        <li>Css Modules</li>
                    </span>
                </div>
                <div className='SassBlock'>
                    <h4 style={insytle}>Advantage of Sass</h4>
                    <span>
                        <li>Reusable</li>
                        <li>Time saving</li>
                        <li>Addtional featuers availble comparing to CSS</li>
                        <li>Install SASS in your React use - npm install node-sass</li>
                    </span>
                </div>
            </div>  
        </div>
    );
}
export default Css_and_Sass;