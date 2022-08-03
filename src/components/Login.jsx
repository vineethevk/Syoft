import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({});
    const [formdata, setFormdata] = useState({});
    const Inputhandler = (event) => {
        setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }


    const handleSubmit = (e) => {
        console.log(input);
        e.preventDefault();
        postData();
    }

    const postData = async () => {
        await axios.post("https://syoftserver.herokuapp.com/login", input).then(({ data: { token } }) => {

            sessionStorage.setItem("token", token)
            navigate(-1);
        }).catch(({ response: { data: { message } } }) => {
            console.log(message);
            alert(`${message}`)
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type={"email"} id={"email"} onChange={Inputhandler} /><br />
            <label>Password</label>
            <input type={"password"} id={"password"} onChange={Inputhandler} />
            <input type={"submit"} value={"Login"} id="submit" />
        </form>
    )

}