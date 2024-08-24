import style from './CityList.module.css'
import Spinner from './Spinner'
import Cityitem from './Cityitem'
export default function CityList(cities,isloading) {
  console.log(cities)
  if(isloading) return <Spinner />
  return (
    <ul className={style.citylist}>
      {cities.map((city)=> <Cityitem city={city} key={city.id} />)}
    </ul>
  );
}
