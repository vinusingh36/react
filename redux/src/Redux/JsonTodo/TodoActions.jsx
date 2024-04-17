import { ERROR, JSONTODO, LOADING } from "./TodoActionTypes"

export const JsonTodoCreater = (data) => {
    return {
        type: JSONTODO,
        payload: data
    }
}

export const loadingCreater = () => {
    return {
        type: LOADING
    }
}
export const errorCreater = () => {
    return {
        type: ERROR
    }
}