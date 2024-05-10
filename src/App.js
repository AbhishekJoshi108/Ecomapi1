import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Product from './pages/Product'
import { useCart } from './context/cart'
import Women from './pages/Women'


const App = () => {
  const{cartitemcount}=useCart();
  return (
    <>
     <Navbar cartitemcount={cartitemcount()} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/home/:id' element={<Product/>}/>
      <Route path='/womensclothing' element={<Women/>}/>
      <Route path='/womensclothing/:id' element={<Product/>}/>

    </Routes>

   
    </>
  )
}

export default App
