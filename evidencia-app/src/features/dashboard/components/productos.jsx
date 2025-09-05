import '../styles/productos.css'
import products from '../../../products.json'
import Header from '../../shared/components/header'
import Slider from '../../shared/components/slider'
import Footer from '../../shared/components/footer'
function Productos() {


  return (
    <>
    <Header/>
    <Slider/>
    <section className="products">
        {products.map(product =>(
            <div className="card" key={product.id}>
                <div className="image">
                    <img src={product.image} alt="" />
                </div>
                <div className="info">
                    <h4>{product.title}</h4>
                    <p>${product.price} USD</p>
                    <button>Ver Más</button>

                </div>
            </div>
        ))}
      
    </section>
    <Footer/>
    </>
  
  )
}



export default Productos
