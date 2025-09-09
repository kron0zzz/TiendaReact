import {NavLink} from 'react-router-dom'
import '../../carrito/styles/cartStyle.css'
function Cart ({cart, onAdd, onRemove}){

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const envio = cart.length > 0 ? 5 : 0; // ejemplo: envío fijo
    const total = subtotal + envio;

    return(
        <>
           

        <div>
            <div className="container">
                <h1>🛒 Carrito de Compras</h1>
                {cart.length === 0 ? (
                    <p> Tu carro está vacío </p>
                ): (
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
                        {/*<tr>
                            <td>Producto 1</td>
                            <td><img src="https://via.placeholder.com/60" alt="Producto 1"/></td>
                            <td>$20.000</td>
                            <td>1</td>
                            <td>$20.000</td>
                            <td className="actions">
                                <button className="btn-add">+</button>
                                <button className="btn-remove">-</button>
                            </td>
                        </tr>*/}
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td><img src={item.image} alt={item.title} width='60'/></td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                                <td className="actions">
                                    <button className="btn-add" onClick={() => onAdd(item)}>+</button>
                                    <button className="btn-remove" onClick={() => onRemove(item.id)}>-</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                )}
                <div className="summary">
                    <p>Subtotal: <strong>${subtotal}</strong></p>
                    <p>Envío: <strong>${envio}</strong></p>
                    <p>Total: <strong>${total}</strong></p>
                </div>
                <div className="checkout">
                    <button><NavLink to="/" className="btn-content" >Volver al inicio</NavLink></button>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </div>

        </>
    )
}

export default Cart;