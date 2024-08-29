import {useSearchParams,useNavigate} from 'react-router-dom'
import{MapContainer,TileLayer,Marker,Popup, useMap, useMapEvent} from 'react-leaflet'

import style from './Map.module.css'
import { useEffect, useState } from 'react'
import { useCites } from '../contexts/CitiesContext'
import Button from './Button'
import { useGeolocation } from '../hooks/useGeolocation'
export default function Map() {
  const [searchparams]=useSearchParams()
  const {cities} =useCites()
  const [ mappostion,setMappostion]=useState([40,0])
  const maplat=searchparams.get("lat")
  const maplng=searchparams.get("lng")
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  useEffect(
    function (){
     if(maplat && maplng) setMappostion([maplat,maplng])
    },[maplat,maplng]
  )
  useEffect(
    function () {
      if (geolocationPosition)
        setMappostion([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );
  return (
    <div className={style.mapContainer} >
     {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
       )}
      <MapContainer center={mappostion} zoom={6} scrollWheelZoom={true} className={style.map} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
   {cities.map((city)=> <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
      <Popup>
         <span>{city.emoji}</span> <span>{city.cityName}</span>
      </Popup>
    </Marker>
  ) }
 <Changecenter position={mappostion} />
 <Detectcity />
  </MapContainer> 
    </div>
  )
}
function Changecenter({position}){
  const map=useMap();
  map.setView(position)
  return null;
}
function Detectcity(){
const navigate=useNavigate()
useMapEvent({
  click:(e)=>{navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)}
})
}