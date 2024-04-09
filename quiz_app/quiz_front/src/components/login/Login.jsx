import "../login/login.css";
import axios from "../../api/axios.js";
import React, { useState } from "react";
import imgemail from "../../assets/email.png";
import imgpassword from "../../assets/password.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handelLogin = async (event) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        try {
            await axios.post('/login', { email, password });
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    // const handelLogin = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await axios.post("/login", { email, password });
    //         setEmail("");
    //         setPassword("");
    //         navigate("/");
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // const handelLogin = () => {
    //     console.log(email + " " + password);
    // }

    return (
        <>
            <form onSubmit={handelLogin}>
                <div className="body">
                    <div className="Logcontainer">
                        <div className="header">
                            <div className="Logtext">Login</div>
                            <div className="underline"></div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <img src={imgemail} alt="" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input">
                                <img src={imgpassword} alt="" />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Mot de pass"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="submit-container">
                            {/* Toggle the 'action' state when clicked */}
                            <button
                                type="submit"
                                className="submit"
                                id="login"
                                //onClick={handelLogin}
                            >
                                <Link to="/login" className="loglink">
                                    Login
                                </Link>
                            </button>
                            <button className="submit" id="sign">
                                <Link to="/signup" className="signlink">
                                    Sign up
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
