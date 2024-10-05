// src/components/ProductDetails.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetailsProps {
  addToCart: (product: any) => void;
  addToWishlist: (product: any) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart, addToWishlist }) => {
  const { id } = useParams<{ id: string }>();

  // Mock product details (replace this with actual logic to fetch product data)
  const product = {
    id: parseInt(id || '0'),
    name: `Game ${id}`,
    description: "This is an amazing game",
    price: 49.99,
    image: "link_to_image", // replace with actual image link
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;
