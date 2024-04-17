import { TOGGLE } from "../actionTypes";
import { ERROR, JSONTODO, LOADING } from "./TodoActionTypes";

let todoInit = {
    jsonTodo: [],
    isLoading: false,
    isError: false,
}


const jsonTodoReducer = (state = todoInit, action) => {
    switch (action.type) {
        case (JSONTODO): {
            return {
                ...state, jsonTodo: action.payload,
                isLoading: false,
                isError: false
            }
        }
        case (LOADING): {
            return {
                ...state, isLoading: true, isError: false
            }
        }
        case (ERROR): {
            return {
                ...state, isError: true, isLoading: false
            }
        }
    }
    return state;
}

export default jsonTodoReducer;