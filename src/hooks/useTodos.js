import { useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { useEffect } from "react";

const init = () => {
    //El método JSON.parse se utiliza para convertir una cadena de texto en formato JSON en un objeto JS.
    return JSON.parse(localStorage.getItem("todos") ) || [];
}


export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        //localStorage es un método porporcionado por el navegador que permite almacenar información.
        //setItem es un método de localStorage que se utiliza para establecer un par clave-valor en almacenamiento local.
        //localStorage solo recibe como valor un string, por lo cuál se utiliza el método JSON.stringify para convertir el
        //objeto a texto.
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo =  (id) => {
        
        dispatch({
            type: "[TODO] Remove Todo", 
            payload: id
        });
    }
    
    const handleToggleTodo = (id) => {
        dispatch ({
            type:"[TODO] Change State", payload:id
        })
    }

    
    return {
        todos, handleToggleTodo, handleDeleteTodo, handleNewTodo, todosLongitud:todos.length, 
        todosPendientes:todos.filter(item => item.done === false).length
    }
}