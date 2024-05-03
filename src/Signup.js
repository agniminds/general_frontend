import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");  // Date of birth as a string
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    function sendSignupRequest() {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const reqBody = {
            username,
            password,
            firstName,
            lastName,
            dob,
            rating
        };

        fetch("/signup", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(reqBody),
        })
            .then((response) => response.json())
            .then(data => {
                if (data.status === 200) {
                    alert("Signup successful");
                    navigate('/login'); // Redirect to the login page after signup
                } else {
                    throw new Error(data.message || "Signup Failed");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendSignupRequest();
    };

    const redirectToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="signup-template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form-container p-5 rounded bg-white">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>
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
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            className="form-control"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating</label>
                        <input
                            type="number"
                            id="rating"
                            placeholder="Enter Rating"
                            className="form-control"
                            value={rating}
                            onChange={(e) => setRating(parseInt(e.target.value, 10) || 0)}
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
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                        <button type="button" className="btn btn-primary" onClick={redirectToLogin}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
