// import React, { useReducer, useState } from "react";
// import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function AddMovie() {
//   const nav = useNavigate();
//   const [msg, setMsg] = useState("");
//   const init = {
//     title: { value: "", valid: false, touched: false, error: "" },
//     director: { value: "", valid: false, touched: false, error: "" },
//     releaseDate: { value: "", valid: false, touched: false, error: "" },
//     //
//     showDate:{ value: "", valid: false, touched: false, error: "" },
//     showTime:{ value: "", valid: false, touched: false, error: "" },
//     //
//     //releaseDate: { value: "", valid: false, touched: false, error: "" },
//     genre: { value: "", valid: false, touched: false, error: "" },
//     description: { value: "", valid: false, touched: false, error: "" },
//     duration: { value: "", valid: false, touched: false, error: "" },
//     language: { value: "", valid: false, touched: false, error: "" },
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

//   const [movie, dispatch] = useReducer(reducer, init);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({
//       type: "update",
//       data: {
//         key: name,
//         value,
//         touched: true,
//         valid: true,
//         error: "",
//         formValid: true,
//       },
//     });
//   };

//   const handleReset = () => {
//     dispatch({ type: "reset" });
//     setMsg("");
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     const username = localStorage.getItem("username");
//     const password = localStorage.getItem("password");
//     const reqOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//         title: movie.title.value,
//         director: movie.director.value,
//         release_date: movie.releaseDate.value,
//         //
//         show_date:movie.showDate.value,
//         show_time:movie.showTime.value,
//         //
//         genre: movie.genre.value,
//         description: movie.description.value,
//         duration: movie.duration.value,
//         language: movie.language.value,
//       }),
//     };

//     fetch("http://localhost:8080/addMovie", reqOption)
//       .then((resp) => resp.text())
//       .then((data) => {
//         setMsg(data);
//         if (data.length > 0) {
//           nav("/theatreAdmin");
//         } else {
//           alert("Something went wrong");
//         }
//       });
//   };

//   return (
//     <div>
//       <form className="my-4" style={{ width: "400px", margin: "auto" }}>
//         <ul className="navbar navbar-expand-sm bg-light mb-3">
//           <div className="topnav">
//             <div className="topnav-right">
//               <li className="nav-item">
//                 <Link to="/logout">Logout</Link>
//               </li>
//             </div>
//           </div>
//         </ul>
//         <h1 style={{ textAlign: "center" }}>Add Movie</h1>

//         <Form className="login-form" onReset={handleReset}>
//           <FormGroup>
//             <FormLabel>Movie Title:</FormLabel>
//             <input
//               type="text"
//               name="title"
//               placeholder="Enter title"
//               value={movie.title.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.title.touched && !movie.title.valid ? "is-invalid" : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.title.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Director:</FormLabel>
//             <input
//               type="text"
//               name="director"
//               placeholder="Enter director name"
//               value={movie.director.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.director.touched && !movie.director.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.director.error}</div>
//           </FormGroup>

//           {/*<FormGroup>
//             <FormLabel>Release Date:</FormLabel>
//             <input
//               type="date"
//               name="releaseDate"
//               placeholder="Enter date"
//               value={movie.releaseDate.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.releaseDate.touched && !movie.releaseDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.releaseDate.error}</div>
//             </FormGroup> */}

//           <FormGroup>
//             <FormLabel>Release Date:</FormLabel>
//             <input
//               type="date"
//               name="releaseDate"
//               placeholder="Enter date"
//               value={movie.releaseDate.value}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               className={`form-control ${
//                 movie.releaseDate.touched && !movie.releaseDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Show Date:</FormLabel>
//             <input
//               type="date"
//               name="showDate"
//               placeholder="Enter show date"
//               value={movie.showDate.value}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               className={`form-control ${
//                 movie.showDate.touched && !movie.showDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Show Time:</FormLabel>
//             <input
//               type="time"
//               name="showTime"
//               placeholder="Enter time"
//               value={movie.showTime.value}
//               onChange={handleChange}

