import '../css/Sidebar.css';
function Hook(){
    const module = window.location.pathname.replace(/\//g, "").toUpperCase();
    return (
        <div>
            <div class="main">
                <h2 style={{textAlign:'center'}}>{module}</h2>
            </div>  
        </div>
    );
}
export default Hook;