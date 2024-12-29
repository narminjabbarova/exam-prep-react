import { Route, Routes } from 'react-router-dom'
import ClientHeader from './Layouts/Client/ClientHeader'
import Contact from './Pages/Client/Contact'
import Favorites from './Pages/Client/Favorites'
import Home from './Pages/Client/Home'
import NotFound from './Pages/Client/NotFound'
import Products from './Pages/Client/Products'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ClientLayout from './Pages/Client'
import AdminLayout from './Layouts/Admin'
import DashBoard from './Pages/Admin/Dashboard'
import AdminProducts from './Pages/Admin/AdminProducts'
import AddProduct from './Pages/Admin/AddProduct'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<DashBoard/>} />
          <Route path='products' element={<AdminProducts/>} />
          <Route path='addproduct' element={<AddProduct/>}/>
  
        </Route>


        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