//               className={`form-control ${
//                 movie.showTime.touched && !movie.showTime.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Genre:</FormLabel>
//             <select
//               name="genre"
//               placeholder="Enter genre"
//               value={movie.genre.value}
//               onChange={handleChange}
//               className={`form-select ${
//                 movie.genre.touched && !movie.genre.valid ? "is-invalid" : ""
//               }`}
//             >
//               <option value="type">Select Genre</option>
//               <option value="Action">Action</option>
//               <option value="Animation">Animation</option>
//               <option value="Comedy">Comedy</option>
//               <option value="Crime">Crime</option>
//               <option value="Drama">Drama</option>
//               <option value="Horror">Horror</option>
//               <option value="Romance">Romance</option>
//               <option value="Science Fiction">Science Fiction</option>
//               <option value="Thriller">Thriller</option>
//             </select>

//             <div className="invalid-feedback">{movie.genre.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Description:</FormLabel>
//             <input
//               type="text"
//               name="description"
//               placeholder="Enter movie description"
//               value={movie.description.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.description.touched && !movie.description.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.description.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Duration:</FormLabel>
//             <input
//               type="number"
//               name="duration"
//               placeholder="Enter duration in mins"
//               value={movie.duration.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.duration.touched && !movie.duration.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.duration.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Language:</FormLabel>
//             <input
//               type="text"
//               name="language"
//               placeholder="Enter language"
//               value={movie.language.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.language.touched && !movie.language.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.language.error}</div>
//           </FormGroup>

//           <div style={{ margin: "20px 0" }}></div>
//           <Button
//             variant="primary"
//             type="submit"
//             onClick={submitData}
//             style={{ marginRight: "20px" }}
//           >
//             Submit
//           </Button>
//           <Button variant="danger" type="reset">
//             Reset
//           </Button>
//           <p style={{ color: msg === "success" ? "green" : "red" }}>{msg}</p>
//         </Form>
//       </form>
//     </div>
//   );
// }

//old code

// import React, { useReducer, useState } from "react";
// import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function AddMovie() {
//   const nav = useNavigate();
//   const [msg, setMsg] = useState("");
//   const init = {
//     title: { value: "", valid: false, touched: false, error: "" },
//     director: { value: "", valid: false, touched: false, error: "" },
//     releaseDate: { value: "", valid: false, touched: false, error: "" },
//     showDate: { value: "", valid: false, touched: false, error: "" },
//     showTime: { value: "", valid: false, touched: false, error: "" },
//     genre: { value: "", valid: false, touched: false, error: "" },
//     description: { value: "", valid: false, touched: false, error: "" },
//     duration: { value: "", valid: false, touched: false, error: "" },
//     language: { value: "", valid: false, touched: false, error: "" },
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

//   const [movie, dispatch] = useReducer(reducer, init);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({
//       type: "update",
//       data: {
//         key: name,
//         value,
//         touched: true,
//         valid: true,
//         error: "",
//         formValid: true,
//       },
//     });
//   };

//   const handleReset = () => {
//     dispatch({ type: "reset" });
//     setMsg("");
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     const username = localStorage.getItem("username");
//     const password = localStorage.getItem("password");

//     const formattedShowDate = new Date(movie.showDate.value).toISOString().split('T')[0];
//     const formattedShowTime = new Date(`2000-01-01 ${movie.showTime.value}`).toISOString().split('T')[1].split('.')[0];

//     const reqOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//         title: movie.title.value,
//         director: movie.director.value,
//         release_date: movie.releaseDate.value,
//         show_date: formattedShowDate,
//         show_time: formattedShowTime,
//         genre: movie.genre.value,
//         description: movie.description.value,
//         duration: movie.duration.value,
//         language: movie.language.value,
//       }),
//     };

//     fetch("http://localhost:8080/addMovie", reqOption)
//       .then((resp) => resp.text())
//       .then((data) => {
//         setMsg(data);
//         if (data.length > 0) {
//           nav("/theatreAdmin");
//         } else {
//           alert("Something went wrong");
//         }
//       });
//   };

//   return (
//     <div>
//       <form className="my-4" style={{ width: "400px", margin: "auto" }}>
//         <ul className="navbar navbar-expand-sm bg-light mb-3">
//           <div className="topnav">
//             <div className="topnav-right">
//               <li className="nav-item">
//                 <Link to="/logout">Logout</Link>
//               </li>
//             </div>
//           </div>
//         </ul>
//         <h1 style={{ textAlign: "center" }}>Add Movie</h1>

