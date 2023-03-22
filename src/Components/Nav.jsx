import React from "react";
import {  Link } from "react-router-dom";

const Nav=()=>{
    return(
        <>
        <nav className="main-nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Product">product</Link>
          </li>
        </ul>
      </nav>
        </>
    )
}
export default Nav;