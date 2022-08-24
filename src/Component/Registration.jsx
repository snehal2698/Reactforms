import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
function Registration() {

    let navigate = useNavigate();

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [comfirmpassword, setComfirmpassword] = useState("");
    let [nameMessage, setNameMessage] = useState("");
    let [emailMessage, setemailMessage] = useState("");
    let [passwordMessage, setpasswordMessage] = useState("");
    let [comfirmPasswordMessage, setcomfirmPasswordMessage] = useState("");
    function submit(e) {

        e.preventDefault();
        setNameMessage("");
        setemailMessage("");
        setpasswordMessage("");
        setcomfirmPasswordMessage("");

        let validate = true;
        if (name.trim() === "") {
            setNameMessage(" Please Enter your Name");
            validate = false;
        }

        if (email.trim() === "") {
            setemailMessage(" Please Enter your Email");
            validate = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setemailMessage("Please Enter valid Email");
            validate = false;
        }

        if (password === "") {
            setpasswordMessage(" Please Enter your Password");
            validate = false;
        }

        if (comfirmpassword !== password) {
            setcomfirmPasswordMessage(" Password don't Match");
            validate = false;
        }

        if (validate) {
            let users = new Array();
            if (localStorage.getItem("users") != null)
                users = JSON.parse(localStorage.getItem("users"));


            users.forEach(user => {
                if (user.email === email) {
                    setemailMessage("Email already exist!");
                    validate = false;
                }
            })
            
            if (validate) {
                users.push({
                    name: name,
                    email: email,
                    password: password
                });

                localStorage.setItem("users", JSON.stringify(users));
                alert("Registration Successfull");
                navigate("/login")

            }
        }
    }
    return (
        <>

            <div className="col-lg-6  border rounded">
                <form>
                    <h3>Registration Form</h3>
                    <br />

                    <label>Name:</label>

                    <br />
                    <input type="name" id="name" value={name} className="form-control" onChange={(e) => { setName(e.target.value) }} />
                    <span className="text-danger">{nameMessage}</span>
                    <br />
                    <label>Email:</label><br />
                    <input type="email" id="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <span className="text-danger">{emailMessage}</span><br />
                    <label>Password:</label><br />
                    <input type="password" id="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <span className="text-danger">{passwordMessage}</span><br />
                    <label> Comfirm Password:</label><br />
                    <input type="password" id="comfirmpassword" className="form-control" value={comfirmpassword} onChange={(e) => { setComfirmpassword(e.target.value) }} />
                    <span className="text-danger">{comfirmPasswordMessage}</span><br /><br />
                    <button type="submit" className="btn btn-primary mb-3" onClick={(e) => { submit(e) }}>Registration</button>
                    
                </form>
            </div>

        </>
    )
}
export default Registration;