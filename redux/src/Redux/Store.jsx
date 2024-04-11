import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todoReducer";

let myStore = createStore(todoReducer);

myStore.subscribe(() => {
    console.log(myStore.getState());
})

export default myStore;