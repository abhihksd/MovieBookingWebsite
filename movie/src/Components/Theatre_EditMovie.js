import { useReducer } from "react";
import { Link } from "react-router-dom";
const init={
  title: null,
  director: null,
  releaseDate: null,
  genre: null,
  duration: null,
  language:null,
  description: null
}
const reducer=(state,action)=>{
  switch(action.type){
    case'update':
    return {...state,[action.field]:action.value}
    default:
      return state;
  }
}
export default function EditMovie({movie_id}) {

const [state,dispatch]=useReducer(reducer,init);

const handleChange=e=>{
  const{name,value}=e.target;
  dispatch({type:'update',field:name,value})
}

const handleSubmit=e=>{
  e.preventDefault();
  fetch(`http://localhost:8080/editmovie/20`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(state)
  })
  .then(response=>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    alert('Movie updated');
    console.log('successfully updated')
  })
  .catch(error=>{
    console.error('Error updating movie',error)
    alert('error updating movie')
  })
}
const { title, director, releaseDate, genre, duration, language, description } = state;
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
      <h1>Edit movie</h1>
      <form onSubmit={handleSubmit}>

                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={handleChange} />
                <label>Director:</label>
                <input type="text" name="director" value={director} onChange={handleChange} />
                <label>Release Date:</label>
                <input type="date" name="releaseDate" value={releaseDate} onChange={handleChange} />
                <label>Genre:</label>
                <input type="text" name="genre" value={genre} onChange={handleChange} />
                <label>Duration:</label>
                <input type="number" name="duration" value={duration} onChange={handleChange} />
                <label>Language:</label>
                <input type="text" name="language" value={language} onChange={handleChange} />
                <label>Description:</label>
                <textarea name="description" value={description} onChange={handleChange} />
                <button type="submit">Update</button>
        </form> 
    </div>
  );
}