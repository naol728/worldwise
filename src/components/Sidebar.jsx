import style from './Sidebar.module.css'
import{ Outlet }from 'react-router-dom'
import Logo from './Logo'
import AppNav from './AppNav'
export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
     
      <footer className={style.footer}>
           <p className={style.copyright}>
            &copy; copyright {new Date().getFullYear()} by Worldwise Inc.
           </p>
      </footer>
    </div>
  )
}
