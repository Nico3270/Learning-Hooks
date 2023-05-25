console.log("Hola Mundo");

const initalState = [{id:1, todo:"Recolectar la piedra del alma", done: false}];

const todoReducer = (state=initalState, action) => {
    if(action.type === "[TODO] add todo"){
        return [...state, action.payload]
    }
    return state;
}

//Nuevo Todo que se quiere agregar al estado inicial
const newTodo = {
    id:2,
    todo: "Recolectar la piedra del poder",
    done: false
}

//Representa la acción a aplicar al estado. En este caso  tiene un tipo [TODO] add todo, y la 
//y un payload que contiene la nueva tarea "newTodo"
const addTodoAction =  {
    type : "[TODO] add todo",
    payload: newTodo
}

let todos = todoReducer(initalState, addTodoAction);
console.log({state: todos});
