import { useRef } from "react";

const UserRegister = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleRegister = async(event) => {
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
        username : currUsername,
        email: currEmail,
        password: currPassword,
      }),
    });
    const data = await registerResponse.json();
    if(!registerResponse.ok){
      alert(data.message);
    }
    alert("user Successfully created");
    
    // Clear input fields after submitting
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            ref={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            ref={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
