import SideBar from "../components/SideBar";
import style from '../pages/AppLayout.module.css'
import Map from "../components/Map";
import User from '../components/User'
export default function AppLayout() {
  return (
    <div className={style.app} >
      <SideBar />
      <Map />
      <User />
    </div>
  )
}
