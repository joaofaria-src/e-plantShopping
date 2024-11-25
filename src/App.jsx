import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="about-us">
            <p>
              At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a
              wide range of high-quality plants that enhance the beauty of your surroundings and contribute to a
              sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every
              plant enthusiast.
            </p>
            <p>
              Whether you're a seasoned gardener or starting your green journey, we're here to support you every step of
              the way. Let us help you find the perfect plant for your home or office.
            </p>
          </div>
        </div>
      )}
      {showProductList && (
        <div className="product-list-container">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
