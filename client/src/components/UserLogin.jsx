import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { useNavigate } from "react-router-dom";
import { generalUserAction } from "../store/generalUser";

const UserLogin = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  async function handleLogin(event) {
    event.preventDefault();
    const currEmail = email.current.value;
    const currPassword = password.current.value;

    const loginResponse = await fetch("/api/users/userExists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currEmail,
        password: currPassword,
      }),
    });
    const data = await loginResponse.json();
    console.log(data);
    if(loginResponse.ok){
      const response = await fetch("/api/serviceProvider/getServiceProviders");
      const serviceProviders = await response.json();
      console.log(serviceProviders); //all the service providers
      dispatch(userActions.loggedIn({
        username : data.username,
        currentServiceProviderList : serviceProviders
      }));
      dispatch(generalUserAction.setGeneralUser({userType : "user"}));
      // navigate("/user/")
    }
    else{
      console.log("something went wrong login again");
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
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

export default UserLogin;
