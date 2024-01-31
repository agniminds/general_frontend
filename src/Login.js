import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center 100-vh bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="username">Username</label>
                        <input type="username" placeholder="Enter Email" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
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