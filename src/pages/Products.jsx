import { useState } from "react";
import { useEffect, useContext } from "react";
import {  Link } from "react-router-dom";

import "./Products.css";
import { CartContext } from "../context/CartContext";
const Products = () => {
  const { setCartItems, cartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  const fetchApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchData = await response.json();
      setProducts(fetchData);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to load products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
    console.log(cartItems);
  }, [cartItems]);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="products" className="products">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("men's clothing")}>
          Men&apos;s Clothing
        </button>
        <button onClick={() => setFilter("women's clothing")}>
          Women&apos;s Clothing
        </button>
        <button onClick={() => setFilter("jewelery")}>Jewelery</button>
        <button onClick={() => setFilter("electronics")}>Electronics</button>
      </div>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          filteredProducts.map(({ id, image, title, price, description }) => (
            <div key={id} className="card-body cardbody">
              <Link to={`/products/${id}`}>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>Price: ${price}</p>
                <p>{description}</p>
              </Link>
              <button
                onClick={() => {
      
                  localStorage.setItem(
                    "cart",
                    JSON.stringify(
                     cartItems
                    )
                  );
                  setCartItems([...cartItems, { id, title , image, price, description}])}
              
              }
                
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
