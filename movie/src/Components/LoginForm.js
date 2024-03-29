import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../loggedSlice";
import { useCookies } from "react-cookie";

export default function LoginForm() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to clear error message
  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  // Function to handle changes in the username field
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    clearErrorMessage(); // Clear error message when username changes
  };

  // Function to handle changes in the password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearErrorMessage(); // Clear error message when password changes
  };

  // Function to handle unsuccessful login
  const handleLoginFailure = () => {
    setErrorMessage("Wrong username or password"); // Set error message state
  };

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setErrorMessage(""); // Clear error message state
  };

  const sendData = (e) => {
    e.preventDefault();
    const info = { username, password }; // Create an object with username and password
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

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
        console.log(JSON.stringify(obj));
        //setting user object in localstorage..BM
        localStorage.setItem("user", JSON.stringify(obj));
        if (Object.keys(obj).length === 0) {
          handleLoginFailure(); // Call function to handle unsuccessful login
        } else {
          if (obj.status === false) {
            alert("Request has not been approved");
          } else {
            dispatch(login()); // Set login state to true
            if (obj.role_id.role_id === 1) {
              
              navigate("/user");
            } else if (obj.role_id.role_id === 2) {

              const theaterAdminInfo = { username: username, password: password };
              const theaterAdminReqOptions = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(theaterAdminInfo),
              };

              fetch("http://localhost:8080/getTheaterAdminStatus", theaterAdminReqOptions)
                .then((resp) => {
                  if (resp.ok) {
                    return resp.json();
                  } else {
                    console.log(resp.statusText);
                    throw new Error("Server error");
                  }
                })
                .then((statusObj) => {
                 
                  if (statusObj.theater_status === 1) {                   
                    
                    dispatch(login()); // Set login state to true
                    navigate("/theatreAdmin");
                  } else {
                    alert("Access not granted");
                  }
                })
                .catch((error) => console.error("Error checking theater admin status:", error));
            } else if (obj.role_id.role_id === 3) {
             
              navigate("/systemAdmin");
            }
          }
        }
      })
      .catch((error) => {
        //handleLoginFailure();
        alert("Connection Error!!!", error);
      });
  };

  return (
    <div style={{ height: '100vh', paddingLeft:'50vh', paddingTop:'25vh'}}>
      <form className="my-4">
        <h1 >LOGIN</h1>
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
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
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
              disabled={!username || !password}
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => {
                setUsername("");
                setPassword("");
                clearErrorMessage();
              }}
            >
              Reset
            </button>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
