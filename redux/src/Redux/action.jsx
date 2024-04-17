
import { INC, DEC, RESET, TODO, TOGGLE } from "../Redux/actionTypes"



export const handleINC = (data) => {
    return ({
        type: INC,
        payload: data
    })
}
export const handleDEC = (data) => {
    return ({
        type: DEC,
        payload: data
    })
}
export const handleRESET = (data) => {
    return ({
        type: RESET,
        payload: data
    })
}

export const handleData = (data) => {
    return ({
        type: TODO,
        payload: data
    })
}

