import React, { useState } from "react";

export const TodoAdd = ({oneNewTodo}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    //En esta linea se reinicia el value en el input
    setMessage("");
    //En esta linea se evita que se vuelva cargar la página
    event.preventDefault();
    // Esta linea comprueba que el texto insertado tenga mas de un carácter y que si esta vacío no funcione el botón
    if (message.length <= 1) return;

    //Crea el objeto que se enviará 
    const newTodo = {
        id: new Date().getTime(),
        description: message,
        done:false
    }
    //Hace el llamado a cierta función y pasa a newTodo como párametro de esta función
    oneNewTodo(newTodo)
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={message}
        //Cada vez que se cambie el input cambia el estado message
        onChange={(event) => setMessage(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-outline-info mt-2">
        Agregar
      </button>
    </form>
  );
};
