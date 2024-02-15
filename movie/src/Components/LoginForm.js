import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../loggedSlice";
import { useCookies } from "react-cookie";

export default function LoginForm() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["username", "password"]); // Cookies

  const sendData = (e) => {
    e.preventDefault();
    const info = { username, password }; // Create an object with username and password
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:8080/chkLogin", reqOptions)
      .then((resp) => {
        if (resp.ok) {
          return resp.text();
        } else {
          console.log(resp.statusText);
          throw new Error("Server error");
        }
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          console.log("Wrong uid or password");
        } else {
          if (obj.status === false) {
            alert("Request has not been approved");
          } else {
            dispatch(login()); // Set login state to true
            if (obj.role_id.role_id === 1) {
              setCookie("username", username, { path: "/" });
              setCookie("password", password, { path: "/" });
              navigate("/user");
            } else if (obj.role_id.role_id === 2) {
              // Store username and password in cookies
              setCookie("username", username, { path: "/" });
              setCookie("password", password, { path: "/" });
              navigate("/theatreAdmin");
            } else if (obj.role_id.role_id === 3) {
              setCookie("username", username, { path: "/" });
              setCookie("password", password, { path: "/" });
              navigate("/systemAdmin");
            }
          }
        }
      })
      .catch((error) => alert("Wrong uid or pwd"));
  };

  return (
    <div>
      <form className="my-4">
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Enter Username:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control form-control-sm"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Enter Password:
          </label>
          <div className="col-sm-4">
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary me-2"
              onClick={sendData}
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => {
                setUsername(""); // Reset username state
                setPassword(""); // Reset password state
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
