import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, toggleButton } from "../API/api";
import { JsonTodoCreater, errorCreater, loadingCreater } from "../../Redux/JsonTodo/TodoActions";
import { useState } from "react";




const TodoList = ({ jsonTodo }) => {
    const dispatch = useDispatch();
    const handleDelete = (data) => {

        deleteUser(data).then((data) => {
            dispatch(loadingCreater())
            getUsers().then((res) => {
                dispatch(JsonTodoCreater(res.data))
            }).catch((err) => {
                dispatch(errorCreater())
            })
        })
    }
    const handleToggle = (data1, data2) => {
        toggleButton(data1, data2).then(() => {
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
            <h2>TodoList</h2>
            {
                jsonTodo.length > 0 && jsonTodo.map((data, i) => {
                    return (
                        <div key={data.id}>
                            <span>{i + 1}. </span>&emsp;
                            <b>{data.name}</b>&emsp;
                            <button onClick={() => handleToggle(data.id, data.name)} >{data.isCompleted ? "Completed" : "Not Completed"}</button> &emsp;
                            <button onClick={() => handleDelete(data.id)} >Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList;