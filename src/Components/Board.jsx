import Square from "../Components/Square"

export default function Board({squares, onClick}) {

    const style={
        border: "2px solid black",
        borderRadius: "10px",
        height: "400px",
        width: "400px",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
        background: `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
        linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`
    }
    return(
        <div style={style}>
            {squares.map((square, i)=> {
              return  <Square key={i} value={square} onClick={() => onClick(i)} />
            })}
        </div>
    )
}