import '../styles/productos.css'
import products from '../../../products.json'
function Productos() {


  return (
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
  
  )
}



export default Productos
