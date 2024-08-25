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
  const {cityName,emoji,date,id}=city;
  return (
    <li >
      <Link className={style.cityItem} to={`${id}`}>
       <span className={style.emoji}>{emoji}</span>
       <h3 className={style.name}>{cityName}</h3>
       <time className={style.time}>{formatDate(date)}</time>
       <button className={style.deleteBtn}>&times;</button>
       </Link>
    </li>
  )
}
export default  CityItem;