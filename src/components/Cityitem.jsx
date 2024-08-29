import { useCites } from '../contexts/CitiesContext';
import style from './CityItem.module.css'
import { Link } from 'react-router-dom';
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
function CityItem({city}) {
  const {cityName,emoji,date,id,position}=city;
  const {currentcity,deletecity}=useCites()
  function handledelete(e){
    e.preventDefault();
    deletecity(id)
  }
  return (
    <li >
      <Link className={`${style.cityItem} ${currentcity.id===id ? style['cityItem--active']:""}`} to={`${id}?lat=${position.lat}&lug=${position.lng}`}>
       <span className={style.emoji}>{emoji}</span>
       <h3 className={style.name}>{cityName}</h3>
       <time className={style.time}>{formatDate(date)}</time>
       <button className={style.deleteBtn} onClick={handledelete}>&times;</button>
       </Link>
    </li>
  )
}
export default  CityItem;