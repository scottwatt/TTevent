import React from 'react';
import './GalleryPage.css';

// Automatically import all images from the './images' directory
const imageContext = require.context('./images', false, /\.(png|jpe?g|svg)$/);

// Create an array of image URLs
const stockImages = imageContext.keys().map(imageContext);

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      {stockImages.map((img, index) => (
        <div key={index} className="gallery-item">
          <img src={img} alt={`Stock Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
