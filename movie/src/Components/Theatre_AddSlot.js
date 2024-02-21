import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AddSlot() {

  
  useEffect(()=>{
    fetchMovies()
  },[])
  const[movies,setMovies]=useState([]) 
  const fetchMovies=()=>{
    fetch('http://localhost:8080/movies')
    .then(response=>response.json())
    .then(data=>setMovies(data))
    .catch(error=>console.log('error fetching movies',error))
  };

  return (
    <div>
      <ul className="navbar navbar-expand-sm bg-light mb-3">
        <div className="topnav">
          <div className="topnav-right">
            <li className="nav-item search-field">
              <input className="search" type="text" placeholder="Search" />
            </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        </div>
      </ul>
      <h1>Add slot</h1>
    



    </div>
  );
}
