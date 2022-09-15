import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className='nav-link'>Articles</Link>
      </li>
      <li className="nav-item">
        <Link to="/article/create" className='nav-link'>Create</Link>
      </li>

      <li className="nav-item">
        <Link to="/sign_in" className='nav-link'>Register</Link>
      </li>

      <li className="nav-item">
        <Link to="/log_in" className='nav-link'>Login</Link>
      </li>
    </ul>
  )
}

export default Nav;