//         <Form className="login-form" onReset={handleReset}>
//           <FormGroup>
//             <FormLabel>Movie Title:</FormLabel>
//             <input
//               type="text"
//               name="title"
//               placeholder="Enter title"
//               value={movie.title.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.title.touched && !movie.title.valid ? "is-invalid" : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.title.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Director:</FormLabel>
//             <input
//               type="text"
//               name="director"
//               placeholder="Enter director name"
//               value={movie.director.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.director.touched && !movie.director.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.director.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Release Date:</FormLabel>
//             <input
//               type="date"
//               name="releaseDate"
//               placeholder="Enter date"
//               value={movie.releaseDate.value}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               className={`form-control ${
//                 movie.releaseDate.touched && !movie.releaseDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.releaseDate.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Show Date:</FormLabel>
//             <input
//               type="date"
//               name="showDate"
//               placeholder="Enter show date"
//               value={movie.showDate.value}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               className={`form-control ${
//                 movie.showDate.touched && !movie.showDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.showDate.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Show Time:</FormLabel>
//             <input
//               type="time"
//               name="showTime"
//               placeholder="Enter time"
//               value={movie.showTime.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.showTime.touched && !movie.showTime.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.showTime.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Genre:</FormLabel>
//             <select
//               name="genre"
//               placeholder="Enter genre"
//               value={movie.genre.value}
//               onChange={handleChange}
//               className={`form-select ${
//                 movie.genre.touched && !movie.genre.valid ? "is-invalid" : ""
//               }`}
//             >
//               <option value="type">Select Genre</option>
//               <option value="Action">Action</option>
//               <option value="Animation">Animation</option>
//               <option value="Comedy">Comedy</option>
//               <option value="Crime">Crime</option>
//               <option value="Drama">Drama</option>
//               <option value="Horror">Horror</option>
//               <option value="Romance">Romance</option>
//               <option value="Science Fiction">Science Fiction</option>
//               <option value="Thriller">Thriller</option>
//             </select>
//             <div className="invalid-feedback">{movie.genre.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Description:</FormLabel>
//             <input
//               type="text"
//               name="description"
//               placeholder="Enter movie description"
//               value={movie.description.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.description.touched && !movie.description.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.description.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Duration:</FormLabel>
//             <input
//               type="number"
//               name="duration"
//               placeholder="Enter duration in mins"
//               value={movie.duration.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.duration.touched && !movie.duration.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.duration.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Language:</FormLabel>
//             <input
//               type="text"
//               name="language"
//               placeholder="Enter language"
//               value={movie.language.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.language.touched && !movie.language.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.language.error}</div>
//           </FormGroup>

//           <div style={{ margin: "20px 0" }}></div>
//           <Button
//             variant="primary"
//             type="submit"
//             onClick={submitData}
//             style={{ marginRight: "20px" }}
//           >
//             Submit
//           </Button>
//           <Button variant="danger" type="reset">
//             Reset
//           </Button>
//           <p style={{ color: msg === "success" ? "green" : "red" }}>{msg}</p>
//         </Form>
//       </form>
//     </div>
//   );
// }

//new code from shubham yache's branch(on 16/02/2024 8 : 46 pm)

// import React, { useReducer, useState } from "react";
// import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function AddMovie() {
//   const nav = useNavigate();
//   const [msg, setMsg] = useState("");
//   const init = {
//     title: { value: "", valid: false, touched: false, error: "" },
//     director: { value: "", valid: false, touched: false, error: "" },
//     releaseDate: { value: "", valid: false, touched: false, error: "" },
//     genre: { value: "", valid: false, touched: false, error: "" },
//     duration: { value: "", valid: false, touched: false, error: "" },
//     language: { value: "", valid: false, touched: false, error: "" },

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

//   const [movie, dispatch] = useReducer(reducer, init);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({
//       type: "update",
//       data: {
//         key: name,
//         value,
//         touched: true,
//         valid: true, // You can update this based on your validation logic
//         error: "", // You can update this based on your validation logic
//         formValid: true, // You can update this based on your validation logic
//       },
//     });
//   };

