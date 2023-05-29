import { TodoList } from "../Components/TodoList";
import {TodoAdd} from "../Components/TodoAdd"
import { useTodos } from "../hooks/useTodos";


//La función init se utiliza para inicializar el estado basado en algún valor. En este caso la función se encarga 
//de obtener los datos de la lista de tareas almacenados en localStorage. Si no hay datos almacenados devuelve un
//arreglo vacío


export const TodoApp = () => {
    const {todos, handleToggleTodo, handleDeleteTodo, handleNewTodo, todosLongitud, todosPendientes} = useTodos();
    return (<>
        <h1>TodoApp: {todosLongitud} <small>,pendientes: {todosPendientes}</small></h1>
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
