import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage'
import {CitiesProvider} from './contexts/CitiesContext';
import './index.css'
import { AuthProvider } from './contexts/FakeAuthContext';



const Homepage=lazy(()=>import ('./pages/Homepage'))
const Pricing=lazy(()=>import ('./pages/Pricing'))
const Product=lazy(()=>import ('./pages/Product'))
const AppLayout=lazy(()=>import ('./pages/AppLayout'))
const PageNotFound=lazy(()=>import ('./pages/PageNotFound'))
const Login=lazy(()=>import ('./pages/Login'))
// const BASE_URL="http://localhost:8000/cities";
// const BASE_URL="http://localhost:8000/cities";
export default function App() {

  return ( 
    <AuthProvider>
    <CitiesProvider>
    <BrowserRouter>
    <Suspense fallback={<SpinnerFullPage/>} >
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
     </Suspense>
    </BrowserRouter>

    </CitiesProvider>
    </AuthProvider>
  )
}

