import { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { getUsers } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { JsonTodoCreater, errorCreater, loadingCreater } from "../../Redux/JsonTodo/TodoActions";
import Loading from "./Loading";
import Error from "./Error";


const Todo = () => {
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(loadingCreater())

        getUsers().then((res) => {
            dispatch(JsonTodoCreater(res.data))
        }).catch((err) => {
            dispatch(errorCreater())
        })
    }, [])

    const { jsonTodo, isLoading, isError } = useSelector((store) => store.jsonTodoReducer);

    return (
        <div>
            <h2>TODO APP</h2>
            <TodoAdd />
            {
                isLoading ? <Loading /> : isError ? <Error /> : <><TodoList jsonTodo={jsonTodo} /></>
            }

        </div>
    )
}

export default Todo;