import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from './features/homePage/components/HomePage'
import Productos from './features/dashboard/components/productos'
import Cart from './features/carrito/components/cart'




function App(){

  const [cart, setCart] = useState([]);

  // ➕ Agregar producto al carrito
  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      // si ya existe, aumentar cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // si no existe, agregarlo con cantidad = 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ➖ Remover producto del carrito
  const handleRemoveFromCart = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // eliminar si la cantidad llega a 0
    );
  };





  return (
    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/productos" element={<Productos onAddToCart={handleAddToCart} />} />
      <Route path="/carrito" element={<Cart 
              cart={cart}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart} />}/>
    </Routes>

    

    </>
  )
}
export default App