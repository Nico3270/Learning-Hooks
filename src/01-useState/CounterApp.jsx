import { useState } from "react"

export const CounterApp = () => {
    let [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10, counter2: 20, counter3:30
    })
    const handleCounterClick = () => {
        setCounter((prevState) => ({...prevState, counter1: prevState.counter1 + 1}))
    }
    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>
            <hr></hr>
            <button  onClick= {handleCounterClick} className="btn btn-success">+1 </button>
            <button onClick={() => {setCounter(counter2 = 2)}} className="btn btn-warning">Reiniciar</button>
        </>
    )
}