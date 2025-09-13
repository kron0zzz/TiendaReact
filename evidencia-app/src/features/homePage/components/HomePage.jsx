import Header from '../../shared/components/header'
import Footer from '../../shared/components/footer'
import '../styles/HomePage.css'

function HomePage(){

    return(
        <>
            <Header/>
            <section class="hero"> 
                <h2>⚓ Navega entre todos los productos ⚓</h2>
            </section>


            <section class="about" id='about'>
            <h2>Sobre Nosotros</h2>
            <p>
            En <span class="highlight">ShipStore</span> creemos que comprar debería ser una experiencia 
            fácil, rápida y divertida. Ofrecemos productos de la mejor calidad al mejor precio,
            con un servicio al cliente que siempre está dispuesto a ayudarte.
            </p>
            <p>
            Desde nuestros inicios, hemos trabajado para crear un espacio donde puedas encontrar
            lo que buscas sin complicaciones. Ya sea que necesites algo para ti, para tu hogar 
            o para regalar, aquí lo encontrarás. 
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Comercio_electronico.jpg" alt="Imagen de la tienda"/>
            </section>


            <section id="contactus" className="contacto">
                <h2>Contáctanos</h2>
                <p>Si tienes dudas o comentarios, llena este formulario y te responderemos pronto.</p>

                <form className="form-contacto">
                    <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                    </div>

                    <div>
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" required />
                    </div>

                    <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </section>

            <Footer/>
        </>

    )
}

export default HomePage;