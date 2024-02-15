import React, { useReducer, useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddMovie() {
  const nav = useNavigate();
  const [msg, setMsg] = useState("");
  const init = {
    title: { value: "", valid: false, touched: false, error: "" },
    director: { value: "", valid: false, touched: false, error: "" },
    releaseDate: { value: "", valid: false, touched: false, error: "" },
    genre: { value: "", valid: false, touched: false, error: "" },
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
        return init;
      default:
        return init;
    }
  };

  const [movie, dispatch] = useReducer(reducer, init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "update",
      data: {
        key: name,
        value,
        touched: true,
        valid: true, // You can update this based on your validation logic
        error: "", // You can update this based on your validation logic
        formValid: true, // You can update this based on your validation logic
      },
    });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setMsg("");
  };

  const submitData = (e) => {
    e.preventDefault();
    const reqOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: movie.title.value,
        director: movie.director.value,
        release_date: movie.releaseDate.value,
        genre: movie.genre.value,
        duration: movie.duration.value,
        language: movie.language.value,
      }),
    };

    fetch("http://localhost:8080/addMovie", reqOption)
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
              className={`form-control ${
                movie.releaseDate.touched && !movie.releaseDate.valid
                  ? "is-invalid"
                  : ""
              }`}
            />

            <div className="invalid-feedback">{movie.releaseDate.error}</div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Genre:</FormLabel>
            <input
              type="text"
              name="genre"
              placeholder="Enter genre"
              value={movie.genre.value}
              onChange={handleChange}
              className={`form-control ${
                movie.genre.touched && !movie.genre.valid ? "is-invalid" : ""
              }`}
            />

            <div className="invalid-feedback">{movie.genre.error}</div>
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

          <div style={{ margin: "20px 0" }}></div>
          <Button
            variant="primary"
            type="submit"
            onClick={submitData}
            style={{ marginRight: "20px" }}
          >
            Submit
          </Button>
          <Button variant="danger" type="reset">
            Reset
          </Button>
          <p style={{ color: msg === "success" ? "green" : "red" }}>{msg}</p>
        </Form>
      </form>
    </div>
  );
}
