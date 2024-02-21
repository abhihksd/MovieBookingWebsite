// import { Form, Button, Image } from "react-bootstrap/";
// import "../CSS/LoginForm.css";
// import { Component, useReducer, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../loggedSlice";

// export default function LoginForm() {
//   const init = {
//     username: "",
//     password: "",
//   };
//   // const dispatch=useDispatch()
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         return { ...state, [action.fld]: action.val };
//       case "reset":
//         return init;
//     }
//   };
//   const [info, dispatch] = useReducer(reducer, init);
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const reducerAction = useDispatch();
//   //to login
//   const sendData = (e) => {
//     e.preventDefault();
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };

//     fetch("http://localhost:8080/chkLogin", reqOptions)
//       .then((resp) => {
//         if (resp.ok) {
//           console.log(resp.status);
//           return resp.text();
//         } else {
//           console.log(resp.statusText);
//           throw new Error("Server error");
//         }
//       }) //revice normal text
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           //if uid or pwd is wrong
//           setMsg("Wrong uid or password");
//         } else {
//           if (obj.status === false) {
//             //req is not approved
//             alert("request has not been approved");
//           } else {
//             reducerAction(login());

//             if (obj.role_id.role_id === 1) {
//               navigate("/user");
//             } else if (obj.role_id.role_id === 2) {
//               navigate("/theatreAdmin");
//             } else if (obj.role_id.role_id === 3) {
//               navigate("/systemAdmin");
//             }
//           }
//         }
//       })

//       .catch((error) => alert("Connection Error!!!!"));
//   };

//   return (
//     <div>
//       <form className="my-4">
//         <div className="mb-3 row">
//           <label htmlFor="username" className="col-sm-2 col-form-label">
//             Enter Username:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="username"
//               name="username"
//               value={info.username}
//               onChange={(e) => {
//                 dispatch({
//                   type: "update",
//                   fld: "username",
//                   val: e.target.value,
//                 });
//               }}
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="password" className="col-sm-2 col-form-label">
//             Enter Password:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="password"
//               className="form-control form-control-sm"
//               id="password"
//               name="password"
//               value={info.password}
//               onChange={(e) => {
//                 dispatch({
//                   type: "update",
//                   fld: "password",
//                   val: e.target.value,
//                 });
//               }}
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-2"></div>
//           <div className="col-sm-10">
//             <button
//               type="submit"
//               className="btn btn-primary me-2"
//               onClick={(e) => {
//                 sendData(e);
//               }}
//             >
//               Submit
//             </button>
//             <button
//               type="reset"
//               className="btn btn-danger"
//               onClick={() => {
//                 dispatch({ type: "reset" });
//               }}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>

//       <p>{JSON.stringify(info)}</p>
//       <p className="login-message">{msg}</p>
//     </div>
//   );
// }

//new code using STATE
// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../loggedSlice";

// export default function LoginForm() {
//   const [username, setUsername] = useState(""); // State for username
//   const [password, setPassword] = useState(""); // State for password
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const sendData = (e) => {
//     e.preventDefault();
//     const info = { username, password }; // Create an object with username and password
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };

//     fetch("http://localhost:8080/chkLogin", reqOptions)
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.text();
//         } else {
//           console.log(resp.statusText);
//           throw new Error("Server error");
//         }
//       })
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           console.log("Wrong uid or password");
//         } else {
//           if (obj.status === false) {
//             alert("Request has not been approved");
//           } else {
//             dispatch(login()); // Set login state to true
//             if (obj.role_id.role_id === 1) {
//               navigate("/user");
//             } else if (obj.role_id.role_id === 2) {
//               navigate("/theatreAdmin"); // Pass username and password as state
//             } else if (obj.role_id.role_id === 3) {
//               navigate("/systemAdmin", { state: { username, password } });
//             }
//           }
//         }
//       })
//       .catch((error) => alert("Wrong uid or pwd"));
//   };

//   return (
//     <div>
//       <form className="my-4">
//         <div className="mb-3 row">
//           <label htmlFor="username" className="col-sm-2 col-form-label">
//             Enter Username:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)} // Update username state
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="password" className="col-sm-2 col-form-label">
//             Enter Password:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="password"
//               className="form-control form-control-sm"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} // Update password state
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-2"></div>
//           <div className="col-sm-10">
//             <button
//               type="submit"
//               className="btn btn-primary me-2"
//               onClick={sendData}
//             >
//               Submit
//             </button>
//             <button
//               type="reset"
//               className="btn btn-danger"
//               onClick={() => {
//                 setUsername("");
//                 setPassword("");
//               }}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>

//     </div>
//   );
// }

//code from shubham yache's branch (on 16/02/2024 8:31pm)

// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../loggedSlice";
// import { useCookies } from "react-cookie";

