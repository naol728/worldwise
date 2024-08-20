import React from 'react'
import {  NavLink } from 'react-router-dom'
import style from './PageNav.module.css'
export default function PageNav() {
  return (
    <nav className={style.nav}>
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
