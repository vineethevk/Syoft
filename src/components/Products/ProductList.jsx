import axios from "axios";
import "./product.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getProducts();

    }, [])


    const getProducts = async () => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            alert("Please login")
            navigate("/login");

        }
        await axios.get("https://syoftserver.herokuapp.com/products", { headers: { "token": token } }).then(({ data }) => { setProducts(data) })
            .catch(({ response: { data } }) => {
                alert(`${data}`)
            });
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>{"Product"}</th>
                    <th>{"Price"}</th>
                    <th>{"Description"}</th>
                    <th>{"Inventory"}</th>
                </tr>
            </thead>
            <tbody>
                {products.map((e) => (<tr key={e._id}>
                    <td>{e.product_name}</td>
                    <td>{e.product_price}</td>
                    <td>{e.product_description}</td>
                    <td>{e.inventory_count}</td>
                    <td><button onClick={() => (navigate(`/products/${e._id}`))}>Update Inventory</button></td>
                </tr>))}
            </tbody>
        </table>
        <div id="addProduct"><button onClick={() => { navigate("/addproduct") }}>Add Product</button></div>
    </>)
}