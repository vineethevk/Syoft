import "./Register.css"
import { useState } from 'react';
import axios from 'axios';

export const Register = () => {
    const [input, setInput] = useState({});
    const [formdata, setFormdata] = useState({});
    const Inputhandler = (event) => {
        setInput((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }

    const postData = async () => {
        await axios.post("https://syoftserver.herokuapp.com/register", input).then((res) => { console.log(res) })
            .catch(({ response: { data } }) => {
                alert(`${data}`)
            });

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type={"text"} id={"username"} onChange={Inputhandler} /><br />
            <label>Email</label>
            <input type={"email"} id={"email"} onChange={Inputhandler} /><br />
            <label>Phone</label>
            <input type={"number"} id={"phone"} onChange={Inputhandler} /><br />
            <label>Password</label>
            <input type={"password"} id={"password"} onChange={Inputhandler} /><br />
            <label>Role</label>
            <select placeholder='Select role' id={"role"} onChange={Inputhandler}>
                <option value={"null"}>---</option>
                <option value={"manager"}>Manager</option>
                <option value={"admin"}>Admin</option>
                <option value={"staff"}>Staff</option>
            </select><br />
            <input type={"submit"} value="Register" id="submit" />
        </form>
    )

}