import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todoReducer";
import jsonTodoReducer from "./JsonTodo/JsonTodoReducer";


const rootReducer = combineReducers({ todoReducer, jsonTodoReducer })

let Store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default Store;