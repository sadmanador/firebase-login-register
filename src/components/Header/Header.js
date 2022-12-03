import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home-registration</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;