import PropTypes from "prop-types";
import { useState } from "react";

export const CounterAppCustom = ({ inicio }) => {
  inicio = parseInt(inicio);
  let [counter, setCounter] = useState(inicio);

  return (
    <>
      <h1> Counter with Hook inicial de : {counter}</h1>
      <hr></hr>
      <button onClick={() => setCounter(counter + 1)} className="btn btn-success">+1</button>
      <button onClick={() => setCounter(inicio)} className="btn btn-danger">Reiniciar</button>
      <button onClick={() => setCounter(counter - 1)} className="btn btn-warning">-1</button>
    </>
  )
}

CounterAppCustom.propTypes = {
  inicio: PropTypes.string.isRequired,
};
