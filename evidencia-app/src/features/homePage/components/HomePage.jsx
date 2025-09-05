import Header from '../../shared/components/header'
import Footer from '../../shared/components/footer'
import '../styles/HomePage.css'

function HomePage(){

    return(
        <>
            <Header/>
            <section class="hero">
                <h2>Bienvenido a la mejor tienda online 🚀</h2>
            </section>

            <section class="about">
            <h2>Sobre Nosotros</h2>
            <p>
            En <span class="highlight">Mi Tienda</span> creemos que comprar debería ser una experiencia 
            fácil, rápida y divertida. 🎉 Ofrecemos productos de la mejor calidad al mejor precio,
            con un servicio al cliente que siempre está dispuesto a ayudarte.
            </p>
            <p>
            Desde nuestros inicios, hemos trabajado para crear un espacio donde puedas encontrar
            lo que buscas sin complicaciones. Ya sea que necesites algo para ti, para tu hogar 
            o para regalar, aquí lo encontrarás. ✨
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Comercio_electronico.jpg" alt="Imagen de la tienda"/>
            </section>
            <Footer/>
        </>

    )
}

export default HomePage;