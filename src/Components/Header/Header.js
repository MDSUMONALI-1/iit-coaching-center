import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>WELLCOME TO</h2>
            <h2>IKHRA COACHING CENTER</h2>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Teacher">Teacher</NavLink>
            <NavLink to="/About">About</NavLink>
        </div>
    );
};

export default Header;