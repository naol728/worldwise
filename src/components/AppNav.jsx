import style from './AppNav.module.css'
import {  NavLink } from 'react-router-dom'
function AppNav() {
  return (
    <nav className={style.nav} >
    <ul>
      <li>
         <NavLink to="cites">cites</NavLink>
      </li>

      <li>
        <NavLink to="counties">countres</NavLink>
      </li>
    </ul>
    </nav>
  );
}

export default AppNav;
