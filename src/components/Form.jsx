// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button  from "./Button";
import BackButton from "./BackButton";
import {useUrllocation} from "../hooks/useUrllocation";
import Message from './Message'
import Spinner from './Spinner'
const BASE_URL="https://api.bigdatacloud.net/data/reverse-geocode-client?"
export function convertToEmoji(countryCode) {
  const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [isloadinggeocoding,setisloadinggeocoding]=useState(false)
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [lat,lng]=useUrllocation();
  const [emoji,setEmoji]=useState("")
  const [geocodingerror,setgeocodingerror]=useState("")
  useEffect(function(){
    if(!lat && !lng) return ;
   async function  fetchcitydata() {
    try{
      setisloadinggeocoding(true)
      setgeocodingerror("")
      const res=await fetch(`${BASE_URL}latitude=${lat}&longitude=${lng}`)
      const data=await res.json()
      if(!data.city) throw new Error ("that doesnt seem a city please choice the right city 😉")
      
      setCityName(data.city)
      // setEmoji(convertToEmoji(data.countreyCode))
    }
    catch(err){
      setgeocodingerror(err.message)
    }
    finally{
      setisloadinggeocoding(false)
    }
   }
   fetchcitydata();
  },[lat,lng])
  if(isloadinggeocoding) return <Spinner />
  if(!lat && !lng) return   <Message message="start by clicking the map " />
  if(geocodingerror) return <Message message={geocodingerror} />

  return (
    <form className={styles.form}>
      <div className={styles.row} >
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
