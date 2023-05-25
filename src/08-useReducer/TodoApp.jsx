import { useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "../Components/TodoList";
import {TodoAdd} from "../Components/TodoAdd"
import { useEffect } from "react";


//La función init se utiliza para inicializar el estado basado en algún valor. En este caso la función se encarga 
//de obtener los datos de la lista de tareas almacenados en localStorage. Si no hay datos almacenados devuelve un
//arreglo vacío
const init = () => {
    //El método JSON.parse se utiliza para convertir una cadena de texto en formato JSON en un objeto JS.
    return JSON.parse(localStorage.getItem("todos") ) || [];
}

export const TodoApp = () => {
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
        console.log({id});
        console.log(todos);
        dispatch ({
            type:"[TODO] Change State", payload:id
        })
    }
    return (<>
        <h1>TodoApp: {todos.length} <small>,pendientes: {todos.filter(item => item.done === false).length}</small></h1>
        <hr></hr>
        <div className="row">
            <div className="col-7">
                <TodoList tareas={todos}  deleteOneTodo = {handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
            </div>
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr></hr>
                <TodoAdd  oneNewTodo={handleNewTodo}  />
            </div>
        </div>
    </>);
}
