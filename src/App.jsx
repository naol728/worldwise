import { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing'
import Product   from './pages/Product';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import './index.css'
// const BASE_URL="http://localhost:8000/cities";
export default function App() {
  const [cities,setCities]=useState([])
  const [isLoading ,setIsloading]=useState(false)
  useEffect(
    function (){
     async function fechcites(){
       try { 
        setIsloading(true)
        const res =await fetch(`http://localhost:8000/cities`)
        const data=await res.json();
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
            <Route path='countries' element={<CountryList cities={cities} isLoading ={isLoading } />} />
            <Route path='form' element={<p>form</p>} />
         </Route>
         <Route path='/*' element={<PageNotFound />}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}

