import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="main_nav">
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to={"/products"}>
                <p>Products</p>
            </Link>
            <Link to={"/register"}>
                <p>Register</p>
            </Link>
            <Link to={"/login"}>
                <p>Login</p>
            </Link>
        </div>
    )
}