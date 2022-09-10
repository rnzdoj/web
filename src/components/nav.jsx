import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul class="nav">
      <li class="nav-item">
        <Link to="/" className='nav-link'>Articles</Link>
      </li>
      <li class="nav-item">
        <Link to="/article/create" className='nav-link'>Create</Link>
      </li>
    </ul>
  )
}

export default Nav;
