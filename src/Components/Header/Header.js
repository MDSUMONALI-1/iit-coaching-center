import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>WELLCOME TO</h2>
            <h2>IIT COACHING CENTER</h2>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <Button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </Button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink className="Header" to="/home">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="Header" to="/About">About</NavLink>
        </li>
        <li class="nav-item mx-auto">
        <NavLink className="mx-auto" to="/Services">Services</NavLink>
        </li>
        <li class="nav-item ">
        <NavLink className="Header" to="/Teacher">Teacher</NavLink>
      
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button class="btn btn-outline-success" type="submit">Search</Button>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;