const name = (props) => 
{
    const styling = {
        textAlign: "center", 
        backgroundColor: props.bgColor, 
        width: "30%", 
        margin: "auto"};

    return (
        <>
            <div style={styling}>
                <h1 style={{color: props.fcolor, marginBottom: "0px"}}>{props.name}</h1>
            </div>
            <input type="text" placeholder="Ingrese un nombre..." onChange={props.onChange}/>
        </>
    );
}
export default name;