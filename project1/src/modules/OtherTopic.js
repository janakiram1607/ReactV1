import '../css/Sidebar.css';
function OtherTopic(){
    const module = window.location.pathname.replace(/\//g, "").toUpperCase();
    return (
        <div>
            <div class="main">
                <h2 style={{textAlign:'center'}}>{module}</h2>
                <span>
                    <li>Props vs State</li>
                    <li>componentWillMount vs componentDidMount</li>
                </span>
                <h2 style={{textAlign:'center'}}>Doubts</h2>
                <span>
                    <li>LifeCycle module error</li>
                    <li>Sass concept in detail</li>
                </span>
            </div>  
        </div>
    );
}
export default OtherTopic;