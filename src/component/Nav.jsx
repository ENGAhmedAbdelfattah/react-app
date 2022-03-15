/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
      <>
        <nav className='nav-bar'>
          <div className="logo">OKbook</div>
          <ul>
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/MyList">My List</NavLink></li>
            <li><NavLink to="/Instractions">Instractions</NavLink></li>
            <li><NavLink to="/SignUp">SignUp</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Search"><i className='fas fa-magnifying-glass'></i></NavLink></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav
