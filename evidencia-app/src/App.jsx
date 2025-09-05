import React from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from './features/homePage/components/HomePage'
import Productos from './features/dashboard/components/productos'
import Cart from './features/carrito/components/cart'




function App(){
  return (
    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/carrito" element={<Cart/>}/>
    </Routes>

    

    </>
  )
}
export default App