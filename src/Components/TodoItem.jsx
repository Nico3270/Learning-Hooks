

export const TodoItem = ({ id, description, deleteOneTodo, onToggleTodo, done }) => {
    
    const clase = done ? "clase1" : "clase2";
    const clasefinal = `list-group-item d-flex justify-content-between ${clase}`
    return (
        <><li onClick={() => onToggleTodo(id)} s key={id} className={clasefinal} >
            <span className="align-self-center">{description}</span>
            <button onClick={() => deleteOneTodo(id)} className="btn btn-danger">Borrar</button></li></>
    )
} 