// src/components/Wishlist.tsx

import React from 'react';

interface WishlistProps {
  wishlistItems: any[];
  removeFromWishlist: (id: number) => void;
  moveToCart: (product: any) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlistItems, removeFromWishlist, moveToCart }) => {
  if (wishlistItems.length === 0) {
    return <h2>Your Wishlist is Empty</h2>;
  }

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} className="wishlist-image" />
            <div className="wishlist-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <div className="button-group">
                <button onClick={() => moveToCart(item)} className="button">Move to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)} className="button">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
