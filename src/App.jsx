import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing'
import Product   from './pages/Product';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from './components/CityList';
import './index.css'
// const BASE_URL="http://localhost:8000/cities";
export default function App() {
  const [cities,setCities]=useState([{
    "cityName": "Lisbon",
    "country": "Portugal",
    "emoji": "🇵🇹",
    "date": "2027-10-31T15:59:59.138Z",
    "notes": "My favorite city so far!",
    "position": {
      "lat": 38.727881642324164,
      "lng": -9.140900099907554
    },
    "id": "73930385"
  },
  {
    "cityName": "Madrid",
    "country": "Spain",
    "emoji": "🇪🇸",
    "date": "2027-07-15T08:22:53.976Z",
    "notes": "",
    "position": {
      "lat": 40.46635901755316,
      "lng": -3.7133789062500004
    },
    "id": "17806751"
  },
  {
    "cityName": "Berlin",
    "country": "Germany",
    "emoji": "🇩🇪",
    "date": "2027-02-12T09:24:11.863Z",
    "notes": "Amazing 😃",
    "position": {
      "lat": 52.53586782505711,
      "lng": 13.376933665713324
    },
    "id": "98443197"
  }])
  const [isLoading ,setIsloading]=useState(false)
  console.log(isLoading )
  useEffect(
    function (){
     async function fechcites(){
       try { 
        setIsloading(true)
        const res =await fetch(`http://localhost:8000/cities`)
        const data=await res.json();
        console.log(data)
        setCities(data)}
        catch{
          alert("there is an error loading the data")
        }
        finally{
          setIsloading(false)
        }
      }
     
      fechcites();
    },[]
  )

  return ( 
    <div>
    <BrowserRouter>
     <Routes>
         <Route index element={<Homepage />}/>
         <Route path='/pricing' element={<Pricing />}/>
         <Route path='/product' element={<Product   />}/>
         <Route path='/login' element={<Login   />}/>
         <Route path='/app' element={<AppLayout />}>
            <Route index element={<CityList cities={cities}  isLoading ={isLoading } />}/>
            <Route path='cites' element={<CityList  cities={cities} isLoading ={isLoading } />} />
            <Route path='countries' element={<p>list of counties</p>} />
            <Route path='form' element={<p>form</p>} />
         </Route>
         <Route path='/*' element={<PageNotFound />}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}
