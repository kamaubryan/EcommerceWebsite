import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"

// Cart.jsx
const Cart = () => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(({ id, title, price, image, quantity }) => (
            <li key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
              <p>Price: ${price}</p>
              <p>Quantity: {quantity}</p>
             
              <button onClick={() => removeItem(id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
