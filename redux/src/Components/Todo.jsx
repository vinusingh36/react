import { useState } from "react";
import { handleData } from "../Redux/action"
import { useDispatch } from "react-redux";


const Todo = () => {
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <h2>ToDo Component</h2>
            <input type="text" placeholder="Enter Text" onChange={(e) => setData(e.target.value)} />
            <br />
            <button onClick={() => dispatch(handleData(data))} >Submit</button>
        </div>
    )
}

export default Todo;