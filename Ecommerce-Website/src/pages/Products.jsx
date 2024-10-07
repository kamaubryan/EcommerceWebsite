import  { useState, useEffect } from "react";
 import "./Products.css"

const Product = () => {
  // State to store products, cart items, loading, and error
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State for cart items
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  const fetchApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?");
      const fetchData = await response.json();
      setProducts(fetchData);
      setLoading(false);
    } catch (error) {
      setError("Failed to load products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    alert(`${product.title} has been added to your cart!`);
  };

  // Render loading or error message
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="products" className="products">
      {products.map(({ id, image, title, price, description }) => (
        <div key={id} className="card-body">
          <img src={image} alt={title} />
          <h4>{title}</h4>
          <p>Price: ${price}</p>
          <p>{description}</p>
          {/* Add to Cart button */}
          <button onClick={() => addToCart({ id, title, price })}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* Display cart items (optional) */}
     
    </div>
  );
};

export default Product;
