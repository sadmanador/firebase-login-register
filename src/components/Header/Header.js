import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : undefined} to='/'>Home-registration</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : undefined} to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;