import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Setcookies from "./Setcookies";
import Getcookies from "./Getcookies";
import Removecookies from "./Removecookies";

function Login() {
    let navigate = useNavigate();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function submit(e) {
        e.preventDefault();
        let login;

        let users = new Array();
        if (localStorage.getItem("users") != null)
            users = JSON.parse(localStorage.getItem("users"));

        users.forEach(user => {
            if (user.email === email && user.password === password)
             {
                // localStorage.setItem("email", email);
                // localStorage.setItem("password", password);
                // login=true;

                // navigate("/Users")

               
                login = true;
                navigate("/Users");
             }
        })

        if (login) {
            alert("login Successfull");
        }
        else {
            alert("login failed")
        }

    }


    return (
        <>
            <div className="col-lg-6 border rounded">
                <h3>Login Form</h3>
                <br />

                <label>Email:</label><br />
                <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" /><br /><br />
                <label>Password:</label><br />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" className="form-control" /><br /><br />

                <button type="submit" onClick={(e) => { submit(e) }} className="btn btn-primary">Sign in</button>
            </div>

        </>
    )

}
export default Login