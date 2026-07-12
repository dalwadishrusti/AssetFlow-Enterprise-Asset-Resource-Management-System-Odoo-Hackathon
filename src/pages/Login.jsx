import { useState } from "react";
import "./CSS/Login.css";
import users from "../data/user.json";

function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const localUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const allUsers = [...users, ...localUsers];

    const user = allUsers.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (user) {

      alert("Welcome " + user.name);

    }
    else {

      alert("Invalid Email or Password");

    }

  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Check empty fields
    if (
      fullName === "" ||
      signupEmail === "" ||
      signupPassword === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    // Passwords match?
    if (signupPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Get users already stored in localStorage
    const localUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // Combine demo users + local users
    const allUsers = [...users, ...localUsers];

    // Check if email already exists
    const existingUser = allUsers.find(
      (user) => user.email === signupEmail
    );

    if (existingUser) {
      alert("Email already exists.");
      return;
    }

    // Create new user
    const newUser = {
      id: allUsers.length + 1,
      name: fullName,
      email: signupEmail,
      password: signupPassword,
      role: "Employee",
      department: "Not Assigned",
      phone: "",
      status: "Active"
    };

    // Save only the new users in localStorage
    localUsers.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(localUsers)
    );

    alert("Account created successfully!");

    // Clear form
    setFullName("");
    setSignupEmail("");
    setSignupPassword("");
    setConfirmPassword("");

    // Return to login page
    setLogin(true);
  };

  return (
    <div className="container">

      {login ? (
        <div className="card">

          <h1>AssetFlow - Login</h1>

          <div className="logo">AF</div>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p>Forgot Password?</p>

            <button type="submit">
              Login
            </button>

          </form>

          <hr />

          <h3>New here?</h3>

          <p>
            Sign up creates an employee account.
            <br />
            Admin roles assigned later.
          </p>

          <button onClick={() => setLogin(false)}>
            Create Account
          </button>

        </div>

      ) : (

        <div className="card">

          <h1>AssetFlow - Sign Up</h1>

          <div className="logo">AF</div>

          <form onSubmit={handleSignup}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="name@company.com"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">
              Create Account
            </button>

          </form>

          <hr />

          <button onClick={() => setLogin(true)}>
            Back to Login
          </button>

        </div>

      )}

    </div>
  );
}

export default Login;