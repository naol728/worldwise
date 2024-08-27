import styles from "./City.module.css";

import { useParams } from "react-router-dom";
import { useCites } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
  
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {


   
  const {id}=useParams();
const {getcity,currentcity,isLoading}=useCites()


useEffect(
  function (){
    getcity(id)
  },[id,getcity]
)

const { cityName, emoji, date, notes } = currentcity;
if(isLoading) return <Spinner />
  return (
    <div>
      
     <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
     </h3>
    </div>

      <div className={styles.row}>
       <h6>You went to {cityName} on</h6>
       <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      
    </div>
    </div>
  );
}

export default City;
