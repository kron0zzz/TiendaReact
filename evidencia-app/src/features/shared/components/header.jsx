import '../styles/header.css'
function Header() {


  return (
    <>
      <header className="header">
            <div className="logo">
                <h1>KeyStore</h1>
            </div>

            <div className="nav">
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Catálogo</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/512/324/324654.png" alt="" /></a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="" /></a></li>

            </ul>
            </div>
      </header>
    </>
  
  )
}



export default Header


