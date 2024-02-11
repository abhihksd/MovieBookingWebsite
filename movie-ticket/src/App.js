import logo from './img/logo.jpeg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import RegForm from './Components/RegForm';
import Home from './Components/Home';
import Login from './Components/Login';
import CustomerHome from './Components/CustomerHome';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand toplogo" to="/"><img src={logo}  /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/" >Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link"  to="/login">Login</Link>
          <Link className="nav-item nav-link"  to="/register">Register</Link>
        </div>
      </div>
    </nav>     

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<RegForm/>}  />
      <Route path="/customer_home" element={<CustomerHome/>} />
    </Routes>

</div>

  );
 
}


export default App;
