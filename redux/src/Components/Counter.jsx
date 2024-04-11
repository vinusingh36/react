import { useDispatch, useSelector } from "react-redux"
import { handleDEC, handleINC, handleRESET } from '../Redux/action'


const Counter = () => {

    let dispatch = useDispatch();
    let { count } = useSelector((store) => store)


    return (
        <div>
            <h3>Count value is : {count}</h3>
            <button style={{ padding: "5px 10px" }} onClick={() => dispatch(handleINC(1))} >INC</button>&emsp;
            <button style={{ padding: "5px 10px" }} onClick={() => dispatch(handleDEC(-1))}>DEC</button>&emsp;
            <button style={{ padding: "5px 10px" }} onClick={() => dispatch(handleRESET(0))}>RESET</button>
        </div>
    )
}

export default Counter;