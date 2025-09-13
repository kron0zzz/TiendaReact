import '../styles/productos.css'
import { useEffect, useState } from "react";
import {fetchProducts} from "../../../api/products_api"
//import products from '../../../products.json'
import Header from '../../shared/components/header'
import Slider from '../../shared/components/slider'
import Footer from '../../shared/components/footer'
function Productos({onAddToCart}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts()
        .then(setProducts)
        .catch(() => setError("Error cargando productos. Intenta nuevamente") )
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando productos...</p>; 
    if (error) return <p>No se pudieron cargar los productos. Intenta nuevamente.</p>

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
                    <h4 title={product.title}> {product.title} </h4>
                    <p>${product.price} USD</p>
                    <h5>{product.category}</h5>
                    <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>

                </div>
            </div>
        ))}
      
    </section>
    <Footer/>
    </>
  
  )
}



export default Productos
