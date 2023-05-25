import { useCounter } from "../hooks/useCounter"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = (props) => {
    let {counter, increment, decrement , reset} = useCounter(props.initialValue);
    return (
        <>
            <h1>El counter áctual es {counter} </h1>
            <ShowIncrement increment={increment}/>
        </>
    )
}