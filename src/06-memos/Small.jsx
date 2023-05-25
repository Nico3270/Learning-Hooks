import { memo } from "react";


export const Small = memo((props) => {
    console.log("Me volvi a dibujar :)");
    return(
        <small> { props.value} </small>
    )
})