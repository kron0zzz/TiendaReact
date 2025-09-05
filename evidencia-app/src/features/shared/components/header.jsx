import '../styles/header.css'
import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {


  return (
    <>
      <header className="header">
            <div className="logo">
                <h1>KeyStore</h1>
            </div>

            <div className="nav">
            <ul>
                <li><NavLink to="/" className="a">Inicio</NavLink></li> 
                <li><NavLink to="/productos" className="a">Catálogo</NavLink></li>
                <li><NavLink to="/" className="a">Nosotros</NavLink></li>
                <li><NavLink to="/" className="a">Contacto</NavLink></li>
                <li><NavLink to="/" className="a"><img src="https://cdn-icons-png.flaticon.com/512/324/324654.png" alt="" /></NavLink></li>
                <li><NavLink to="/carrito" className="a"><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" /></NavLink></li>

            </ul>
            </div>
      </header>
    </>
  
  )
}



export default Header


