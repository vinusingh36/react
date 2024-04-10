import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Products from "../Products";
import Cart from "../Cart";
import PageNotFound from "../PageNotFound";


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;