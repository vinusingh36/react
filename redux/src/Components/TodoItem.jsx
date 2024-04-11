
import { useSelector } from "react-redux";


const TodoItem = () => {

    let { todo } = useSelector((store) => store)

    return (
        <div>
            <h4>{todo}</h4>
        </div>
    )
}

export default TodoItem;