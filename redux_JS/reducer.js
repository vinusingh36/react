let initState = {
    count: 0
}

const reducer = (store = initState, action) => {
    if (action.type === "INC") {
        return {
            count: action.payload
        }
    }
    if (action.type === "DEC") {
        return {
            count: action.data
        }
    }

    return store;
}

export default reducer;