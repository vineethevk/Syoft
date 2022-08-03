import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [input, setInput] = useState({});
    const [formdata, setFormdata] = useState({});
    const Inputhandler = (event) => {
        setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const token = sessionStorage.getItem("token");
        await axios.get(`https://syoftserver.herokuapp.com/products/${id}`, { headers: { "token": token } }).then(({ data }) => setInput(data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }

    const postData = async () => {
        const token = sessionStorage.getItem("token");
        setInput((prev) => ({ ...prev, token: token }));
        console.log(input);

        await axios.patch(`https://syoftserver.herokuapp.com/products/${id}`, input).then((res) => {
            alert("Product updated");
            navigate(-1);

        })
            .catch(({ response: { data } }) => {
                alert(`${data}`)
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Product Name</label>
            <input type={"text"} id={"product_name"} readOnly onChange={Inputhandler} value={input.product_name} /><br />
            <label>Price</label>
            <input type={"text"} id={"product_price"} readOnly onChange={Inputhandler} value={input.product_price} /><br />
            <label>Description</label>
            <input type={"text"} id={"product_description"} readOnly onChange={Inputhandler} value={input.product_description} /><br />
            <label>Inventory</label>
            <input type={"number"} id={"inventory_count"} onChange={Inputhandler} /><br />
            <input type={"submit"} value="Add Product" id="submit" />
        </form>
    )
}