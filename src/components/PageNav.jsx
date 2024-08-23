
import {  NavLink } from 'react-router-dom'
import style from './PageNav.module.css'
import Logo from './Logo'
export default function PageNav() {
  return (
    <nav className={style.nav}>

      <NavLink to="/"><Logo /></NavLink> 
      <ul>
        <li>
            <NavLink to='/pricing' >pricing</NavLink>
        </li>
        <li>
            <NavLink to='/product' >product</NavLink>
        </li>
        <li>
            <NavLink to='/login' className={style.ctaLink} >Log in</NavLink>
        </li>
        </ul> 
    </nav>
  )
}
