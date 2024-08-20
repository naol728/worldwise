import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
         <Route path='/Homepage' element={<Homepage />}/>
         <Route path='/pricing' element={<Pricing />}/>
         <Route path='/product' element={<Product />}/>
     </Routes>
    </BrowserRouter>
  )
}
