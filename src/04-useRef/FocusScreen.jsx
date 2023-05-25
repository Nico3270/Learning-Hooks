import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();
    const onClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input
            ref = {inputRef}
            type="text"
            placeholder="Ingrese su nombre" 
            className="form-control"
            ></input>
            <button className="btn btn-danger mt-2" onClick={onClick}>Set Focus</button>
        </>
    )
}