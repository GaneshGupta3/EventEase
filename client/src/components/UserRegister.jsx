import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";

const UserRegister = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const currUsername = username.current.value;
        const currEmail = email.current.value;
        const currPassword = password.current.value;

        // Basic form validation
        if (!currUsername || !currEmail || !currPassword) {
            alert("Please fill all fields!");
            return;
        }

        const registerResponse = await fetch("/api/users/registerUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: currUsername,
                email: currEmail,
                password: currPassword,
            }),
        });
        const data = await registerResponse.json();
        if (!registerResponse.ok) {
            alert(data.message);
        } else {
            alert("user Successfully created");
            navigate("/user/login");
            // Clear input fields after submitting
            username.current.value = "";
            email.current.value = "";
            password.current.value = "";
        }
    };
    const handleCancle = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="create-account">
            <div className="frame">
                <div className="log-in">
                    <div className="div">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="request-for-visit">
                                        Create Account
                                    </div>
                                    <img
                                        onClick={handleCancle}
                                        style={{ cursor: "pointer" }}
                                        className="icon-close-v"
                                        alt="Icon close v"
                                        src="https://c.animaapp.com/WW0sOHBk/img/icon---24px---close---v-2.svg"
                                    />
                                </div>
                                <div className="labels-wrapper">
                                    <div className="labels">
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <IoPersonCircleOutline
                                                    size={25}
                                                />
                                                <input
                                                    type="text"
                                                    ref={username}
                                                    className="Input"
                                                    placeholder="enter your username"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <MdOutlineMail size={25} />
                                                <input
                                                    type="text"
                                                    ref={email}
                                                    className="Input"
                                                    placeholder="enter your email"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <FaKey size={25} />
                                                <input
                                                    type="password"
                                                    ref={password}
                                                    className="Input"
                                                    placeholder="enter your password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="check-wrapper">
                                <div className="check">
                                    <div className="check-list" />
                                    <p className="i-agree-to-all-terms">
                                        I agree to all Terms &amp; Conditions
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="button-style-small-wrapper"
                            onClick={handleRegister}
                        >
                            <div className="button-style-small">
                                <div className="send-request">
                                    Create Account
                                </div>
                            </div>
                        </div>
                        <img
                            className="line"
                            alt="Line"
                            src="https://c.animaapp.com/WW0sOHBk/img/line-3.svg"
                        />
                        <div className="frame-6">
                            <div className="don-t-have-an">
                                Have an account?
                            </div>
                            <Link to={"/user/login"} className="text-wrapper">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
