import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Cart.jsx
const Cart = () => {
const { cartItems } = useContext(CartContext);


  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(({ id, title, price}) => (
            <li key={id}>
              <h4>{title}</h4>
              <p>Price: ${price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
