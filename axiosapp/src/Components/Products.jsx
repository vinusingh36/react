import axios from "axios";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import Loading from "./Loading";
import Error from "./Error";
import { getProdData, addToCart } from "./API/api";
import '../Components/ChakraUI/Button.css'
import { Button } from "@chakra-ui/react";

let initState = {
    loading: false,
    error: false,
    data: []
}

const Products = () => {
    const [state, dispatch] = useReducer(reducer, initState);


    useEffect(() => {
        dispatch({
            type: "LOADING"
        })
        getProdData(dispatch)
    }, [])



    return (
        <div>
            <h2>Products Component</h2>
            {
                state.loading ? <Loading /> : state.error ? <Error /> : <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "20px",
                    padding: "20px"
                }} >
                    {
                        state.data.length > 0 &&
                        state.data.map((product) => {
                            return (
                                <div style={{
                                    boxShadow: "0 0 10px black",
                                    padding: "25px"
                                }}>
                                    <img src={product.image} alt="###" width={200} height={200} />
                                    <h3>{product.title}</h3>
                                    <h4>$ {product.price}</h4>
                                    <Button className="btn" onClick={() => { addToCart(product) }} >Add To Cart</Button>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Products;