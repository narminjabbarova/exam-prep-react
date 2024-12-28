import { Route, Routes } from 'react-router-dom'
import ClientHeader from './Layouts/Client/ClientHeader'
import Contact from './Pages/Client/Contact'
import Favorites from './Pages/Client/Favorites'
import Home from './Pages/Client/Home'
import NotFound from './Pages/Client/NotFound'
import Products from './Pages/Client/Products'


function App() {
  

  return (
    <>
     <ClientHeader/>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/products' element = {<Products/>}/>
      <Route path='/favorites' element = {<Favorites/>}/>
      <Route path='*' element = {<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
