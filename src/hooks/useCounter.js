import { useState } from "react";
import PropTypes from "prop-types";

export const useCounter = (initialValue = 0 ) => {
    

    const [counter, setCounter] = useState(initialValue) 

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        if (counter === 0) return
        
        setCounter (counter - 1);
    }
    const reset = () => {
        setCounter (initialValue)
    }
    return {
        counter, increment, decrement, reset, setCounter
    }
}

useCounter.propTypes = {
    initialValue: PropTypes.number
}