// src/components/ProductsList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import game6 from '../assets/game6.png';
import game7 from '../assets/game7.png';
import game8 from '../assets/game8.png';
import game9 from '../assets/game9.png';
import game10 from '../assets/game10.png';
import game11 from '../assets/game11.png';
import game12 from '../assets/game12.png';
import game13 from '../assets/game13.png';
import game14 from '../assets/game14.png';
import game15 from '../assets/game15.png';
import game16 from '../assets/game16.png';
import game17 from '../assets/game17.png';
import game18 from '../assets/game18.png';
import game19 from '../assets/game19.png';
import game20 from '../assets/game20.png';
import game21 from '../assets/game21.png';
import game22 from '../assets/game22.png';
import game23 from '../assets/game23.png';
import game24 from '../assets/game24.png';
import game25 from '../assets/game25.png';
import game26 from '../assets/game26.png';
import game27 from '../assets/game27.png';
import game28 from '../assets/game28.png';
import game29 from '../assets/game29.png';
import game30 from '../assets/game30.png';
import game31 from '../assets/game31.png';
import game32 from '../assets/game32.png';
import game33 from '../assets/game33.png';
import game34 from '../assets/game34.png';
import game35 from '../assets/game35.png';
import game36 from '../assets/game36.png';
import game37 from '../assets/game37.png';
import game38 from '../assets/game38.png';
import game39 from '../assets/game39.png';
import game40 from '../assets/game40.png';
import game41 from '../assets/game41.png';
import game42 from '../assets/game42.png';
import game43 from '../assets/game43.png';
import game44 from '../assets/game44.png';
import game45 from '../assets/game45.png';
import game46 from '../assets/game46.png';
import game47 from '../assets/game47.png';
import game48 from '../assets/game48.png';
import game49 from '../assets/game49.png';
import game50 from '../assets/game50.png';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
const ProductList: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Game 1", description: "Exciting RPG", price: 49.99, image: game1 },
    { id: 2, name: "Game 2", description: "Thrilling FPS", price: 59.99, image: game2 },
    { id: 3, name: "Game 3", description: "Challenging Puzzle Game", price: 19.99, image: game3 },
    { id: 4, name: "Game 4", description: "Open World Adventure", price: 69.99, image: game4 },
    { id: 5, name: "Game 5", description: "Fast-paced Racing", price: 29.99, image: game5 },
    { id: 6, name: "Game 6", description: "Futuristic Strategy", price: 39.99, image: game6 },
    { id: 7, name: "Game 7", description: "Fantasy MMORPG", price: 59.99, image: game7 },
    { id: 8, name: "Game 8", description: "Classic Platformer", price: 14.99, image: game8 },
    { id: 9, name: "Game 9", description: "Immersive Simulation", price: 49.99, image: game9 },
    { id: 10, name: "Game 10", description: "Real-time Strategy", price: 34.99, image: game10 },
    { id: 11, name: "Game 11", description: "Action-packed Shooter", price: 39.99, image: game11 },
    { id: 12, name: "Game 12", description: "Exploration Adventure", price: 49.99, image: game12 },
    { id: 13, name: "Game 13", description: "Puzzle-solving Quest", price: 29.99, image: game13 },
    { id: 14, name: "Game 14", description: "Multiplayer Battle", price: 59.99, image: game14 },
    { id: 15, name: "Game 15", description: "Epic Fantasy RPG", price: 69.99, image: game15 },
    { id: 16, name: "Game 16", description: "Challenging Platformer", price: 24.99, image: game16 },
    { id: 17, name: "Game 17", description: "Space Exploration", price: 44.99, image: game17 },
    { id: 18, name: "Game 18", description: "Survival Horror", price: 59.99, image: game18 },
    { id: 19, name: "Game 19", description: "Co-op Action", price: 39.99, image: game19 },
    { id: 20, name: "Game 20", description: "Retro Arcade", price: 9.99, image: game20 },
    { id: 21, name: "Game 21", description: "Fantasy MOBA", price: 49.99, image: game21 },
    { id: 22, name: "Game 22", description: "Puzzle Adventure", price: 19.99, image: game22 },
    { id: 23, name: "Game 23", description: "First-person Shooter", price: 59.99, image: game23 },
    { id: 24, name: "Game 24", description: "Tactical Warfare", price: 49.99, image: game24 },
    { id: 25, name: "Game 25", description: "Racing Simulator", price: 39.99, image: game25 },
    { id: 26, name: "Game 26", description: "Sci-fi Adventure", price: 54.99, image: game26 },
    { id: 27, name: "Game 27", description: "Mystery Detective", price: 24.99, image: game27 },
    { id: 28, name: "Game 28", description: "Sports Simulation", price: 59.99, image: game28 },
    { id: 29, name: "Game 29", description: "Competitive Shooter", price: 29.99, image: game29 },
    { id: 30, name: "Game 30", description: "Zombie Survival", price: 49.99, image: game30 },
    { id: 31, name: "Game 31", description: "Interactive Story", price: 19.99, image: game31 },
    { id: 32, name: "Game 32", description: "Fantasy Tactics", price: 39.99, image: game32 },
    { id: 33, name: "Game 33", description: "Classic JRPG", price: 44.99, image: game33 },
    { id: 34, name: "Game 34", description: "Historical Strategy", price: 34.99, image: game34 },
    { id: 35, name: "Game 35", description: "Modern FPS", price: 59.99, image: game35 },
    { id: 36, name: "Game 36", description: "Action-Adventure", price: 49.99, image: game36 },
    { id: 37, name: "Game 37", description: "Survival Simulation", price: 29.99, image: game37 },
    { id: 38, name: "Game 38", description: "Retro RPG", price: 14.99, image: game38 },
    { id: 39, name: "Game 39", description: "3D Platformer", price: 34.99, image: game39 },
    { id: 40, name: "Game 40", description: "Indie Puzzle", price: 9.99, image: game40 },
    { id: 41, name: "Game 41", description: "Fantasy Open World", price: 69.99, image: game41 },
    { id: 42, name: "Game 42", description: "Military Strategy", price: 39.99, image: game42 },
    { id: 43, name: "Game 43", description: "Urban Adventure", price: 49.99, image: game43 },
    { id: 44, name: "Game 44", description: "Co-op Puzzle", price: 19.99, image: game44 },
    { id: 45, name: "Game 45", description: "Stealth Action", price: 34.99, image: game45 },
    { id: 46, name: "Game 46", description: "Horror Mystery", price: 44.99, image: game46 },
    { id: 47, name: "Game 47", description: "Sandbox Exploration", price: 29.99, image: game47 },
    { id: 48, name: "Game 48", description: "Rogue-like Dungeon", price: 24.99, image: game48 },
    { id: 49, name: "Game 49", description: "Tactical Shooter", price: 49.99, image: game49 },
    { id: 50, name: "Game 50", description: "Futuristic Racing", price: 39.99, image: game50 }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="price">${product.price.toFixed(2)}</div>
          <Link to={`/product/${product.id}`}>
            <button className="button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;