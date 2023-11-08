
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from './Pages/Products'
import Favorites from './Pages/Favorites'
import Navbar from './components/Navbar'
function App() {
  return (
   <>

   <Navbar/> 
   <Routes>
    

    <Route path="/products" element={<Products/>}/>
    <Route path="/favorites" element={<Favorites/>}/>

   </Routes>
   
   
   
   
   </>
  )
}

export default App
