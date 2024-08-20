import React from 'react'
import {  NavLink } from 'react-router-dom'
export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
            <NavLink to='/'>Homepage</NavLink>
        </li>
    
        <li>
            <NavLink to='/pricing' >pricing</NavLink>
        </li>
        <li>
            <NavLink to='/product' >product</NavLink>
        </li>
        </ul> 
    </nav>
  )
}
