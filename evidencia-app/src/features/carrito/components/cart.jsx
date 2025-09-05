import {NavLink} from 'react-router-dom'
import '../../carrito/styles/cartStyle.css'
function Cart (){

    return(
        <>
           

        <body>
            <div class="container">
                <h1>🛒 Carrito de Compras</h1>
                <table>
                <thead>
                    <tr>
                    <th>Producto</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Producto 1</td>
                    <td><img src="https://via.placeholder.com/60" alt="Producto 1"/></td>
                    <td>$20.000</td>
                    <td>1</td>
                    <td>$20.000</td>
                    <td class="actions">
                        <button class="btn-add">+</button>
                        <button class="btn-remove">-</button>
                    </td>
                    </tr>
                    <tr>
                    <td>Producto 2</td>
                    <td><img src="https://via.placeholder.com/60" alt="Producto 2"/></td>
                    <td>$15.000</td>
                    <td>2</td>
                    <td>$30.000</td>
                    <td class="actions">
                        <button class="btn-add">+</button>
                        <button class="btn-remove">-</button>
                    </td>
                    </tr>
                </tbody>
                </table>
                <div class="summary">
                    <p>Subtotal: <strong>$50.000</strong></p>
                    <p>Envío: <strong>$5.000</strong></p>
                    <p>Total: <strong>$55.000</strong></p>
                </div>
                <div class="checkout">
                    <button><NavLink to="/" className="btn-content" >Volver al inicio</NavLink></button>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </body>

        </>
    )
}

export default Cart;