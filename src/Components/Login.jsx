import React, { useState, useEffect } from "react";
import "./Mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../helpers/login";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("users")));
  }, []);

  const loginHandler = () => {
    if (email === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      const e = login(data, email, password, navigate, props.state);
      setError(e);
    }
  };
  return (
    <div className="register__contnainer">
      <div className="register__box">
        <h1 style={{ color: "rgb(0,208,176)" }}>Login here</h1>
        <div className="input__container">
          <div className="input__options">
            <label htmlFor="'">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input__options">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p
            style={{ color: "red", display: "flex", justifyContent: "center" }}
          >
            {error}
          </p>

          <div className="button">
            <button onClick={loginHandler}>Login</button>
          </div>
          <div className="link">
            <p>
              Dont have any Account?
              <Link to={"register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
