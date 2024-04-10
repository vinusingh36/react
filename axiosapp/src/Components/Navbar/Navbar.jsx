import { Link } from "react-router-dom";



const Navbar = () => {
    return (

        <div style={{ display: "flex", border: "2px solid black" }}>

            <div style={{ width: "40%", }}>
                <h2>My Product Component</h2>
            </div>
            <div style={{ width: "60%", textAlign: "center", padding: "20px", display: "flex", justifyContent: "space-around", }}>
                <Link to="/" style={{ textDecoration: "none" }} >Home</Link>
                <Link to="/products" style={{ textDecoration: "none" }}>Products</Link>
                <Link to="/cart" style={{ textDecoration: "none" }}>Cart</Link>
            </div>
        </div>
    )
}

export default Navbar;