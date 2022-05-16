import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return
    (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 ">
                        <div className="card p-3 p-md-4">
                            <div className="row">
                                <div className="col">
                                    <h1 className="text-center mb-5"> Login

                                    </h1>

                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            

                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
