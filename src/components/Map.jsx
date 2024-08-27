// import { useNavigate} from 'react-router-dom'
import{MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'

import style from './Map.module.css'
import { useState } from 'react'

export default function Map() {
  // const [searchparams]=useSearchParams()
  const [ mappostion]=useState([9.0192,38.7525])
  // const lat=searchparams.get("lat")
  // const lng=searchparams.get("lug")
  // const navigate=useNavigate()
  return (
    <div className={style.mapContainer} >
      <MapContainer center={mappostion} zoom={13} scrollWheelZoom={true} className={style.map} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
    <Marker position={mappostion}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}
