function Ins (props) {
    const insstyle = {
        backgroundColor : "skyblue",
        border : "2px dashed white",
        margin : "20px",
        padding : "20px" 
    };
    return (<div style={insstyle}>
        <h2>{props.title}</h2>
        <h3>{props.attend}</h3>
        <p>{props.desc}</p>
    </div>);
    
}

export default Ins;