import axios from "axios";

//Product data API call

export const getProdData = (dispatch) => {
    setTimeout(() => {
        axios.get(`http://localhost:8080/products`)
            .then((data) => {
                console.log(data.data);
                dispatch({
                    type: "SUCCESS",
                    payload: data.data
                })
            }).catch(() => {
                dispatch({
                    type: "ERROR"
                })
            })
    }, 1000)
}

//Cart Data API call

export const getCartData = (dispatch) => {
    setTimeout(() => {
        axios.get(`http://localhost:8080/cart`)
            .then((data) => {
                console.log(data.data);
                dispatch({
                    type: "SUCCESS",
                    payload: data.data
                })
            }).catch(() => {
                dispatch({
                    type: "ERROR"
                })
            })
    }, 1000)
}


//Removing product from Cart
export const removeCart = (id, dispatch) => {
    axios.delete(`http://localhost:8080/cart/${id}`)
        .then((res) => {
            alert("Product Removed from the Cart")
            axios.get(`http://localhost:8080/cart`)
                .then((data) => {
                    console.log(data.data);
                    dispatch({
                        type: "SUCCESS",
                        payload: data.data
                    })
                })
        }).catch((err) => {
            alert(`${err} Error Occurred!!!`)
        })
}

//Add to cart

export const addToCart = (data) => {
    axios.post(`http://localhost:8080/cart`, data)
        .then((res) => {
            alert("Product is added to the Cart")
        })

}