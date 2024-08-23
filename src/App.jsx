
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing'
import Product   from './pages/Product';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from './components/CityList';
import './index.css'
export default function App() {
  return ( 
    <div>
    <BrowserRouter>
     <Routes>
         <Route index element={<Homepage />}/>
         <Route path='/pricing' element={<Pricing />}/>
         <Route path='/product' element={<Product   />}/>
         <Route path='/login' element={<Login   />}/>
         <Route path='/app' element={<AppLayout />}>
            <Route index element={<CityList />}/>
            <Route path='cites' element={<CityList />} />
            <Route path='countries' element={<p>list of counties</p>} />
            <Route path='form' element={<p>form</p>} />
         </Route>
         <Route path='/*' element={<PageNotFound />}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}
