import { Todo, deleteTodo, editTodo } from "./action"

let initialState = {
    todoArray: [],
    todoEditValue: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Todo:
            return { ...state, todoArray: action.payload };
        case deleteTodo:
            return { ...state, todoArray: action.payload };
        case editTodo:
            return { ...state, todoEditValue: action.payload }

        default:
            return state
    }
}