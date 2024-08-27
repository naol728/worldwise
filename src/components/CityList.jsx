import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
import CityItem from "./Cityitem";
import {useCites} from '../contexts/CitiesContext'

function CityList() {
  const {cities,isLoading}=useCites();
  if (isLoading) return <Spinner />;
  if (!cities.length){
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    )}
  return (
    <ul className={styles.cityList}>
      {cities.map((city)=>
        <CityItem city={city} key={city.id} />
        
      )   }
    </ul>
  );
} 


export default CityList;
