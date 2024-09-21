import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about"> About</NavLink>
            <NavLink exact to="contact"> Contact</NavLink>
            <NavLink exact to="blog"> Blog</NavLink>
            <NavLink exact to="blog/new"> New Post</NavLink>
            <NavLink exact to="blargh"> Broken Link</NavLink>
        </nav>
    );
};

export default Nav;