// export default function LoginForm() {
//   const [username, setUsername] = useState(""); // State for username
//   const [password, setPassword] = useState(""); // State for password
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const sendData = (e) => {
//     e.preventDefault();
//     const info = { username, password }; // Create an object with username and password
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };

//     fetch("http://localhost:8080/chkLogin", reqOptions)
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.text();
//         } else {
//           console.log(resp.statusText);
//           throw new Error("Server error");
//         }
//       })
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           console.log("Wrong uid or password");
//         } else {
//           if (obj.status === false) {
//             alert("Request has not been approved");
//           } else {
//             dispatch(login()); // Set login state to true
//             if (obj.role_id.role_id === 1) {
//               navigate("/user");
//             } else if (obj.role_id.role_id === 2) {
//               const theaterAdminInfo = {
//                 username: obj.username,
//                 password: obj.password,
//               };
//               const theaterAdminReqOptions = {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify(theaterAdminInfo),
//               };

//               fetch(
//                 "http://localhost:8080/getTheaterAdminStatus",
//                 theaterAdminReqOptions
//               )
//                 .then((resp) => {
//                   if (resp.ok) {
//                     return resp.json();
//                   } else {
//                     console.log(resp.statusText);
//                     throw new Error("Server error");
//                   }
//                 })
//                 .then((statusObj) => {
//                   console.log("above status object");
//                   console.log("This is an admin status" + statusObj.theater_status);

//                   if (statusObj.theater_status === 1) {
//                     console.log("in status object");

//                     dispatch(login()); // Set login state to true
//                     navigate("/theatreAdmin");
//                   } else {
//                     alert("Access not granted");
//                   }
//                 })
//                 .catch((error) =>
//                   console.error("Error checking theater admin status:", error)
//                 );
//             } else if (obj.role_id.role_id === 3) {
//               navigate("/systemAdmin");
//             }
//           }
//         }
//       })
//       .catch((error) => alert("Connection Error!!!"));
//   };

//   return (
//     <div>
//       <form className="my-4">
//         <div className="mb-3 row">
//           <label htmlFor="username" className="col-sm-2 col-form-label">
//             Enter Username:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="password" className="col-sm-2 col-form-label">
//             Enter Password:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="password"
//               className="form-control form-control-sm"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-2"></div>
//           <div className="col-sm-10">
//             <button
//               type="submit"
//               className="btn btn-primary me-2"
//               onClick={sendData}
//             >
//               Submit
//             </button>
//             <button
//               type="reset"
//               className="btn btn-danger"
//               onClick={() => {
//                 setUsername("");
//                 setPassword("");
//               }}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

//code with login validation

//import { Form, Button, Image } from "react-bootstrap/";
// import React, { useState } from "react";
// import "../CSS/LoginForm.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../loggedSlice";

// export default function LoginForm() {
//   const [username, setUsername] = useState(""); // State for username
//   const [password, setPassword] = useState(""); // State for password
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const sendData = (e) => {
//     e.preventDefault();

//     const info = { username, password }; // Create an object with username and password
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };

//     fetch("http://localhost:8080/chkLogin", reqOptions)
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.text();
//         } else {
//           console.log(resp.statusText);
//           throw new Error("Server error");
//         }
//       })
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           alert("Wrong uid or password");
//         } else {
//           if (obj.status === false) {
//             alert("Request has not been approved");
//           } else {
//             dispatch(login()); // Set login state to true
//             if (obj.role_id.role_id === 1) {
//               navigate("/user");
//             } else if (obj.role_id.role_id === 2) {
//               const theaterAdminInfo = {
//                 username: obj.username,
//                 password: obj.password,
//               };
//               const theaterAdminReqOptions = {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify(theaterAdminInfo),
//               };

//               fetch(
//                 "http://localhost:8080/getTheaterAdminStatus",
//                 theaterAdminReqOptions
//               )
//                 .then((resp) => {
//                   if (resp.ok) {
//                     return resp.json();
//                   } else {
//                     console.log(resp.statusText);
//                     throw new Error("Server error");
//                   }
//                 })
//                 .then((statusObj) => {
//                   console.log("above status object");
//                   console.log(
//                     "This is an admin status" + statusObj.theater_status
//                   );

//                   if (statusObj.theater_status === 1) {
//                     console.log("in status object");

//                     dispatch(login()); // Set login state to true
//                     navigate("/theatreAdmin");
//                   } else {
//                     alert("Access not granted");
//                   }
//                 })
//                 .catch((error) =>
//                   console.error("Error checking theater admin status:", error)
//                 );
//             } else if (obj.role_id.role_id === 3) {
//               navigate("/systemAdmin");
//             }
//           }
//         }
//       })
//       .catch((error) => alert("Connection Error!!!"));
//   };

