import '../styles/header.css'
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";

function Header({cartCount}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="header">
            <div className="logo">
                <h1>ShipStore</h1>
            </div>

            <div className="menu-toggle" onClick={() => setOpen(!open)}>☰</div>
          
          

            <div className={`nav ${open ? "active" : ""}`}>
            <ul>
                <li><NavLink to="/" className="a">Inicio</NavLink></li> 
                <li><NavLink to="/productos" className="a">Catálogo</NavLink></li>
                <li><HashLink smooth to="/#about" className="a">Nosotros</HashLink></li>
                <li><HashLink smooth to="/#contactus" className="a">Contacto</HashLink></li>
                <li><NavLink to="/carrito" className="a"><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" /> <span>{cartCount}</span></NavLink></li>

            </ul>
            </div>
      </header>
    </>
  
  )
}



export default Header


