import { useState } from "react";
import { addUser, getUsers } from "../API/api";
import { useDispatch } from "react-redux";
import { JsonTodoCreater, errorCreater, loadingCreater } from "../../Redux/JsonTodo/TodoActions";


const TodoAdd = () => {
    const [data, setData] = useState("")
    const dispatch = useDispatch();

    const handleAdduser = (data) => {
        addUser(data).then(() => {
            dispatch(loadingCreater())
            getUsers().then((res) => {
                dispatch(JsonTodoCreater(res.data))
            }).catch((err) => {
                dispatch(errorCreater())
            })
        })
    }
    return (
        <div>
            <h2>TodoAdd</h2>
            <input type="text" placeholder="Enter Todo" onChange={(e) => setData(e.target.value)} />&emsp;
            <button onClick={() => handleAdduser(data)} >ADD TODO</button>
        </div>
    )
}

export default TodoAdd;