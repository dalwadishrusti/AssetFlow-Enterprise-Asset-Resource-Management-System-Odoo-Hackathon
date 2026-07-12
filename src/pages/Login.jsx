import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div className="container">

      {login ? (
        <div className="card">

          <h1>AssetFlow - Login</h1>

          <div className="logo">AF</div>

          <form>

            <label>Email</label>

            <input
              type="email"
              placeholder="name@company.com"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="********"
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

          <form>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="name@company.com"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create Password"
            />

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm Password"
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