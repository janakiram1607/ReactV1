import '../css/Sidebar.css';
function List(){
    alert()
    const module = window.location.pathname.replace(/\//g, "").toUpperCase();
    const list = [1,2,3,4,5,6,7,"Johny","Lashi"];
    const listkeys = [
        {id:1, title:"Key1",content:"This is test content for Key1"},
        {id:2, title:"Key2",content:"This is test content for Key2"}
    ]
  /*   {list.map((row) => {
        alert()
        return <div className='main'>
                <h2>{row}</h2>;
            </div>
    })}; */
    return(
        <div className='main12'>
            <h2 style={{textAlign:'center'}}>{module}</h2>    
            {list.map((row) => {
                return <div className='mainsub'>
                {/* <ul key={{row}}> 
                    <li key={{row}}>{row}</li>
                </ul>  */}
                <ul key={row}>
                    {["Item1", "Item2", "Item3"].map(item =>
                        <li key="{item}">{item}</li>
                    )}
                </ul>
                    </div>
            })}
            {/* <ListChild listkeys={listkeys}/> */}
        </div>
    );
    
}
function ListChild(props){
    alert()
    console.log(props.listkeys);
    const contents = props.listkeys.map((val, i)=>{
        let Id = i;
        let title = val.title;
        let content = val.content;
        console.log(Id);
        <div key={Id}>
            <h4>{Id}</h4>
        </div>
         {/* <div key={Id}>
            <ul>
                <li key={Id}>{Id}</li>
                <li key={Id}>{title}</li>
                <li key={Id}>{content}</li>
            </ul>
        </div>  */}
    });
    console.log(contents);
    return(<div>{contents}</div>); 
}
export default List;