//   const handleReset = () => {
//     dispatch({ type: "reset" });
//     setMsg("");
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     const reqOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         title: movie.title.value,
//         director: movie.director.value,
//         release_date: movie.releaseDate.value,
//         genre: movie.genre.value,
//         duration: movie.duration.value,
//         language: movie.language.value,
//       }),
//     };

//     fetch("http://localhost:8080/addMovie", reqOption)
//       .then((resp) => resp.text())
//       .then((data) => {
//         setMsg(data);
//         if (data.length > 0) {
//           nav("/theatreAdmin");
//         } else {
//           alert("Something went wrong");
//         }
//       });
//   };

//   return (
//     <div>
//       <form className="my-4" style={{ width: "400px", margin: "auto" }}>
//         <ul className="navbar navbar-expand-sm bg-light mb-3">
//           <div className="topnav">
//             <div className="topnav-right">
//               <li className="nav-item">
//                 <Link to="/logout">Logout</Link>
//               </li>
//             </div>
//           </div>
//         </ul>
//         <h1 style={{ textAlign: "center" }}>Add Movie</h1>

//         <Form className="login-form" onReset={handleReset}>
//           <FormGroup>
//             <FormLabel>Movie Title:</FormLabel>
//             <input
//               type="text"
//               name="title"
//               placeholder="Enter title"
//               value={movie.title.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.title.touched && !movie.title.valid ? "is-invalid" : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.title.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Director:</FormLabel>
//             <input
//               type="text"
//               name="director"
//               placeholder="Enter director name"
//               value={movie.director.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.director.touched && !movie.director.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.director.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Release Date:</FormLabel>
//             <input
//               type="date"
//               name="releaseDate"
//               placeholder="Enter date"
//               value={movie.releaseDate.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.releaseDate.touched && !movie.releaseDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.releaseDate.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Genre:</FormLabel>
//             <input
//               type="text"
//               name="genre"
//               placeholder="Enter genre"
//               value={movie.genre.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.genre.touched && !movie.genre.valid ? "is-invalid" : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.genre.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Duration:</FormLabel>
//             <input
//               type="number"
//               name="duration"
//               placeholder="Enter duration in mins"
//               value={movie.duration.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.duration.touched && !movie.duration.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.duration.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Language:</FormLabel>
//             <input
//               type="text"
//               name="language"
//               placeholder="Enter language"
//               value={movie.language.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.language.touched && !movie.language.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.language.error}</div>
//           </FormGroup>

//           <div style={{ margin: "20px 0" }}></div>
//           <Button
//             variant="primary"
//             type="submit"
//             onClick={submitData}
//             style={{ marginRight: "20px" }}
//           >
//             Submit
//           </Button>
//           <Button variant="danger" type="reset">
//             Reset
//           </Button>
//           <p style={{ color: msg === "success" ? "green" : "red" }}>{msg}</p>
//         </Form>
//       </form>
//     </div>
//   );
// }

// import React, { useReducer, useState } from "react";
// import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function AddMovie() {
//   const nav = useNavigate();
//   const [msg, setMsg] = useState("");
//   const init = {
//     title: { value: "", valid: false, touched: false, error: "" },
//     director: { value: "", valid: false, touched: false, error: "" },
//     releaseDate: { value: "", valid: false, touched: false, error: "" },
//     showDate: { value: "", valid: false, touched: false, error: "" },
//     showTime: { value: "", valid: false, touched: false, error: "" },
//     genre: { value: "", valid: false, touched: false, error: "" },
//     description: { value: "", valid: false, touched: false, error: "" },
//     duration: { value: "", valid: false, touched: false, error: "" },
//     language: { value: "", valid: false, touched: false, error: "" },
//     formValid: false,
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         const { key, value, touched, valid, error, formValid } = action.data;
//         return { ...state, [key]: { value, touched, valid, error }, formValid };
//       case "reset":
//         return {
//           ...init,
//         };
//       default:
//         return state;
//     }
//   };

//   const [movie, dispatch] = useReducer(reducer, init);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Additional validation for show date
//     if (name === "showDate") {
//       const releaseDate = new Date(movie.releaseDate.value);
//       const showDate = new Date(value);

