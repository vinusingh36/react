import { TODO, INC, DEC, RESET } from '../Redux/actionTypes'


let initData = {
    todo: "",
    count: 0
}

export const todoReducer = (store = initData, action) => {
    if (action.type === TODO) {
        return {
            ...store, todo: action.payload
        }
    }
    if (action.type === INC) {
        return {
            ...store, count: store.count + action.payload
        }
    }
    if (action.type === DEC) {
        return {
            ...store, count: store.count + action.payload
        }
    }
    if (action.type === RESET) {
        return {
            ...store, count: action.payload
        }
    }

    return store;
}