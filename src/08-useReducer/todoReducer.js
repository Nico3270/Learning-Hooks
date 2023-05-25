
export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "[TODO] Add Todo":
            return [...initialState, action.payload];
        case "[TODO] Remove Todo":
            return initialState.filter(todo => todo.id !== action.payload);
        case "[TODO] Change State":
            return initialState.map(obj => {
                if( obj.id === action.payload) {
                    return {...obj, done: !obj.done}
                }
                return obj;
            })
        default:
            return initialState;
    }
}
