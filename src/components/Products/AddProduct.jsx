import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({});
    const Inputhandler = (event) => {
        setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }

    const postData = async () => {
        const token = sessionStorage.getItem("token");
        setInput((prev) => ({ ...prev, token: token }));
        console.log(input);

        await axios.post("https://syoftserver.herokuapp.com/products", input).then((res) => {
            alert("Product added")
            navigate(-1);
        }).catch(({ response: { data } }) => {
            if (typeof (data) === "string") {
                alert(`${data}`)
            }

        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Product Name</label>
            <input type={"text"} id={"product_name"} onChange={Inputhandler} /><br />
            <label>Price</label>
            <input type={"text"} id={"product_price"} onChange={Inputhandler} /><br />
            <label>Description</label>
            <input type={"text"} id={"product_description"} onChange={Inputhandler} /><br />
            <label>Inventory</label>
            <input type={"number"} id={"inventory_count"} onChange={Inputhandler} /><br />
            <input type={"submit"} value="Add Product" id="submit" />
        </form>
    )
}