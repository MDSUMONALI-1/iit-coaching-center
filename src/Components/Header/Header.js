import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>WELLCOME TO</h2>
            <h2>IIT COACHING CENTER</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="Header" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="Header" to="/About">About</NavLink>
        </li>
        <li className="nav-item mx-auto">
        <NavLink className="mx-auto" to="/Services">Services</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="Header" to="/Teacher">Teacher</NavLink>
      
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button className="btn btn-outline-success" type="submit">Search</Button>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;