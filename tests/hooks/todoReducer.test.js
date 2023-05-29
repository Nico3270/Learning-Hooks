import {todoReducer} from "../../src/08-useReducer/todoReducer"

describe("Pruebas en todoReducer", () => {
    const initialState = [{
        id:1,
        description: "Demo Todo", 
        false: done
    }]
    test("Debe de regresar el estado inicial", () =>{
        const newState = todoReducer ( initialState, {});
        expect (newState).toBe(initialState);
    });
})