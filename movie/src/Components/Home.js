import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../img/logo.jpeg";
import "../css/Home.css";
import FetchData from "./FetchData";

export default function Home() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div>
      <ul className="nav-navbar App-header2">
        <img
          className="App-logo2"
          src={logo}
          style={{ marginRight: "10px" }}
          alt="Logo"
        />
      </ul>

      <h1>HOME PAGE!!</h1>
      <FetchData/>

      {/* <h2>Welcome {localStorage.getItem("user")}</h2> */}
      {/* <p>Login Status: {mystate.loggedIn.toString()}</p> */}
    </div>
  );
}
