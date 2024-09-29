import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generalUserAction } from "../store/generalUser";
import { serviceProviderActions } from "../store/serviceProvider";

const ServiceProviderLogin = () => {
    const email = useRef();
    const password = useRef();
    // const {isLoggedIn} = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        const currEmail = email.current.value;
        const currPassword = password.current.value;

        const loginResponse = await fetch(
            "/api/serviceProvider/serviceProviderLogin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: currEmail,
                    password: currPassword,
                }),
            }
        );
        const data = await loginResponse.json();
        console.log(data);

        if (loginResponse.ok) {
            const response = await fetch("/api/users/getUsers");
            const users = await response.json();
            dispatch(
                serviceProviderActions.loggedIn({
                    username: data.username,
                    currentUserList: users,
                    serviceProvider : data,
                })
            );
            dispatch(
                generalUserAction.setGeneralUser({
                    userType: "serviceProvider",
                })
            );
        } else {
            console.log("Login failed. Please check your credentials.");
        }
    }

    return (
        <div className="container mt-5">
            <h2>ServiceProvider Login</h2>
            {/* <GoogleSigninButton></GoogleSigninButton> */}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        ref={email}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        ref={password}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default ServiceProviderLogin;
