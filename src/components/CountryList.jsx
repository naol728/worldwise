import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItems from './CountryItem'

function CountryList({cities,isLoading}) {
  if (isLoading) return <Spinner />;
  if (!cities.length){
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    )}
    const country=cities.reduce((arr,city)=>{
        if(!arr.map(e=>e.country).includes(city.country))
           return [
        ...arr,{country:city.country,emoji:city.emoji}] 
        else return arr;
        },[])
        
  return (
    <ul className={styles.countryList}>
      {country.map((country)=>
        <CountryItems country={country} key={country.id} />
        
      )   }
    </ul>
  );
} 


export default CountryList;
