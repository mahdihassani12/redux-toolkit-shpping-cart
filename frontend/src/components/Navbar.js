import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
          <div className='logo'>
            <NavLink  to="/">Online Shop</NavLink>
          </div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/Cart" className="nav-link">Cart</NavLink>
              </li>
          </ul>
        </div>
    </nav>
  )
}