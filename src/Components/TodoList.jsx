import { TodoItem } from "./TodoItem";

export const TodoList = ({ tareas, deleteOneTodo, onToggleTodo }) => {
    return (
      <>
        <ul className="list-group">
          {tareas.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} done={todo.done} description={todo.description} deleteOneTodo = {deleteOneTodo} onToggleTodo={onToggleTodo}/>
          ))}
        </ul>
      </>
    );
  };
  