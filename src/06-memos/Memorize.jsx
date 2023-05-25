import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = (props) => {
    let {counter, increment, decrement , reset} = useCounter(props.initialValue);
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr></hr>
            <button className="btn btn-danger" onClick={ increment}>Aumentar</button>
            <button className="btn btn-warning" onClick={ decrement}>Disminuir</button>
            <h1>Mostrar show : {JSON.stringify(show)}</h1>
            <button className="btn btn-outline-success" onClick={()=> {setShow(!show)}}>Cambiar Show</button>
        </>
    )
}
