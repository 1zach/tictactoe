export default function Square({value, onClick}) {
    
    const style = {background: `transparent`,
                    border: "2px solid white",
                    color: "white",
                    fontSize: "60px",
                    fontWeight: "800",
                    cursor: "pointer",
                    padding: "10px",
                    margin: "5px",
                    borderRadius: "5px" }
    
    return(
        <button style={style} onClick={onClick}>
            {value}
        </button>   
    )
}