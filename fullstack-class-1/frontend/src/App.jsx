import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts'
import Home from './pages/Home'
import Products from './pages/Products'
import Wishlist from './pages/Wishlist'
import Add from './pages/Add'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path='/products' element = {<Products/>}/>
          <Route path='/wishlist' element = {<Wishlist/>}/>
          <Route path='/add' element = {<Add/>}/>


        </Route>
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
