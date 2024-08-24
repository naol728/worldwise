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
 
  const [cities,setCities]=useState([])
  const [isloading,setIsloading]=useState(false)
  console.log(isloading)
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
  console.log(cities)
  return ( 
    <div>
    <BrowserRouter>
     <Routes>
         <Route index element={<Homepage />}/>
         <Route path='/pricing' element={<Pricing />}/>
         <Route path='/product' element={<Product   />}/>
         <Route path='/login' element={<Login   />}/>
         <Route path='/app' element={<AppLayout />}>
            <Route index element={<CityList isloading={isloading} cities={cities} />}/>
            <Route path='cites' element={<CityList isloading={isloading} cities={cities} />} />
            <Route path='countries' element={<p>list of counties</p>} />
            <Route path='form' element={<p>form</p>} />
         </Route>
         <Route path='/*' element={<PageNotFound />}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}
