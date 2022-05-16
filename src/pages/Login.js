import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailRegex.test("hamza@gmail.com")) {
            console.log("if condition is working");
        }
    };
    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 ">
                        <div className="card p-3 p-md-4">
                            <div className="row">
                                <div className="col">
                                    <h1 className="text-center mb-5"> Login</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="form-control"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn btn-primary w-100">login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
