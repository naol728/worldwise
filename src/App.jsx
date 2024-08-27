import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing'
import Product   from './pages/Product';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import {CitiesProvider} from './contexts/CitiesContext';
import './index.css'
// const BASE_URL="http://localhost:8000/cities";
export default function App() {

  return ( 
    <CitiesProvider>
    <BrowserRouter>
     <Routes>
         <Route index element={<Homepage />}/>
         <Route path='/pricing' element={<Pricing />}/>
         <Route path='/product' element={<Product   />}/>
         <Route path='/login' element={<Login   />}/>
         <Route path='/app' element={<AppLayout />}>
            <Route index element={<CityList />}/>
            <Route path='cites' element={<CityList   />} />
            <Route path='cites/:id' element={<City />} />
            <Route path='countries' element={<CountryList  />} />
            <Route path='form' element={<Form />} />
         </Route>
         <Route path='/*' element={<PageNotFound />}/>
     </Routes>
    </BrowserRouter>
    </CitiesProvider>
  )
}

