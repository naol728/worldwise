import style from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'
export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cites</p>
      <footer className={style.footer}>
           <p className={style.copyright}>
            &copy; copyright {new Date().getFullYear()} by Worldwise Inc.
           </p>
      </footer>
    </div>
  )
}
