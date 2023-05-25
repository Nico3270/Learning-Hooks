import { useCounter } from "../hooks/useCounter";


export const CounterHook = () => {
    let {counter, increment, decrement , reset} = useCounter();
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr></hr>
            <button onClick={increment} className="btn btn-success">+1</button>
            <button onClick={decrement} className="btn btn-warning">-1</button>
            <button onClick={reset} className="btn btn-danger">reset</button>
        </>
    )
}