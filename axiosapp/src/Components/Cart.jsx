import { useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";
import Loading from "./Loading";
import Error from "./Error";
import { getCartData, removeCart } from "./API/api";
import { Button } from "@chakra-ui/react";

let initState = {
    loading: false,
    error: false,
    data: []
}

const Cart = () => {

    const [state, dispatch] = useReducer(cartReducer, initState);

    useEffect(() => {
        dispatch({
            type: "LOADING"
        })
        getCartData(dispatch)
    }, [])

    return (
        <div>
            <h2>Cart Component</h2>
            {
                state.loading ? <Loading /> : state.error ? <Error /> : state.data.length === 0 ? <h2>No Data In The Cart</h2> : <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "20px",
                    padding: "20px"
                }}>
                    {state.data.map((product) => {
                        return (
                            <div style={{
                                boxShadow: "0 0 10px black",
                                padding: "25px"
                            }}>
                                <img src={product.image} alt="###" width={200} height={200} />
                                <h3>{product.title}</h3>
                                <h4>$ {product.price}</h4>
                                <Button colorScheme='red' onClick={() => removeCart(product.id, dispatch)} >Remove Product</Button>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Cart;