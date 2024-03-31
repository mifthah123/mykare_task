import React, { useEffect, useState } from "react";
import "./Mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import { register, validation } from "../helpers/register";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
  }, []);

  const registerHandler = () => {
    if (!validation("users", data, email)) {
      setError("Email is already exists. Please try another email.");
    } else {
      register("users", data, {
        username: username,
        email: email,
        PhoneNumber: number,
        Password: password,
      });
      setData(JSON.parse(localStorage.getItem("users")));
      setError("");
      navigate("/");
    }
  };
  return (
    <div className="register__contnainer">
      <div className="register__box">
        <h1 style={{ color: "rgb(0,208,176)" }}>Register Here</h1>
        <div className="input__container">
          <div className="input__options">
            <p>Username</p>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input__options">
            <p>Email</p>
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input__options">
            <p>Phone Number</p>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div className="input__options">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p
            style={{ color: "red", display: "flex", justifyContent: "center" }}
          >
            {error}
          </p>
          <div className="button">
            <button onClick={registerHandler}>Register</button>
          </div>
          <div className="link">
            <p>
              Already have an Account? <Link to={"/"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
