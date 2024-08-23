import SideBar from "../components/SideBar";
import style from '../pages/AppLayout.module.css'
import Map from "../components/Map";
export default function AppLayout() {
  return (
    <div className={style.app} >
      <SideBar />
      <Map />
    </div>
  )
}
