import { useState, useEffect } from "react";
import "../Components/FeaturesCards.css";

const FeaturedCards = () => {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch products from the API
  const fetchApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const fetchData = await response.json();
      console.log("Fetched data", fetchData);
      setProducts(fetchData); // Update state with fetched data
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.log("There was an error loading the page", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchApi();
  }, []);

  // Render loading message or the products
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div  className="product">       
      {products.map(({ image, title }, index) => (
        <div className="card-body" key={index}>
          <img src={image} alt={title} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedCards;
