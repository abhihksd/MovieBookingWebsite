// import { useReducer, useState } from "react";
// import { Form, FormGroup, FormLabel, Button, Image } from "react-bootstrap";
// // import img from "../img/movie.jpg"
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const nav = useNavigate();
//   const [msg, setMsg] = useState("");
//   //const [licenseNumber,setLicenseNumber]=useState("");                  //1
//   const init = {
//     name: { value: "", valid: false, touched: false, error: "" },
//     email: { value: "", valid: false, touched: false, error: "" },
//     phone: { value: "", valid: false, touched: false, error: "" },
//     username: { value: "", valid: false, touched: false, error: "" },
//     password: { value: "", valid: false, touched: false, error: "" },
//     address: { value: "", valid: false, touched: false, error: "" },
//     userType: { value: "", valid: false, touched: false, error: "" },
//     formValid: false,
//   };
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         const { key, value, touched, valid, error, formValid } = action.data;
//         return { ...state, [key]: { value, touched, valid, error }, formValid };
//       case "reset":
//         return init;
//       default:
//         return init;
//     }
//   };

//   const handleReset = () => {
//     dispatch({ type: "reset" });
//   };

//   const validateData = (key, val) => {
//     let valid = true;
//     let error = "";
//     switch (key) {
//       case "name":
//         // var pattern = /^[a-zA-Z\s]{1,20}$/;
//         var pattern = /^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/; //First Alphabet of First and Last NAME should be capital
//         if (!pattern.test(val)) {
//           valid = false;
//           error = "only alphabet allowed";
//         }
//         break;
//       case "username":
//         pattern = /^[a-zA-Z0-9._-]{6,15}$/; //range from 6 to 15
//         if (!pattern.test(val)) {
//           valid = false;
//           error = "error";
//         }
//         break;
//       case "email":
//         pattern = /^[\w.#-]{4,20}@[A-Za-z]{4,10}\.[a-z]{2,3}/;
//         if (!pattern.test(val)) {
//           valid = false;
//           error = "email error";
//         }
//         break;
//       case "phone":
//         pattern = /^[897]{1}[0-9]{9}/;
//         if (!pattern.test(val)) {
//           valid = false;
//           error = "can only contain numbers";
//         }
//         break;
//       case "password":
//         pattern =
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!pattern.test(val)) {
//           valid = false;
//           error = "pass needs a lower upper and uppercase and digit ";
//         }
//         break;
//       case "address":
//         if (val.trim() === "") {
//           valid = false;
//           error = "Address is required";
//         }
//         break;
//       case "userType":
//         if (val.trim() === "") {
//           valid = false;
//           error = "Please select a user type";
//         }
//         break;
//       default:
//         valid = true;
//         error = "";
//     }
//     return { valid: valid, error: error };
//   };

//   const handleChange = (key, value) => {
//     const { valid, error } = validateData(key, value);
//     console.log(user.name.valid);
//     let formValid = true;
//     for (let k in user) {
//       if (user[k].valid == false) {
//         formValid = false;
//         break;
//       }
//     }
//     dispatch({
//       type: "update",
//       data: { key, value, touched: true, valid, error, formValid },
//     });
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     const reqOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         name: user.name.value,
//         email: user.email.value,
//         phone_number: user.phone.value,
//         address: user.address.value,
//         userType: user.userType.value,
//         username: user.username.value,
//         password: user.password.value,
//       }),
//     };

//     fetch("http://localhost:8080/registeruser", reqOption)
//       .then((resp) => resp.text())
//       .then((data) => {
//         setMsg(data);
//         if (data.length > 0) {
//           // Check the updated value of data
//           nav("/login");
//         }
//       });
//   };

//   const [check, setCheck] = useState(" ");
//   const [user, dispatch] = useReducer(reducer, init);
//   console.log(user);

//   return (
//     <div className="row">
//       <div className="col">
//         {/* <Image src={img} style={{ width: "500px", height: "500px", margin: "0 auto" }} alt="Logo" /> */}
//       </div>

//       <div className="col" style={{ marginTop: "10px" }}>
//         <Form className="login-form" onReset={handleReset}>
//           <FormLabel>
//             <h1 style={{ textAlign: "center" }}>Registration</h1>
//           </FormLabel>
//           {/* Input for name */}
//           <FormGroup>
//             <FormLabel>Full Name:</FormLabel>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               value={user.name.value}
//               onChange={(e) => {
//                 handleChange("name", e.target.value);
//               }}
//               className={`form-control ${
//                 user.name.touched && !user.name.valid ? "is-invalid" : ""
//               }`}
//             />
//             {/* Error message for name */}
//             <div className="invalid-feedback">{user.name.error}</div>
//           </FormGroup>

//           {/* Input for email */}
//           <FormGroup>
//             <FormLabel>Email ID:</FormLabel>
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter email"
//               value={user.email.value}
//               onChange={(e) => {
//                 handleChange("email", e.target.value);
//               }}
//               className={`form-control ${
//                 user.email.touched && !user.email.valid ? "is-invalid" : ""
//               }`}
//             />
//             {/* Error message for email */}
//             <div className="invalid-feedback">{user.email.error}</div>
//           </FormGroup>

//           {/* Input for phone */}
//           <FormGroup>
//             <FormLabel>Mobile No:</FormLabel>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter phone number"
//               maxLength={10}
//               value={user.phone.value}
//               onChange={(e) => {
//                 handleChange("phone", e.target.value);
//               }}
//               className={`form-control ${
//                 user.phone.touched && !user.phone.valid ? "is-invalid" : ""
//               }`}
//             />
//             {/* Error message for phone */}
//             <div className="invalid-feedback">{user.phone.error}</div>
//           </FormGroup>

//           {/* Input address */}
//           <FormGroup>
//             <FormLabel>Address:</FormLabel>
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter address"
//               value={user.address.value}
//               onChange={(e) => {
//                 handleChange("address", e.target.value);
//               }}
//               className={`form-control ${
//                 user.address.touched && !user.address.valid ? "is-invalid" : ""
//               }`}
//             />
//             <div className="invalid-feedback">{user.address.error}</div>
//           </FormGroup>

//           {/* Select for user type */}
//           <FormGroup>
//             <FormLabel>User Type:</FormLabel>
//             <select
//               name="userType"
//               value={user.userType.value}
//               onChange={(e) => {
//                 handleChange("userType", e.target.value);
//               }}
//               className={`form-select ${
//                 user.userType.touched && !user.userType.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             >
//               <option value="type">Select User Type</option> //change
//               <option value="1">User</option>
//               <option value="2">Theater Admin</option>
//               <option value="3">System Admin</option>
//             </select>
//             <div className="invalid-feedback">{user.userType.error}</div>
//           </FormGroup>

//           {/* Input for username */}
//           <FormGroup>
//             <FormLabel>Username:</FormLabel>
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter username"
//               value={user.username.value}
//               onChange={(e) => {
//                 handleChange("username", e.target.value);
//               }}
//               // onBlur={()=>{
//               //   checkusername()
//               // }}
//               className={`form-control ${
//                 user.username.touched && !user.username.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             {/* Error message for username */}
//             <div className="invalid-feedback">{user.username.error}</div>
//             <div
//               className="check-div"
//               style={{ display: user.username.touched ? "block" : "none" }}
//             >
//               {check}
//             </div>
//           </FormGroup>

//           {/* Input for password */}
//           <FormGroup>
//             <FormLabel>Password:</FormLabel>
//             <input
//               type="text"
//               name="password"
//               placeholder="Enter password"
//               onChange={(e) => {
//                 handleChange("password", e.target.value);
//               }}
//               className={`form-control ${
//                 user.password.touched && !user.password.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             {/* Error message for password */}
//             <div className="invalid-feedback">{user.password.error}</div>
//           </FormGroup>

//           <div style={{ margin: "20px 0" }}></div>
//           <Button
//             variant="primary"
//             type="submit"

//             onClick={(e) => submitData(e)}
//             style={{ marginRight: "20px" }}
//             disabled={!user.formValid}
//           >
//             Submit
//           </Button>
//           <Button variant="danger" type="reset">
//             Reset
//           </Button>
//           <p style={{ color: msg == "success" ? "green" : "red" }}>{msg}</p>
//         </Form>
//       </div>

//       <div className="col"></div>
//     </div>
//   );
// }

//new code from shubham yache's branch(on 17/02/2024 8 :39 pm)

import { useReducer, useState } from "react";
import { Form, FormGroup, FormLabel, Button, Image } from "react-bootstrap";
// import img from "../img/movie.jpg"
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [msg, setMsg] = useState("");
  const [licenseNumber, setLicenseNumber] = useState(""); // 1. Add state for license number
  const [theater_name, setTheaterName] = useState("");
  const [total_seats, setTotalSeats] = useState("");
  const [theater_location, setTheaterLocation] = useState("");

  const init = {
    name: { value: "", valid: false, touched: false, error: "" },
    email: { value: "", valid: false, touched: false, error: "" },
    phone: { value: "", valid: false, touched: false, error: "" },
    username: { value: "", valid: false, touched: false, error: "" },
    password: { value: "", valid: false, touched: false, error: "" },
    address: { value: "", valid: false, touched: false, error: "" },
    userType: { value: "", valid: false, touched: false, error: "" },
    formValid: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
      case "reset":
        return init;
      default:
        return init;
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const validateData = (key, val) => {
    let valid = true;
    let error = "";
    switch (key) {
      case "name":
        // var pattern = /^[a-zA-Z\s]{1,20}$/;
        var pattern = /^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/; //First Alphabet of First and Last NAME should be capital
        if (!pattern.test(val)) {
          valid = false;
          error = "First Alphabet of First and Last Name should be capital";
        }
        break;
      case "username":
        pattern = /^[a-zA-Z0-9._-]{6,15}$/; //range from 6 to 15
        if (!pattern.test(val)) {
          valid = false;
          error = "Username must be between 6 to 15 characters";
        }
        break;
      case "email":
        pattern = /^[\w.#-]{4,20}@[A-Za-z]{4,10}\.[a-z]{2,3}/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Invalid Email format ";
        }
        break;
      case "phone":
        pattern = /^[897]{1}[0-9]{9}/;
        if (!pattern.test(val)) {
          valid = false;
          error = "Enter 10 digit mobile number";
        }
        break;
      case "password":
        pattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!pattern.test(val)) {
          valid = false;
          error = " Password needs a lowercase,uppercase and a digit ";
        }
        break;
      case "address":
        if (val.trim() === "") {
          valid = false;
          error = "Address is required";
        }
        break;
      case "userType":
        if (val.trim() === "") {
          valid = false;
          error = "Please select a user type";
        }
        break;
      default:
        valid = true;
        error = "";
    }
    return { valid: valid, error: error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);
    console.log(user.name.valid);
    let formValid = true;
    for (let k in user) {
      if (user[k].valid == false) {
        formValid = false;
        break;
      }
    }
    dispatch({
      type: "update",
      data: { key, value, touched: true, valid, error, formValid },
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    const reqOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: user.name.value,
        email: user.email.value,
        phone_number: user.phone.value,
        address: user.address.value,
        userType: user.userType.value,
        username: user.username.value,
        password: user.password.value,
        licenseNumber: user.userType.value === "2" ? licenseNumber : "",
        theater_name: theater_name,
        total_seats: total_seats,
        theater_location: theater_location,
      }),
    };

    fetch(
      user.userType.value === "2"
        ? "http://localhost:8080/addTheater"
        : "http://localhost:8080/registeruser",
      reqOption
    )
      .then((resp) => resp.text())
      .then((data) => {
        setMsg(data);
        if (data.length > 0) {
          nav("/login");
        }
      });
  };

  const [check, setCheck] = useState(" ");
  const [user, dispatch] = useReducer(reducer, init);
  console.log(user);

  return (
    <div className="row">
      <div className="col">
        {/* <Image src={img} style={{ width: "500px", height: "500px", margin: "0 auto" }} alt="Logo" /> */}
      </div>

      <div className="col" style={{ marginTop: "10px" }}>
        <Form className="login-form" onReset={handleReset}>
          <FormLabel>
            <h1 style={{ textAlign: "center" }}>Registration</h1>
          </FormLabel>
          {/* Input for name */}
          <FormGroup>
            <FormLabel>Full Name:</FormLabel>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={user.name.value}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
              className={`form-control ${
                user.name.touched && !user.name.valid ? "is-invalid" : ""
              }`}
            />
            {/* Error message for name */}
            <div className="invalid-feedback">{user.name.error}</div>
          </FormGroup>

          {/* Input for email */}
          <FormGroup>
            <FormLabel>Email ID:</FormLabel>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={user.email.value}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
              className={`form-control ${
                user.email.touched && !user.email.valid ? "is-invalid" : ""
              }`}
            />
            {/* Error message for email */}
            <div className="invalid-feedback">{user.email.error}</div>
          </FormGroup>

          {/* Input for phone */}
          <FormGroup>
            <FormLabel>Mobile No:</FormLabel>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              maxLength={10}
              value={user.phone.value}
              onChange={(e) => {
                handleChange("phone", e.target.value);
              }}
              className={`form-control ${
                user.phone.touched && !user.phone.valid ? "is-invalid" : ""
              }`}
            />
            {/* Error message for phone */}
            <div className="invalid-feedback">{user.phone.error}</div>
          </FormGroup>

          {/* Input address */}
          <FormGroup>
            <FormLabel>Address:</FormLabel>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={user.address.value}
              onChange={(e) => {
                handleChange("address", e.target.value);
              }}
              className={`form-control ${
                user.address.touched && !user.address.valid ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{user.address.error}</div>
          </FormGroup>

          {/* Select for user type */}
          <FormGroup>
            <FormLabel>User Type:</FormLabel>
            <select
              name="userType"
              value={user.userType.value}
              onChange={(e) => {
                handleChange("userType", e.target.value);
              }}
              className={`form-control ${
                user.userType.touched && !user.userType.valid
                  ? "is-invalid"
                  : ""
              }`}
            >
              <option value="type">Select User Type</option> //change
              <option value="1">User</option>
              <option value="2">Theater Admin</option>
              {/* <option value="3">System Admin</option> */}
            </select>
            <div className="invalid-feedback">{user.userType.error}</div>
          </FormGroup>
          {user.userType.value === "2" && (
            <FormGroup>
              <FormLabel>Theater Name:</FormLabel>
              <input
                type="text"
                name="theater_name"
                placeholder="Enter Theater name"
                value={theater_name}
                onChange={(e) => setTheaterName(e.target.value)}
                className="form-control"
              />

              <FormLabel>Total Seats:</FormLabel>
              <input
                type="text"
                name="total_seats"
                placeholder="Enter Total seats"
                value={total_seats}
                onChange={(e) => setTotalSeats(e.target.value)}
                className="form-control"
              />
              <FormLabel>License Number:</FormLabel>
              <input
                type="text"
                name="licenseNumber"
                placeholder="Enter license number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                className="form-control"
              />

              <FormLabel>Theater Location:</FormLabel>
              <input
                type="text"
                name="theater_location"
                placeholder="Enter Theater Location"
                value={theater_location}
                onChange={(e) => setTheaterLocation(e.target.value)}
                className="form-control"
              />
            </FormGroup>
          )}

          {/* Input for username */}
          <FormGroup>
            <FormLabel>Username:</FormLabel>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={user.username.value}
              onChange={(e) => {
                handleChange("username", e.target.value);
              }}
              // onBlur={()=>{
              //   checkusername()
              // }}
              className={`form-control ${
                user.username.touched && !user.username.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            {/* Error message for username */}
            <div className="invalid-feedback">{user.username.error}</div>
            <div
              className="check-div"
              style={{ display: user.username.touched ? "block" : "none" }}
            >
              {check}
            </div>
          </FormGroup>

          {/* Input for password */}
          <FormGroup>
            <FormLabel>Password:</FormLabel>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
              className={`form-control ${
                user.password.touched && !user.password.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{user.password.error}</div>
          </FormGroup>

          <div style={{ margin: "20px 0" }}></div>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => submitData(e)}
            style={{ marginRight: "20px" }}
            disabled={!user.formValid}                  //(change-1) 17-02-2024
          >
            Submit
          </Button>
          <Button variant="danger" type="reset">
            Reset
          </Button>
          <p style={{ color: msg == "success" ? "green" : "red" }}>{msg}</p>
        </Form>
      </div>

      <div className="col"></div>
    </div>
  );
}