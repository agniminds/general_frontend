import { useState } from "react";
import axios from "axios";
//import { useNavigate } from 'react router dom';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [jwt, setJwt] = useLocalStorage("jwt", "");

    function sendLoginRequest() {
        const reqBody = {
            username: username,
            password: password,
        };

        fetch("http://localhost:8080/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody),
        })
            .then((response) => {
                if (response.status == 200)
                    return Promise.all("Success");
                else
                    return Promise.reject("Invalid Login Attempt")


            }).catch((message) => {
                alert(message);
            });

    }

    return (
        <div className="login template d-flex justify-content-center align-items-center 100-vh bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" placeholder="Enter Email" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="d-grid">
                        <button id="submit" className="btn btn-primary" onClick={() => sendLoginRequest()}>Sign in</button>
                    </div>
                    <p className="text-right">
                        Forget <a href="">Password?</a> <a href="">Sign up</a>
                    </p>
                </form>

            </div>

        </div>
    )
}

export default Login