import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({setLoggedIn}) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage("Error: The passwords must match");
    } else {
      fetch("http://127.0.0.1:5000/user/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "Error: The username is already registered.") {
            setError(true);
            setErrorMessage("Error: The username is already registered.");
          } else {
            setError(false);
            setErrorMessage("");
            setLoggedIn(true);
            navigate("/");
          }
        })
        .catch((error) => {
          console.log("Error with creating an account", error);
          setError(true);
          setErrorMessage("Error setting up your account, please try again!");
        });
    }
  };

  return (
    <div className="signup">
      <div className="signupWrapper">
          <form className="signupBox" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="signupInput"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="signupInput"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="signupInput"
              value={confirmPassword}
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="signupButton">
              Sign Up
            </button>
            <Link className="loginLink" to="/login">
              Already Registered? Login Here.
            </Link>
          </form>

          <h6
            className="errorMessage"
            style={{ visibility: error ? "visible" : "hidden" }}
          >
            {errorMessage}
          </h6>
        </div>
    </div>
  );
};

export default Signup;