import { Form, Button, Image } from "react-bootstrap/";
import "../CSS/LoginForm.css";
import { Component, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../loggedSlice";
// import img from "../img/movie.jpg";


export default function LoginForm() {
  const init = {
    username: "",
    password: "",
  };
  // const dispatch=useDispatch()
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
    }
  };
  const [info, dispatch] = useReducer(reducer, init);
  const [msg , setMsg] = useState("");
  const navigate = useNavigate();

const reducerAction =  useDispatch();
  //to login
  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info)
    };

   
    fetch("http://localhost:8080/chkLogin", reqOptions)
      .then((resp) =>{
        if(resp.ok){
          console.log(resp.status);
          return resp.text();
        }
        else{
          console.log(resp.statusText);
          throw new Error("Server error");
        }
      }) //revice normal text
      .then((text) => text.length ? JSON.parse(text): {}) //to check length of text
      .then(obj => {
        if(Object.keys(obj).length === 0){ //if uid or pwd is wrong
          setMsg("Wrong uid or password")
        }
        else{
          if(obj.status === false){ //req is not approved
            alert("request has not been approved")
           
          }
          else{
            reducerAction(login()) //state false to true

            if(obj.role_id.role_id === 1){
              
              navigate("/user")
            }
            else if (obj.role_id.role_id === 2){
              navigate("/theatreAdmin")
            }
            else if (obj.role_id.role_id === 3){
              navigate("/systemAdmin")
            }
          }
        }
      })
      .catch((error)=>alert("wrong uid or pwd"))
  };

 
  return (
    <div>
      
<form className="my-4">
  <div className="mb-3 row">
    <label htmlFor="username" className="col-sm-2 col-form-label">
      Enter UID:
    </label>
    <div className="col-sm-4">
      <input
        type="text"
        className="form-control form-control-sm"
        id="username"
        name="username"
        value={info.username}
        onChange={(e) => {
          dispatch({
            type: "update",
            fld: "username",
            val: e.target.value,
          });
        }}
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
        value={info.password}
        onChange={(e) => {
          dispatch({
            type: "update",
            fld: "password",
            val: e.target.value,
          });
        }}
      />
      
    </div>
  </div>
  <div className="row">
    <div className="col-sm-2"></div>
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary me-2" onClick={(e) => { sendData(e) }}>Submit</button>
      <button type="reset" className="btn btn-danger" onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
    </div>
  </div>
  
</form>
  

      {/* <p>{JSON.stringify(info)}</p> */}
      {/* <Image className="image-container" src={img}></Image> */}
    </div>
  );
}
