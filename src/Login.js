import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for redirection
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    function sendLoginRequest() {
        const reqBody = {
            username: username,
            password: password,
        };

        fetch("/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('isAuthenticated', 'true'); // Set the authentication flag
                    alert("Success");
                    navigate('/'); // Redirect to the root route (or dashboard)
                } else {
                    throw new Error("Invalid Login Attempt");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit action
        sendLoginRequest();
    };

    return (
        <div className="login-template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form-container p-5 rounded bg-white">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter Username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                    <p className="text-right mt-2">
                        Forgot <a href="#forgot-password">Password?</a> | <a href="#sign-up">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