//       if (showDate < releaseDate) {
//         dispatch({
//           type: "update",
//           data: {
//             key: name,
//             value,
//             touched: true,
//             valid: false,
//             error: "Show date must be after release date",
//             formValid: false,
//           },
//         });
//         return;
//       }
//     }

//     const formValid = Object.keys(movie).every((key) => {
//       if (key === "formValid") return true; // Skip checking the formValid key itself
//       return movie[key].value !== ""; // Check if the value is not empty
//     });

//     dispatch({
//       type: "update",
//       data: {
//         key: name,
//         value,
//         touched: true,
//         valid: true,
//         error: "",
//         formValid,
//       },
//     });
//   };

//   const handleReset = () => {
//     dispatch({ type: "reset" });
//     setMsg("");
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     const username = localStorage.getItem("username");
//     const password = localStorage.getItem("password");

//     // Format the show date and time according to the specified patterns
//     const formattedShowDate = new Date(movie.showDate.value)
//       .toISOString()
//       .split("T")[0];
//     const formattedShowTime = new Date(`2000-01-01 ${movie.showTime.value}`)
//       .toISOString()
//       .split("T")[1]
//       .split(".")[0];

//     const reqOption = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//         title: movie.title.value,
//         director: movie.director.value,
//         release_date: movie.releaseDate.value,
//         show_date: formattedShowDate,
//         show_time: formattedShowTime,
//         genre: movie.genre.value,
//         description: movie.description.value,
//         duration: movie.duration.value,
//         language: movie.language.value,
//       }),
//     };

//     fetch("http://localhost:8080/addMovie", reqOption)
//       .then((resp) => resp.text())
//       .then((data) => {
//         setMsg(data);
//         if (data.length > 0) {
//           nav("/theatreAdmin");
//         } else {
//           alert("Something went wrong");
//         }
//       });
//   };

//   //on 20/02/2024
  

//   return (
//     <div>
//       <form className="my-4" style={{ width: "400px", margin: "auto" }}>
//         <ul className="navbar navbar-expand-sm bg-light mb-3">
//           <div className="topnav">
//             <div className="topnav-right">
//               <li className="nav-item">
//                 <Link to="/logout">Logout</Link>
//               </li>
//             </div>
//           </div>
//         </ul>
//         <h1 style={{ textAlign: "center" }}>Add Movie</h1>

//         <Form className="login-form" onReset={handleReset}>
//           <FormGroup>
//             <FormLabel>Movie Title:</FormLabel>
//             <input
//               type="text"
//               name="title"
//               placeholder="Enter title"
//               value={movie.title.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.title.touched && !movie.title.valid ? "is-invalid" : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.title.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Director:</FormLabel>
//             <input
//               type="text"
//               name="director"
//               placeholder="Enter director name"
//               value={movie.director.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.director.touched && !movie.director.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />

//             <div className="invalid-feedback">{movie.director.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Release Date:</FormLabel>
//             <input
//               type="date"
//               name="releaseDate"
//               placeholder="Enter date"
//               value={movie.releaseDate.value}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               className={`form-control ${
//                 movie.releaseDate.touched && !movie.releaseDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.releaseDate.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Show Date:</FormLabel>
//             <input
//               type="date"
//               name="showDate"
//               placeholder="Enter show date"
//               value={movie.showDate.value}
//               onChange={handleChange}
//               min={new Date().toISOString().split("T")[0]}
//               className={`form-control ${
//                 movie.showDate.touched && !movie.showDate.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.showDate.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Show Time:</FormLabel>
//             <input
//               type="time"
//               name="showTime"
//               placeholder="Enter time"
//               value={movie.showTime.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.showTime.touched && !movie.showTime.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.showTime.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Genre:</FormLabel>
//             <select
//               name="genre"
//               placeholder="Enter genre"
//               value={movie.genre.value}
//               onChange={handleChange}
//               className={`form-select ${
//                 movie.genre.touched && !movie.genre.valid ? "is-invalid" : ""
//               }`}
//             >
//               <option value="type">Select Genre</option>
//               <option value="Action">Action</option>
//               <option value="Animation">Animation</option>
//               <option value="Comedy">Comedy</option>
//               <option value="Crime">Crime</option>
//               <option value="Drama">Drama</option>
//               <option value="Horror">Horror</option>
//               <option value="Romance">Romance</option>
//               <option value="Science Fiction">Science Fiction</option>
//               <option value="Thriller">Thriller</option>
//             </select>
//             <div className="invalid-feedback">{movie.genre.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Description:</FormLabel>
//             <input
//               type="text"
//               name="description"
//               placeholder="Enter movie description"
//               value={movie.description.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.description.touched && !movie.description.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.description.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Duration:</FormLabel>
//             <input
//               type="number"
//               name="duration"
//               placeholder="Enter duration in mins"
//               value={movie.duration.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.duration.touched && !movie.duration.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.duration.error}</div>
//           </FormGroup>