//   return (
//     <div>
//       <form className="my-4">
//         <div className="mb-3 row">
//           <label htmlFor="username" className="col-sm-2 col-form-label">
//             Enter Username:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="password" className="col-sm-2 col-form-label">
//             Enter Password:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="password"
//               className="form-control form-control-sm"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-2"></div>
//           <div className="col-sm-10">
//             <button
//               type="submit"
//               className="btn btn-primary me-2"
//               onClick={sendData}
//               disabled={!username || !password}
//             >
//               Submit
//             </button>
//             <button
//               type="reset"
//               className="btn btn-danger"
//               onClick={() => {
//                 setUsername("");
//                 setPassword("");
//               }}
//             >
//               Reset
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../loggedSlice";

// export default function LoginForm() {
//   const [username, setUsername] = useState(""); // State for username
//   const [password, setPassword] = useState(""); // State for password
//   const [errorMessage, setErrorMessage] = useState(""); // State for error message
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const sendData = (e) => {
//     e.preventDefault();

//     const info = { username, password }; // Create an object with username and password
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);

//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     };

//     fetch("http://localhost:8080/chkLogin", reqOptions)
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.text();
//         } else {
//           console.log(resp.statusText);
//           throw new Error("Server error");
//         }
//       })
//       .then((text) => (text.length ? JSON.parse(text) : {}))
//       .then((obj) => {
//         if (Object.keys(obj).length === 0) {
//           setErrorMessage("Wrong uid or password"); // Set error message
//         } else {
//           if (obj.status === false) {
//             alert("Request has not been approved");
//           } else {
//             dispatch(login()); // Set login state to true
//             if (obj.role_id.role_id === 1) {
//               navigate("/user");
//             } else if (obj.role_id.role_id === 2) {
//               const theaterAdminInfo = {
//                 username: obj.username,
//                 password: obj.password,
//               };
//               const theaterAdminReqOptions = {
//                 method: "POST",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify(theaterAdminInfo),
//               };

//               fetch(
//                 "http://localhost:8080/getTheaterAdminStatus",
//                 theaterAdminReqOptions
//               )
//                 .then((resp) => {
//                   if (resp.ok) {
//                     return resp.json();
//                   } else {
//                     console.log(resp.statusText);
//                     throw new Error("Server error");
//                   }
//                 })
//                 .then((statusObj) => {
//                   console.log("above status object");
//                   console.log("This is an admin status" + statusObj.theater_status);

//                   if (statusObj.theater_status === 1) {
//                     console.log("in status object");

//                     dispatch(login()); // Set login state to true
//                     navigate("/theatreAdmin");
//                   } else {
//                     alert("Access not granted");
//                   }
//                 })
//                 .catch((error) =>
//                   console.error("Error checking theater admin status:", error)
//                 );
//             } else if (obj.role_id.role_id === 3) {
//               navigate("/systemAdmin");
//             }
//           }
//         }
//       })
//       .catch((error) => alert("Connection Error!!!"));
//   };

//   // Function to clear error message
//   const clearErrorMessage = () => {
//     setErrorMessage("");
//   };

//   // Function to handle changes in the username field
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//     clearErrorMessage(); // Clear error message when username changes
//   };

//   // Function to handle changes in the password field
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     clearErrorMessage(); // Clear error message when password changes
//   };

//   return (
//     <div>
//       <form className="my-4" >

//         <div className="mb-3 row">
//           <label htmlFor="username" className="col-sm-2 col-form-label">
//             Enter Username:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="username"
//               name="username"
//               value={username}
//               onChange={handleUsernameChange} // Attach onChange event handler

//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="password" className="col-sm-2 col-form-label">
//             Enter Password:
//           </label>
//           <div className="col-sm-4">
//             <input
//               type="password"
//               className="form-control form-control-sm"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handlePasswordChange} // Attach onChange event handler
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-2"></div>
//           <div className="col-sm-10">
//             <button
//               type="submit"
//               className="btn btn-primary me-2"
//               onClick={sendData}
//               disabled={!username || !password} // Disable button if either username or password is empty
//             >
//               Submit
//             </button>
//             <button
//               type="reset"
//               className="btn btn-danger"
//               onClick={() => {
//                 setUsername("");
//                 setPassword("");
//                 clearErrorMessage(); // Clear error message when reset button is clicked
//               }}
//             >
//               Reset
//             </button>
//             {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Display error message if set */}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

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
              const theaterAdminInfo = {
                username: username,
                password: password,
              };
              const theaterAdminReqOptions = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(theaterAdminInfo),
              };

              fetch(
                "http://localhost:8080/getTheaterAdminStatus",
                theaterAdminReqOptions
              )
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
                .catch((error) =>
                  console.error("Error checking theater admin status:", error)
                );
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
