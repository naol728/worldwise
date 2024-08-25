import { useSearchParams,useNavigate} from 'react-router-dom'
import style from './Map.module.css'
export default function Map() {
  const [searchparams]=useSearchParams()
  const lat=searchparams.get("lat")
  const lng=searchparams.get("lug")
  const navigate=useNavigate()
  return (
    <div className={style.mapContainer} onClick={()=>navigate("form")} >
       map 
       <p>{lat}</p>
       <p>{lng}</p>
    </div>
  )
}
