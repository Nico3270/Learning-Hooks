import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const MemoHook = (props) => {
    let {counter, increment, decrement , reset} = useCounter(props.initialValue);
    const [show, setShow] = useState(true);
    const heavyStuff = (iteraciones = 100) => {
        for (let i = 0; i < iteraciones; i++){
            console.log("Estamos iterando...");
        }
        return `${iteraciones} iteraciones realizadas`
    }

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr></hr>
            <h4>{memorizedValue}</h4>
            <button className="btn btn-danger" onClick={ increment}>Aumentar</button>
            <button className="btn btn-warning" onClick={ decrement}>Disminuir</button>
            <h1>Mostrar show : {JSON.stringify(show)}</h1>
            <button className="btn btn-outline-success" onClick={()=> {setShow(!show)}}>Cambiar Show</button>
        </>
    )
}