//           <FormGroup>
//             <FormLabel>Language:</FormLabel>
//             <input
//               type="text"
//               name="language"
//               placeholder="Enter language"
//               value={movie.language.value}
//               onChange={handleChange}
//               className={`form-control ${
//                 movie.language.touched && !movie.language.valid
//                   ? "is-invalid"
//                   : ""
//               }`}
//             />
//             <div className="invalid-feedback">{movie.language.error}</div>
//           </FormGroup>


//           <div style={{ margin: "20px 0" }}></div>
//           <Button
//             variant="primary"
//             type="submit"
//             onClick={submitData}
//             style={{ marginRight: "20px" }}
//             disabled={!movie.formValid}
//           >
//             Submit
//           </Button>
//           <Button variant="danger" type="reset" onClick={handleReset}>
//             Reset
//           </Button>
//           <p style={{ color: msg === "success" ? "green" : "red" }}>{msg}</p>
//         </Form>
//       </form>
//     </div>
//   );
// }

import React, { useReducer, useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddMovie() {
  const nav = useNavigate();
  const [msg, setMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State for storing the selected file

  const init = {
    title: { value: "", valid: false, touched: false, error: "" },
    director: { value: "", valid: false, touched: false, error: "" },
    releaseDate: { value: "", valid: false, touched: false, error: "" },
    showDate: { value: "", valid: false, touched: false, error: "" },
    showTime: { value: "", valid: false, touched: false, error: "" },
    genre: { value: "", valid: false, touched: false, error: "" },
    description: { value: "", valid: false, touched: false, error: "" },
    duration: { value: "", valid: false, touched: false, error: "" },
    language: { value: "", valid: false, touched: false, error: "" },
    formValid: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
      case "reset":
        return {
          ...init,
        };
      default:
        return state;
    }
  };

  const [movie, dispatch] = useReducer(reducer, init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Your existing code for handling form fields goes here
     // Additional validation for show date
    if (name === "showDate") {
      const releaseDate = new Date(movie.releaseDate.value);
      const showDate = new Date(value);

      if (showDate < releaseDate) {
        dispatch({
          type: "update",
          data: {
            key: name,
            value,
            touched: true,
            valid: false,
            error: "Show date must be after release date",
            formValid: false,
          },
        });
        return;
      }
    }

    const formValid = Object.keys(movie).every((key) => {
      if (key === "formValid") return true; // Skip checking the formValid key itself
      return movie[key].value !== ""; // Check if the value is not empty
    });

    dispatch({
      type: "update",
      data: {
        key: name,
        value,
        touched: true,
        valid: true,
        error: "",
        formValid,
      },
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Update the selected file state
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setMsg("");
  };

  const submitData = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    // Format the show date and time according to the specified patterns
    const formattedShowDate = new Date(movie.showDate.value)
      .toISOString()
      .split("T")[0];
    const formattedShowTime = new Date(`2000-01-01 ${movie.showTime.value}`)
      .toISOString()
      .split("T")[1]
      .split(".")[0];

    // Create FormData object to append the image file
    const formData = new FormData();
    formData.append("image", selectedFile);

    // Append other form data
    formData.append("username", username);
    formData.append("password", password);
    formData.append("title", movie.title.value);
    formData.append("director", movie.director.value);
    formData.append("release_date", movie.releaseDate.value);
    formData.append("show_date", formattedShowDate);
    formData.append("show_time", formattedShowTime);
    formData.append("genre", movie.genre.value);
    formData.append("description", movie.description.value);
    formData.append("duration", movie.duration.value);
    formData.append("language", movie.language.value);

    // Send formData to the server
    fetch("http://localhost:8080/addMovie", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.text())
      .then((data) => {
        setMsg(data);
        if (data.length > 0) {
          nav("/theatreAdmin");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>
      <form className="my-4" style={{ width: "400px", margin: "auto" }}>
        <ul className="navbar navbar-expand-sm bg-light mb-3">
          <div className="topnav">
            <div className="topnav-right">
              <li className="nav-item">
                <Link to="/logout">Logout</Link>
              </li>
            </div>
          </div>
        </ul>
        <h1 style={{ textAlign: "center" }}>Add Movie</h1>

        <Form className="login-form" onReset={handleReset}>
          <FormGroup>
            <FormLabel>Movie Title:</FormLabel>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={movie.title.value}
              onChange={handleChange}
              className={`form-control ${
                movie.title.touched && !movie.title.valid ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{movie.title.error}</div>
          </FormGroup>

          {/* Add other form fields */}

          <FormGroup>
              <FormLabel>Director:</FormLabel>
               <input
              type="text"
              name="director"
              placeholder="Enter director name"
              value={movie.director.value}
              onChange={handleChange}
              className={`form-control ${
                movie.director.touched && !movie.director.valid
                  ? "is-invalid"
                  : ""
              }`}
            />

            <div className="invalid-feedback">{movie.director.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Release Date:</FormLabel>
            <input
              type="date"
              name="releaseDate"
              placeholder="Enter date"
              value={movie.releaseDate.value}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={`form-control ${
                movie.releaseDate.touched && !movie.releaseDate.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{movie.releaseDate.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Show Date:</FormLabel>
            <input
              type="date"
              name="showDate"
              placeholder="Enter show date"
              value={movie.showDate.value}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={`form-control ${
                movie.showDate.touched && !movie.showDate.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{movie.showDate.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Show Time:</FormLabel>
            <input
              type="time"
              name="showTime"
              placeholder="Enter time"
              value={movie.showTime.value}
              onChange={handleChange}
              className={`form-control ${
                movie.showTime.touched && !movie.showTime.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{movie.showTime.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Genre:</FormLabel>
            <select
              name="genre"
              placeholder="Enter genre"
              value={movie.genre.value}
              onChange={handleChange}
              className={`form-select ${
                movie.genre.touched && !movie.genre.valid ? "is-invalid" : ""
              }`}
            >
              <option value="type">Select Genre</option>
              <option value="Action">Action</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Thriller">Thriller</option>
            </select>
            <div className="invalid-feedback">{movie.genre.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Description:</FormLabel>
            <input
              type="text"
              name="description"
              placeholder="Enter movie description"
              value={movie.description.value}
              onChange={handleChange}
              className={`form-control ${
                movie.description.touched && !movie.description.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{movie.description.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Duration:</FormLabel>
            <input
              type="number"
              name="duration"
              placeholder="Enter duration in mins"
              value={movie.duration.value}
              onChange={handleChange}
              className={`form-control ${
                movie.duration.touched && !movie.duration.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{movie.duration.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Language:</FormLabel>
            <input
              type="text"
              name="language"
              placeholder="Enter language"
              value={movie.language.value}
              onChange={handleChange}
              className={`form-control ${
                movie.language.touched && !movie.language.valid
                  ? "is-invalid"
                  : ""
              }`}
            />
            <div className="invalid-feedback">{movie.language.error}</div>
          </FormGroup>


          <FormGroup>
            <FormLabel>Upload Movie Image:</FormLabel>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange} // Call handleFileChange on file selection
              className="form-control"
            />
          </FormGroup>

          <div style={{ margin: "20px 0" }}></div>
          <Button
            variant="primary"
            type="submit"
            onClick={submitData}
            style={{ marginRight: "20px" }}
            disabled={!movie.formValid || !selectedFile} 
          >
            Submit
          </Button>
          <Button variant="danger" type="reset" onClick={handleReset}>
            Reset
          </Button>
          <p style={{ color: msg === "success" ? "green" : "red" }}>{msg}</p>
        </Form>
      </form>
    </div>
  );
}

