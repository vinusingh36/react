class Store {
    state;
    reducer;
    constructor(initState) {
        this.state = initState;
        this.reducer = reducer;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }

    getState() {
        return this.state;
    }
}

const reducer = (state, action) => {
    if (action.type === "INC") {
        return {
            count: state.count + action.data
        }
    }

    return state;
}


let store = new Store({ count: 0 })

console.log(store.getState());

store.dispatch({
    type: "INC",
    data: 5
})

console.log(store.getState());