import React from 'react'
import Logo from './Logo'
export default function SideBar() {
  return (
    <div className={style.Sidebar}>
      <Logo />
      <AppNav />

      <p>list of cites</p>


      <footer className={style.footer}>
           <p>
            &copy; copyright {new Date().getFullYear()} by Worldwise Inc.
           </p>
      </footer>
    </div>
  )
}
